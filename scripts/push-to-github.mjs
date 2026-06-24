/**
 * Push current project to GitHub via the Git Data API.
 * Accepts optional --tag=vX.Y.Z and --message="..." CLI flags.
 */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const PAT   = process.env.GITHUB_PAT;
const OWNER = 'devkumarsil-creator';
const REPO  = 'persona';
const BRANCH = 'main';

// Parse CLI flags
const args = process.argv.slice(2);
const tagArg = args.find(a => a.startsWith('--tag='))?.split('=')[1];
const msgArg = args.find(a => a.startsWith('--message='))?.split('=').slice(1).join('=');

if (!PAT) { console.error('Missing GITHUB_PAT'); process.exit(1); }

const BASE = 'https://api.github.com';
const headers = {
  'Authorization': `Bearer ${PAT}`,
  'Accept': 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'Content-Type': 'application/json',
};

async function api(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`GitHub API ${method} ${path} → ${res.status}: ${text.slice(0, 400)}`);
    throw new Error(`API error ${res.status}`);
  }
  return JSON.parse(text);
}

// 1. Ensure repo exists
console.log('\n1. Checking repo...');
try {
  await api('GET', `/repos/${OWNER}/${REPO}`);
  console.log('   Repo exists ✓');
} catch {
  console.log('   Creating repo...');
  await api('POST', `/user/repos`, { name: REPO, private: false, auto_init: false });
  console.log('   Repo created ✓');
}

// 2. Get tracked files
console.log('\n2. Getting tracked files...');
const tracked = execSync('git --no-optional-locks ls-files', { encoding: 'utf8' })
  .split('\n').filter(Boolean);
console.log(`   ${tracked.length} files`);

// 3. Create blobs
console.log('\n3. Creating blobs...');
const treeItems = [];
let count = 0;
for (const file of tracked) {
  try {
    const content = readFileSync(file);
    const isBinary = /\.(png|jpg|jpeg|gif|ico|webp|woff|woff2|ttf|eot|bin|zip)$/i.test(file);
    const blob = await api('POST', `/repos/${OWNER}/${REPO}/git/blobs`, isBinary
      ? { content: content.toString('base64'), encoding: 'base64' }
      : { content: content.toString('utf8'), encoding: 'utf8' }
    );
    treeItems.push({ path: file, mode: '100644', type: 'blob', sha: blob.sha });
    count++;
    if (count % 25 === 0) console.log(`   ${count}/${tracked.length}...`);
  } catch (e) {
    console.warn(`   Skip ${file}: ${e.message}`);
  }
}
console.log(`   ${count} blobs ✓`);

// 4. Create tree
console.log('\n4. Creating tree...');
const tree = await api('POST', `/repos/${OWNER}/${REPO}/git/trees`, { tree: treeItems });
console.log('   Tree ✓', tree.sha.slice(0, 8));

// 5. Get parent commit
let parentSha = null;
try {
  const ref = await api('GET', `/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
  parentSha = ref.object.sha;
  console.log('\n5. Parent:', parentSha.slice(0, 8));
} catch {
  console.log('\n5. First commit (no parent)');
}

// 6. Create commit
console.log('\n6. Creating commit...');
const message = msgArg
  ?? execSync('git --no-optional-locks log --format="%s" -1', { encoding: 'utf8' }).trim()
  ?? 'Sync from Replit';
const commit = await api('POST', `/repos/${OWNER}/${REPO}/git/commits`, {
  message,
  tree: tree.sha,
  parents: parentSha ? [parentSha] : [],
});
console.log(`   Commit ✓ ${commit.sha.slice(0, 8)} — "${message}"`);

// 7. Update branch ref
console.log('\n7. Updating branch...');
try {
  await api('PATCH', `/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
    sha: commit.sha, force: true,
  });
} catch {
  await api('POST', `/repos/${OWNER}/${REPO}/git/refs`, {
    ref: `refs/heads/${BRANCH}`, sha: commit.sha,
  });
}
console.log('   Branch updated ✓');

// 8. Optionally create a tag
if (tagArg) {
  console.log(`\n8. Creating tag ${tagArg}...`);
  // Create annotated tag object
  const tagObj = await api('POST', `/repos/${OWNER}/${REPO}/git/tags`, {
    tag: tagArg,
    message: `Release ${tagArg}`,
    object: commit.sha,
    type: 'commit',
  });
  // Create the ref
  try {
    await api('POST', `/repos/${OWNER}/${REPO}/git/refs`, {
      ref: `refs/tags/${tagArg}`,
      sha: tagObj.sha,
    });
    console.log(`   Tag ${tagArg} created ✓`);
  } catch {
    // Tag might already exist — force update
    await api('PATCH', `/repos/${OWNER}/${REPO}/git/refs/tags/${tagArg}`, {
      sha: tagObj.sha, force: true,
    });
    console.log(`   Tag ${tagArg} updated ✓`);
  }
}

console.log(`\n✅  https://github.com/${OWNER}/${REPO}`);
if (tagArg) {
  console.log(`🏷️   https://github.com/${OWNER}/${REPO}/releases/tag/${tagArg}`);
}
