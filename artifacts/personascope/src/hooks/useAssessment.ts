import { useState, useCallback, useEffect } from 'react';
import { questions, TOTAL_QUESTIONS } from '@/data/questions';
import { computeResult, type AssessmentResult } from '@/lib/scoring';
import { getSavedSession, saveAnswer, saveResult } from '@/lib/db';

const STORAGE_KEY = 'personascope_assessment';

interface AssessmentState {
  sessionId: string | null;
  answers: Record<number, number>;
  currentIndex: number;
  startedAt: string;
  completedAt?: string;
  result?: AssessmentResult;
}

function loadState(): AssessmentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AssessmentState;
  } catch {
    return null;
  }
}

function persistState(state: AssessmentState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function freshState(sessionId: string | null): AssessmentState {
  return {
    sessionId,
    answers: {},
    currentIndex: 0,
    startedAt: new Date().toISOString(),
  };
}

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>(() => {
    const saved = loadState();
    // If there's a saved session from Supabase, reuse; otherwise start fresh
    const session = getSavedSession();
    if (saved && session && saved.sessionId === session.sessionId) return saved;
    // New session started — clear old assessment state
    return freshState(session?.sessionId ?? null);
  });

  useEffect(() => {
    persistState(state);
  }, [state]);

  const currentQuestion = questions[state.currentIndex];
  const currentAnswer = currentQuestion ? state.answers[currentQuestion.id] : undefined;
  const progress = Math.round((state.currentIndex / TOTAL_QUESTIONS) * 100);
  const isComplete = !!state.completedAt;

  const answerAndAdvance = useCallback((value: number) => {
    setState((prev) => {
      const questionId = questions[prev.currentIndex]?.id;
      if (questionId == null) return prev;

      const newAnswers = { ...prev.answers, [questionId]: value };
      const nextIndex = prev.currentIndex + 1;

      // Fire-and-forget Supabase save
      if (prev.sessionId) {
        void saveAnswer(prev.sessionId, questionId, value);
      }

      if (nextIndex >= TOTAL_QUESTIONS) {
        const result = computeResult(newAnswers, prev.sessionId ?? 'local');
        // Fire-and-forget result + session completion
        if (prev.sessionId) {
          void saveResult(prev.sessionId, result.profileCode, result.dimensionScores);
        }
        return {
          ...prev,
          answers: newAnswers,
          currentIndex: nextIndex,
          completedAt: new Date().toISOString(),
          result,
        };
      }

      return { ...prev, answers: newAnswers, currentIndex: nextIndex };
    });
  }, []);

  const goBack = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: Math.max(0, prev.currentIndex - 1),
    }));
  }, []);

  const restart = useCallback(() => {
    const session = getSavedSession();
    const next = freshState(session?.sessionId ?? null);
    setState(next);
    persistState(next);
  }, []);

  return {
    currentQuestion,
    currentAnswer,
    currentIndex: state.currentIndex,
    progress,
    isComplete,
    result: state.result,
    sessionId: state.sessionId,
    answers: state.answers,
    answerAndAdvance,
    goBack,
    restart,
  };
}
