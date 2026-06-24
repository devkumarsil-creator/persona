import { questions } from '@/data/questions';

export interface DimensionScores {
  social_energy: { outward: number; inward: number; total: number };
  information_style: { practical: number; conceptual: number; total: number };
  decision_style: { analytical: number; human_centered: number; total: number };
  lifestyle_style: { structured: number; adaptive: number; total: number };
}

export interface AssessmentResult {
  profileCode: string;
  dimensionScores: DimensionScores;
  sessionId: string;
}

export function calculateScores(answers: Record<number, number>): DimensionScores {
  const scores: DimensionScores = {
    social_energy:    { outward: 0,     inward: 0,        total: 0 },
    information_style:{ practical: 0,   conceptual: 0,    total: 0 },
    decision_style:   { analytical: 0,  human_centered: 0, total: 0 },
    lifestyle_style:  { structured: 0,  adaptive: 0,      total: 0 },
  };

  for (const question of questions) {
    const value = answers[question.id];
    if (value == null) continue;

    const dim = question.dimension;
    const pol = question.polarity as keyof (typeof scores)[typeof dim];
    (scores[dim] as Record<string, number>)[pol] += value;
    scores[dim].total += value;
  }

  return scores;
}

export function deriveProfileCode(scores: DimensionScores): string {
  const s = scores.social_energy.outward >= scores.social_energy.inward ? 'O' : 'I';
  const i = scores.information_style.practical >= scores.information_style.conceptual ? 'P' : 'C';
  const d = scores.decision_style.analytical >= scores.decision_style.human_centered ? 'A' : 'H';
  const l = scores.lifestyle_style.structured >= scores.lifestyle_style.adaptive ? 'S' : 'D';
  return `${s}${i}${d}${l}`;
}

export function computeResult(answers: Record<number, number>, sessionId: string): AssessmentResult {
  const dimensionScores = calculateScores(answers);
  const profileCode = deriveProfileCode(dimensionScores);
  return { profileCode, dimensionScores, sessionId };
}

export function dimensionPercentage(a: number, b: number): { aPercent: number; bPercent: number } {
  const total = a + b;
  if (total === 0) return { aPercent: 50, bPercent: 50 };
  return {
    aPercent: Math.round((a / total) * 100),
    bPercent: Math.round((b / total) * 100),
  };
}
