import { useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowRight, RefreshCw, Zap, TrendingUp, Briefcase, MessageCircle } from 'lucide-react';
import { getProfile } from '@/data/profiles';
import { useAssessment } from '@/hooks/useAssessment';
import { dimensionPercentage } from '@/lib/scoring';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const DIMENSION_LABELS: Record<string, { a: string; b: string; label: string }> = {
  social_energy:    { a: 'Outward', b: 'Inward',       label: 'Social Energy' },
  information_style:{ a: 'Practical', b: 'Conceptual', label: 'Information Style' },
  decision_style:   { a: 'Analytical', b: 'Empathic',  label: 'Decision Style' },
  lifestyle_style:  { a: 'Structured', b: 'Adaptive',  label: 'Lifestyle Style' },
};

export default function Results() {
  const [, params] = useRoute('/results/:profile');
  const [, navigate] = useLocation();
  const { result, restart } = useAssessment();

  const profileCode = params?.profile?.toUpperCase() ?? result?.profileCode ?? '';
  const profile = getProfile(profileCode);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <p className="text-muted-foreground text-lg">Profile not found.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium"
        >
          Return Home
        </button>
      </div>
    );
  }

  const scores = result?.dimensionScores;

  const radarData = scores
    ? [
        (() => {
          const { aPercent } = dimensionPercentage(scores.social_energy.outward, scores.social_energy.inward);
          return { dimension: 'Social', score: aPercent, label: aPercent >= 50 ? 'Outward' : 'Inward' };
        })(),
        (() => {
          const { aPercent } = dimensionPercentage(scores.information_style.practical, scores.information_style.conceptual);
          return { dimension: 'Information', score: aPercent, label: aPercent >= 50 ? 'Practical' : 'Conceptual' };
        })(),
        (() => {
          const { aPercent } = dimensionPercentage(scores.decision_style.analytical, scores.decision_style.human_centered);
          return { dimension: 'Decision', score: aPercent, label: aPercent >= 50 ? 'Analytical' : 'Empathic' };
        })(),
        (() => {
          const { aPercent } = dimensionPercentage(scores.lifestyle_style.structured, scores.lifestyle_style.adaptive);
          return { dimension: 'Lifestyle', score: aPercent, label: aPercent >= 50 ? 'Structured' : 'Adaptive' };
        })(),
      ]
    : [];

  const handleRestart = () => {
    restart();
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div
        className="relative overflow-hidden py-20 px-4"
        style={{ background: `linear-gradient(135deg, ${profile.accentColor}15 0%, transparent 60%)` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-block mb-6"
          >
            <div
              className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-3xl font-black text-white shadow-2xl mb-4"
              style={{ backgroundColor: profile.accentColor }}
            >
              {profileCode}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3"
               style={{ color: profile.accentColor }}>
              Your PersonaScope Profile
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">{profile.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {profile.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

        {/* Summary */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8">
          <h2 className="text-xl font-bold text-foreground mb-4">About You</h2>
          <p className="text-muted-foreground leading-relaxed text-base">{profile.summary}</p>
        </motion.div>

        {/* Radar Chart */}
        {radarData.length > 0 && (
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-2">Dimension Breakdown</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Each score shows your tilt toward the dominant pole in each dimension (50 = perfectly balanced).
            </p>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="dimension"
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 13, fontWeight: 600 }}
                />
                <Tooltip
                  formatter={(v: number, _: string, entry: { payload?: { label?: string } }) =>
                    [`${v}% ${entry?.payload?.label ?? ''}`, 'Score']
                  }
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '12px',
                    fontSize: '13px',
                  }}
                />
                <Radar
                  dataKey="score"
                  stroke={profile.accentColor}
                  fill={profile.accentColor}
                  fillOpacity={0.2}
                  strokeWidth={2}
                  dot={{ r: 4, fill: profile.accentColor }}
                />
              </RadarChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {scores && Object.entries(DIMENSION_LABELS).map(([key, meta]) => {
                const dimScores = scores[key as keyof typeof scores] as { [k: string]: number };
                const keys = Object.keys(dimScores).filter(k => k !== 'total');
                const [aKey, bKey] = keys;
                const { aPercent, bPercent } = dimensionPercentage(dimScores[aKey], dimScores[bKey]);
                const dominant = aPercent >= bPercent ? meta.a : meta.b;
                const percent = aPercent >= bPercent ? aPercent : bPercent;
                return (
                  <div key={key} className="rounded-xl bg-muted/40 border border-border p-3 text-center">
                    <p className="text-xs font-semibold text-muted-foreground mb-1">{meta.label}</p>
                    <p className="text-lg font-black text-foreground">{percent}%</p>
                    <p className="text-xs font-medium mt-0.5" style={{ color: profile.accentColor }}>{dominant}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Strengths & Growth */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: `${profile.accentColor}20` }}>
                <Zap className="w-4 h-4" style={{ color: profile.accentColor }} />
              </div>
              <h2 className="text-lg font-bold text-foreground">Your Strengths</h2>
            </div>
            <ul className="space-y-3">
              {profile.strengths.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: profile.accentColor }} />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-500/10">
                <TrendingUp className="w-4 h-4 text-amber-500" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Growth Areas</h2>
            </div>
            <ul className="space-y-3">
              {profile.growthAreas.map((g, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  {g}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Work Preferences & Communication */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: `${profile.accentColor}20` }}>
                <Briefcase className="w-4 h-4" style={{ color: profile.accentColor }} />
              </div>
              <h2 className="text-lg font-bold text-foreground">Work Preferences</h2>
            </div>
            <ul className="space-y-3">
              {profile.workPreferences.map((w, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: profile.accentColor }} />
                  {w}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: `${profile.accentColor}20` }}>
                <MessageCircle className="w-4 h-4" style={{ color: profile.accentColor }} />
              </div>
              <h2 className="text-lg font-bold text-foreground">Communication Style</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{profile.communicationStyle}</p>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 pb-12">
          <button
            onClick={() => navigate('/')}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-border text-foreground font-semibold hover:bg-accent transition-all"
          >
            Return Home
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleRestart}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-semibold shadow-lg hover:opacity-90 transition-all"
            style={{ backgroundColor: profile.accentColor }}
          >
            <RefreshCw className="w-4 h-4" />
            Retake Assessment
          </button>
        </motion.div>

      </div>
    </div>
  );
}
