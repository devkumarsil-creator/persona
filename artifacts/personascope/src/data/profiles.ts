export interface Profile {
  code: string;
  title: string;
  tagline: string;
  summary: string;
  strengths: string[];
  growthAreas: string[];
  workPreferences: string[];
  communicationStyle: string;
  accentColor: string;
}

export const profiles: Profile[] = [
  {
    code: 'OPAS',
    title: 'Field Coordinator',
    tagline: 'Turning plans into results through structured, people-aware execution.',
    summary:
      'You are the person others rely on when a complex plan needs to actually happen. You combine outward energy with a sharp preference for the concrete, making you equally comfortable rallying a team and solving a hands-on problem. Your decisions are principled and evidence-driven, and your organized nature means nothing slips through the cracks.',
    strengths: [
      'Exceptional at organizing people and resources toward a defined goal',
      'Translates abstract plans into clear, actionable steps for your team',
      'Consistent and reliable — others know they can count on your follow-through',
      'Skilled at spotting practical obstacles before they become real problems',
      'Brings order and momentum to complex, multi-stakeholder projects',
    ],
    growthAreas: [
      'Letting go of rigid timelines when creative exploration needs breathing room',
      'Trusting your instincts when data is incomplete or ambiguous',
      'Resisting the urge to over-plan in fast-changing environments',
      'Making space for unstructured thinking time in your workflow',
    ],
    workPreferences: [
      'Clear roles, responsibilities, and deadlines from the outset',
      'Regular check-ins and structured progress updates',
      'Environments where efficiency and output are genuinely valued',
      'Cross-functional collaboration with clear chains of accountability',
    ],
    communicationStyle:
      'You communicate directly and practically. You get to the point quickly, prefer written summaries after verbal discussions, and follow up reliably. You value specifics over generalities.',
    accentColor: '#4f46e5',
  },
  {
    code: 'OPAD',
    title: 'Action Pioneer',
    tagline: 'Leading the charge with energy, pragmatism, and flexible determination.',
    summary:
      'You are energized by people and motivated by results — a rare combination that makes you an effective driver of real-world change. You prefer concrete realities over abstract theories and make decisions with clear logic, yet you stay nimble when circumstances shift. You are at your best when there is momentum to build and others to inspire.',
    strengths: [
      'Rapidly mobilizes people around a clear, practical objective',
      'Adapts without losing sight of the goal when plans change',
      'Decisive under pressure with strong situational awareness',
      'Highly credible when presenting fact-based arguments to a group',
      'Energizes teams during challenging or high-stakes moments',
    ],
    growthAreas: [
      'Slowing down to consider emotional undercurrents in team dynamics',
      'Developing patience for deliberate, slow-moving consensus processes',
      'Building in reflection time rather than always pushing toward the next action',
      'Softening directness in sensitive interpersonal situations',
    ],
    workPreferences: [
      'Dynamic environments with clear targets and measurable milestones',
      'Autonomy to make on-the-spot judgment calls',
      'Teams that move fast and communicate directly',
      'Visible outcomes and regular recognition for tangible progress',
    ],
    communicationStyle:
      'You communicate with energy and confidence. Your messages are brief, direct, and action-oriented. You lead with conclusions and add context only when it is strategically necessary.',
    accentColor: '#0891b2',
  },
  {
    code: 'OPHS',
    title: 'Community Builder',
    tagline: 'Creating strong, supportive teams around practical shared goals.',
    summary:
      'You are the connective tissue of any team — someone who combines outgoing warmth with a grounded, practical mindset. You lead with empathy while remaining focused on tangible outcomes. Your structured nature ensures that the relationships you build actually produce results, and your people-first approach creates cultures of trust and belonging.',
    strengths: [
      'Building cohesive, high-trust teams from diverse individuals',
      'Creating systems that serve both efficiency and human connection',
      'Sensing interpersonal tensions early and addressing them constructively',
      'Inspiring commitment by making everyone feel genuinely included',
      'Translating shared values into concrete, workable agreements',
    ],
    growthAreas: [
      'Saying no without guilt when team harmony is at risk of compromising results',
      'Prioritizing your own needs rather than defaulting to others',
      'Being willing to make unpopular calls when the situation demands it',
      'Accepting that not every conflict requires your mediation',
    ],
    workPreferences: [
      'Collaborative, team-first cultures with genuine psychological safety',
      'Clear processes that everyone understands and has agreed to',
      'Regular rituals that reinforce team cohesion and shared purpose',
      'Roles where relationship-building is a core part of the job',
    ],
    communicationStyle:
      'Warm, inclusive, and considerate. You check in before diving in. You acknowledge others\' contributions and ensure quieter voices are heard. You avoid bluntness that might wound unnecessarily.',
    accentColor: '#059669',
  },
  {
    code: 'OPHD',
    title: 'Catalyst Connector',
    tagline: 'Bringing people together and igniting momentum toward what matters.',
    summary:
      'You have an extraordinary ability to galvanize groups and channel collective energy toward meaningful action. You see what is possible in people and translate that vision into practical next steps. Your adaptive nature makes you deeply comfortable with change, and your warmth means people follow you willingly rather than because they have to.',
    strengths: [
      'Inspiring others by connecting everyday actions to a larger purpose',
      'Building rapid trust and authentic rapport with diverse individuals',
      'Energizing stalled teams and reigniting motivation in challenging times',
      'Reading the room and adjusting your approach in real time',
      'Turning interpersonal insight into decisive, compassionate leadership',
    ],
    growthAreas: [
      'Following through on commitments when the excitement fades',
      'Developing systems and routines to support your spontaneous style',
      'Distinguishing between genuine consensus and social conformity',
      'Allowing logic and data to challenge your intuitive judgments',
    ],
    workPreferences: [
      'Roles with genuine human impact and frequent interpersonal interaction',
      'Fluid, evolving environments where adaptability is rewarded',
      'Creative freedom balanced with a meaningful mission',
      'Teams that value initiative, warmth, and authentic leadership',
    ],
    communicationStyle:
      'Expressive, enthusiastic, and deeply relational. You inspire through stories and vivid language. You read emotional cues naturally and tailor your message to the person in front of you.',
    accentColor: '#d97706',
  },
  {
    code: 'OCAS',
    title: 'Systems Architect',
    tagline: 'Designing structured solutions to complex, multidimensional problems.',
    summary:
      'You are a rare synthesizer — someone who can hold abstract ideas and analytical rigor in the same mind simultaneously. You engage the world with curiosity and enthusiasm, but always through the lens of logical precision. Your structured nature means you do not just generate ideas; you build them into durable, scalable systems that outlast any single conversation.',
    strengths: [
      'Designing robust frameworks and processes from first principles',
      'Identifying hidden structural flaws in plans before they cause failure',
      'Communicating complex ideas clearly to both technical and non-technical audiences',
      'Long-range strategic thinking grounded in rigorous analysis',
      'Translating abstract concepts into structured, actionable roadmaps',
    ],
    growthAreas: [
      'Moving forward when perfect information is unavailable',
      'Valuing experiential knowledge alongside systematic analysis',
      'Staying engaged with implementation after the conceptual work is done',
      'Acknowledging the human dimensions of decisions, not just the logical ones',
    ],
    workPreferences: [
      'Complex, intellectually demanding problems that reward deep analysis',
      'Clear timelines and defined review points within flexible creative processes',
      'Environments that prize rigor, accuracy, and thoughtful design',
      'Collaboration with sharp, curious peers who challenge your thinking',
    ],
    communicationStyle:
      'Precise and structured. You prefer well-organized written communication, back claims with evidence, and enjoy intellectual debate. You dislike vague, emotional arguments and value epistemic clarity.',
    accentColor: '#7c3aed',
  },
  {
    code: 'OCAD',
    title: 'Frontier Navigator',
    tagline: 'Charting new territory with intellectual curiosity and decisive logic.',
    summary:
      'You are drawn to the edge of the map — the problems that have not been solved, the ideas that have not been tested, and the possibilities no one has articulated yet. You combine outward confidence with deep conceptual thinking and hard-nosed analysis. You are adaptive enough to pivot when reality surprises you, but rigorous enough to know when to hold your ground.',
    strengths: [
      'Identifying emerging opportunities before they become obvious to others',
      'Synthesizing information from diverse domains into original insights',
      'Thriving in uncharted territory where standard approaches fall short',
      'Communicating bold ideas persuasively to skeptical audiences',
      'Pivoting rapidly when data signals a better path without losing momentum',
    ],
    growthAreas: [
      'Completing projects rather than moving on once the conceptual challenge is solved',
      'Accounting for the human experience behind analytical decisions',
      'Developing patience for incremental progress and routine execution',
      'Creating enough structure to allow others to follow your lead',
    ],
    workPreferences: [
      'Innovative, fast-moving environments with room for intellectual risk-taking',
      'Minimal bureaucratic constraints on your research and exploration',
      'Cross-disciplinary collaboration with equally curious peers',
      'Clear feedback loops so you can rapidly test and refine hypotheses',
    ],
    communicationStyle:
      'Incisive and exploratory. You think out loud, challenge assumptions openly, and welcome pushback as an intellectual exercise. You are at your best in substantive debates with people who can hold their own.',
    accentColor: '#2563eb',
  },
  {
    code: 'OCHS',
    title: 'Visionary Mentor',
    tagline: 'Guiding others toward a future they cannot yet see for themselves.',
    summary:
      'You inhabit a remarkable intersection: the idealism of a visionary and the relational depth of a true mentor. You think in concepts, possibilities, and long-term potential — and you pour all of that into the growth of the people around you. Outgoing and structured, you create environments where bold thinking flourishes within a safe, human-centered container.',
    strengths: [
      'Articulating a compelling vision that others genuinely want to pursue',
      'Cultivating others\' growth through targeted encouragement and challenge',
      'Building learning cultures where curiosity and psychological safety coexist',
      'Designing developmental journeys that unfold over time with intention',
      'Holding a long view on human potential without losing sight of present needs',
    ],
    growthAreas: [
      'Accepting that not everyone shares your timeline for growth or your enthusiasm for ideas',
      'Balancing advocacy for others with advocacy for yourself',
      'Making hard calls about people when kindness would lead to worse outcomes',
      'Tolerating messiness and imperfection in the growth process',
    ],
    workPreferences: [
      'Roles centered on developing people, programs, or organizational capacity',
      'Structured environments that provide a stable foundation for creative work',
      'Cultures that genuinely invest in long-term development over short-term output',
      'Close-knit teams where deep intellectual and emotional bonds are possible',
    ],
    communicationStyle:
      'Warm, nuanced, and expansive. You lead with questions that deepen understanding. You adapt your message to your audience\'s developmental stage and prefer conversations that go somewhere meaningful.',
    accentColor: '#0d9488',
  },
  {
    code: 'OCHD',
    title: 'Possibility Weaver',
    tagline: 'Knitting together ideas, people, and potential into something new.',
    summary:
      'You see the world as a tapestry of unrecognized connections, and you have the social energy and adaptive creativity to help others see it too. You combine conceptual imagination with genuine warmth, making you an inspiring force in any environment that benefits from both new ideas and strong relationships. You do not just adapt to change — you generate it.',
    strengths: [
      'Seeing connections between disparate ideas and translating them into new possibilities',
      'Creating contagious enthusiasm around change and creative initiatives',
      'Building diverse networks of relationships that cross organizational silos',
      'Facilitating collaborative breakthroughs in complex, ambiguous situations',
      'Adapting your approach in real time while keeping others engaged and aligned',
    ],
    growthAreas: [
      'Anchoring creative energy in follow-through and accountability',
      'Developing a more consistent personal process amid constant variety',
      'Grounding enthusiastic plans in factual constraints and resource realities',
      'Distinguishing true innovation from novelty for its own sake',
    ],
    workPreferences: [
      'Creative, collaborative environments where originality is celebrated',
      'Roles that blend idea generation with community building',
      'Freedom to prototype and experiment without excessive bureaucracy',
      'Work that has a visible human dimension and meaningful impact',
    ],
    communicationStyle:
      'Vivid, connective, and relationship-first. You weave personal anecdotes and big ideas together naturally. You energize conversations and bring out the best in quieter contributors.',
    accentColor: '#ea580c',
  },
  {
    code: 'IPAS',
    title: 'Precision Planner',
    tagline: 'Building reliable systems through quiet focus and analytical discipline.',
    summary:
      'You are the quiet force behind plans that actually work. You think carefully, act deliberately, and execute with exceptional reliability. Your preference for the concrete and logical means you see clearly where others see fog. You are most valuable where careful planning, analytical accuracy, and disciplined follow-through are the difference between success and failure.',
    strengths: [
      'Producing high-quality, error-resistant work through careful independent focus',
      'Designing airtight processes that consistently deliver on time and on spec',
      'Identifying flaws and risks that other, faster-moving thinkers overlook',
      'Maintaining high standards without being distracted by noise or social pressure',
      'Creating dependable systems that do not require constant supervision to function',
    ],
    growthAreas: [
      'Sharing in-progress thinking even before ideas are fully formed',
      'Embracing uncertainty as an inherent feature of complex work, not a failure',
      'Balancing precision with the practical cost of perfectionism on timelines',
      'Building in flexibility for when plans inevitably collide with messy reality',
    ],
    workPreferences: [
      'Low-distraction environments with sufficient time for deep, focused work',
      'Clear briefs with well-defined success criteria and quality standards',
      'Roles that reward thoroughness and accuracy over speed and output volume',
      'Regular, structured feedback in private settings rather than public critique',
    ],
    communicationStyle:
      'Careful, precise, and well-prepared. You prefer written communication and take time to formulate your thoughts before sharing them. You are concise once you speak, and your contributions carry weight.',
    accentColor: '#1d4ed8',
  },
  {
    code: 'IPAD',
    title: 'Adaptive Craftsperson',
    tagline: 'Mastering the practical with a flexible hand and a quiet determination.',
    summary:
      'You are defined by the quality of what you produce. You bring focused attention, practical intelligence, and a refreshing ability to pivot smoothly when circumstances change — without drama and without losing your standards. You work best when you have the autonomy to chart your own course toward a clear outcome.',
    strengths: [
      'Producing expert-level output in your domain with consistent craft',
      'Adjusting fluidly to new constraints without compromising core quality',
      'Working independently through complex, multi-step problems without losing thread',
      'Building practical, elegant solutions that are easy for others to adopt',
      'Staying calm and effective when others struggle with shifting conditions',
    ],
    growthAreas: [
      'Proactively communicating progress and challenges to key stakeholders',
      'Building structure around yourself when environments fail to provide it',
      'Moving forward under pressure rather than waiting for perfect conditions',
      'Sharing knowledge generously rather than perfecting in isolation',
    ],
    workPreferences: [
      'High-autonomy roles where output quality is the primary metric',
      'Flexible timelines that accommodate discovery and iteration',
      'Opportunities to develop and apply deep expertise in a craft or discipline',
      'Minimal micromanagement with regular but unobtrusive check-ins',
    ],
    communicationStyle:
      'Quiet, deliberate, and work-focused. You say what needs to be said and let your output speak. You are most articulate when discussing your area of expertise.',
    accentColor: '#0f766e',
  },
  {
    code: 'IPHS',
    title: 'Steady Supporter',
    tagline: 'Providing reliable, empathic support through consistent and careful presence.',
    summary:
      'You are the person others seek out when they need genuine help, not performative enthusiasm. You are a quiet, steady presence — deeply practical, consistently reliable, and genuinely attuned to the people around you. You create trust through accumulated actions over time, and your structured nature ensures that your support never feels chaotic or conditional.',
    strengths: [
      'Providing deep, dependable support that others consistently count on',
      'Noticing and responding to individual needs with care and specificity',
      'Following through on commitments with exceptional reliability',
      'Creating stable, safe environments where others can do their best work',
      'Translating care into concrete, practical acts of help',
    ],
    growthAreas: [
      'Advocating for your own needs as firmly as you advocate for others',
      'Setting clear limits with people who consistently deplete your energy',
      'Trusting your insights enough to share them more proactively',
      'Expanding your comfort with situations that lack clear structure',
    ],
    workPreferences: [
      'Stable, people-centered roles where reliability is recognized and rewarded',
      'Clear expectations that allow you to plan and deliver without ambiguity',
      'Collaborative environments with strong interpersonal trust',
      'Consistent routines with occasional, manageable variety',
    ],
    communicationStyle:
      'Quiet, warm, and sincere. You listen carefully and respond thoughtfully. You choose words with care and communicate most openly in one-on-one settings rather than groups.',
    accentColor: '#15803d',
  },
  {
    code: 'IPHD',
    title: 'Empathic Explorer',
    tagline: 'Moving through the world with sensitivity, curiosity, and practical care.',
    summary:
      'You combine a deep inner world with genuine care for the people around you. You are a quiet observer who notices what others miss, and you act on those observations in concrete, meaningful ways. Your adaptive nature lets you move gracefully through uncertainty without losing your essential groundedness or your attention to the human moment.',
    strengths: [
      'Perceiving unspoken emotional dynamics with unusual accuracy and sensitivity',
      'Responding to others\' needs in ways that are both timely and deeply practical',
      'Adapting to new environments quickly without losing your core values',
      'Offering consistent, considered support without requiring recognition',
      'Building trust through patient, sustained attention and genuine follow-through',
    ],
    growthAreas: [
      'Sharing your rich inner perspective more openly with those around you',
      'Building enough personal structure to prevent energy depletion over time',
      'Developing firmer limits with people who take more than they give',
      'Channeling sensitivity into broader advocacy, not only individual care',
    ],
    workPreferences: [
      'Roles that combine independent focus with meaningful human connection',
      'Flexible environments that accommodate your natural rhythms and pace',
      'Work with a visible human impact that rewards sensitivity and attentiveness',
      'Small, trusted teams where deep professional relationships can form',
    ],
    communicationStyle:
      'Gentle, attentive, and highly perceptive. You listen more than you speak, ask meaningful follow-up questions, and communicate most freely through thoughtful writing.',
    accentColor: '#7e22ce',
  },
  {
    code: 'ICAS',
    title: 'Deep Analyst',
    tagline: 'Uncovering truth through rigorous, independent, systematic inquiry.',
    summary:
      'You are the quiet engine of intellectual discovery. You go deeper than others are willing to go, pursue questions others abandon, and emerge with answers that are genuinely hard-won and reliably accurate. Your conceptual curiosity and analytical rigor make you formidable in any domain that rewards careful, independent thinking.',
    strengths: [
      'Sustained, intensive focus on complex intellectual problems over long periods',
      'Building and testing rigorous mental models of intricate systems',
      'Identifying subtle logical flaws or hidden assumptions in prevailing arguments',
      'Producing work of exceptional depth, precision, and original insight',
      'Maintaining intellectual integrity even under pressure to simplify or conform',
    ],
    growthAreas: [
      'Translating complex findings into language accessible to non-expert audiences',
      'Sharing conclusions while they are still works in progress, not only after completion',
      'Accepting that good enough on time is often better than perfect and late',
      'Engaging more actively with the human and organizational context of your work',
    ],
    workPreferences: [
      'Extended blocks of uninterrupted deep work with minimal context-switching',
      'Roles where intellectual rigor is valued more than social visibility',
      'Access to rich information, data, or research materials',
      'Autonomy to pursue a question to its true depth without arbitrary constraints',
    ],
    communicationStyle:
      'Precise, dense, and carefully sourced. You communicate through written work and formal presentation rather than casual conversation. You are exceptionally clear once you have decided to share.',
    accentColor: '#1e40af',
  },
  {
    code: 'ICAD',
    title: 'Independent Trailblazer',
    tagline: 'Forging original paths through intellectual independence and adaptive insight.',
    summary:
      'You go where the evidence leads, even when it is inconvenient — and you do it alone if necessary. You are defined by intellectual independence, conceptual boldness, and a willingness to discard assumptions that no longer serve. Your adaptive nature means you are never imprisoned by your own previous conclusions.',
    strengths: [
      'Generating genuinely original ideas unconstrained by conventional frameworks',
      'Pursuing unconventional research directions with focus and self-direction',
      'Challenging established orthodoxies with well-reasoned, evidence-backed arguments',
      'Adapting your intellectual framework rapidly when new information demands it',
      'Operating effectively in ambiguous, poorly-defined problem spaces',
    ],
    growthAreas: [
      'Bringing others along on your intellectual journey with greater patience and clarity',
      'Developing enough routine structure to sustain momentum across long projects',
      'Finishing lines of inquiry rather than always beginning new ones',
      'Attending to interpersonal dynamics even when you are deeply absorbed in an idea',
    ],
    workPreferences: [
      'Maximum intellectual freedom with minimal bureaucratic interference',
      'Roles that explicitly reward novel, unconventional contributions',
      'Flexible timelines that accommodate deep exploration and iteration',
      'Independent work with occasional access to sharp intellectual peers',
    ],
    communicationStyle:
      'Direct, unfiltered, and conceptually dense. You communicate your ideas on their own terms and expect others to engage with them seriously. Small talk and social performance feel like wasted bandwidth.',
    accentColor: '#9333ea',
  },
  {
    code: 'ICHS',
    title: 'Thoughtful Guide',
    tagline: 'Illuminating others\' paths through deep insight and compassionate wisdom.',
    summary:
      'You are a rare combination of intellectual depth and human warmth. You think carefully about people — their motivations, their potential, their blind spots — and you bring that understanding into your work in ways that genuinely change lives. Quiet and structured, you build trust slowly and profoundly, offering guidance that is both precise and deeply humane.',
    strengths: [
      'Understanding others at a depth that most people never experience from a colleague',
      'Translating complex psychological or interpersonal insight into practical wisdom',
      'Building deeply trusting relationships through consistency, honesty, and genuine care',
      'Designing thoughtful developmental processes with patience and long-term vision',
      'Holding space for others\' growth without imposing your own timeline or expectations',
    ],
    growthAreas: [
      'Ensuring your own needs receive the same careful attention you give to others',
      'Sharing your perspective more proactively rather than waiting to be asked',
      'Engaging with external visibility and advocacy for your own contributions',
      'Accepting that some situations call for directive action rather than thoughtful guidance',
    ],
    workPreferences: [
      'Deep, sustained relationships in small, high-trust professional settings',
      'Structured environments that allow for careful, considered work',
      'Roles that center human development, coaching, or counseling',
      'Autonomy to work at your natural depth and pace without artificial urgency',
    ],
    communicationStyle:
      'Quiet, profound, and deeply personal. You ask questions that reveal more than most people\'s answers. You communicate with exceptional care for the impact of your words.',
    accentColor: '#0e7490',
  },
  {
    code: 'ICHD',
    title: 'Reflective Innovator',
    tagline: 'Reimagining what is possible through quiet insight and deep human understanding.',
    summary:
      'You are an innovator who draws energy from within. You recharge in solitude, think in concepts and connections, and care profoundly about the human implications of everything you create. You are not loud about your ideas — but when you finally share them, they are remarkably considered, original, and worth listening to.',
    strengths: [
      'Generating deeply original ideas shaped by careful human observation',
      'Holding multiple complex perspectives simultaneously without losing empathy',
      'Creating work that quietly but profoundly serves the people it is meant for',
      'Adapting your approach based on the evolving emotional and practical needs of others',
      'Sustaining creative exploration over long periods through inner discipline and curiosity',
    ],
    growthAreas: [
      'Sharing ideas earlier and more frequently before they are fully developed',
      'Building consistent external structure to complement your rich inner life',
      'Developing willingness to advocate boldly for your own contributions',
      'Accepting that not all insights need to be felt before they are acted on',
    ],
    workPreferences: [
      'Deeply human-centered roles that demand both creativity and emotional intelligence',
      'Flexible environments that honor your inner-directed creative process',
      'Small, trusted teams where you can engage deeply without exhausting group dynamics',
      'Work that creates something lasting and genuinely meaningful for others',
    ],
    communicationStyle:
      'Measured, layered, and deeply intentional. You communicate rarely but meaningfully, and your ideas are most fully formed in writing. You are genuinely moved by the impact of your work on others.',
    accentColor: '#be185d',
  },
];

export function getProfile(code: string): Profile | undefined {
  return profiles.find((p) => p.code === code);
}
