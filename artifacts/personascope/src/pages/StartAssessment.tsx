import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, User, Mail, Calendar, Users, Briefcase, Globe } from 'lucide-react';
import { createUserAndSession, type UserInfo } from '@/lib/db';

interface FormErrors {
  name?: string;
  email?: string;
}

const GENDER_OPTIONS = ['Prefer not to say', 'Male', 'Female', 'Non-binary', 'Other'];

export default function StartAssessment() {
  const [, navigate] = useLocation();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  const [form, setForm] = useState<{
    name: string;
    email: string;
    age: string;
    gender: string;
    occupation: string;
    country: string;
  }>({
    name: '',
    email: '',
    age: '',
    gender: '',
    occupation: '',
    country: '',
  });

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError(null);

    try {
      const info: UserInfo = {
        name: form.name.trim(),
        email: form.email.trim(),
        age: form.age ? parseInt(form.age, 10) : undefined,
        gender: form.gender || undefined,
        occupation: form.occupation.trim() || undefined,
        country: form.country.trim() || undefined,
      };
      await createUserAndSession(info);
      navigate('/assessment');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 flex items-center justify-between border-b border-border/50">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-black text-sm">P</span>
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            PersonaScope
          </span>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg"
        >
          {/* Hero text */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-5">
              60 questions · ~15 minutes
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-foreground mb-3 leading-tight">
              Before we discover your personality…
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Tell us a little about yourself. This helps personalise your personality report.
            </p>
          </div>

          {/* Form card */}
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Full Name <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your full name"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-background text-foreground text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all
                    ${errors.name ? 'border-destructive' : 'border-border'}`}
                />
              </div>
              {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Email Address <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-background text-foreground text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all
                    ${errors.email ? 'border-destructive' : 'border-border'}`}
                />
              </div>
              {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
            </div>

            {/* Age + Gender row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Age <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="number"
                    min={10}
                    max={120}
                    value={form.age}
                    onChange={set('age')}
                    placeholder="e.g. 28"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm
                      focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Gender <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <select
                    value={form.gender}
                    onChange={set('gender')}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm
                      focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all appearance-none"
                  >
                    <option value="">Select…</option>
                    {GENDER_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Occupation <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={form.occupation}
                  onChange={set('occupation')}
                  placeholder="e.g. Software Engineer"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Country <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={form.country}
                  onChange={set('country')}
                  placeholder="e.g. United States"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>
            </div>

            {serverError && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3 text-sm text-destructive">
                {serverError}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-primary text-primary-foreground
                font-semibold text-base shadow-lg hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Setting up your session…
                </>
              ) : (
                <>
                  Begin Assessment
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-muted-foreground pt-1">
              Your data is stored securely and never shared with third parties.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
