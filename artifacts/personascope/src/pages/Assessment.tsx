import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useAssessment } from '@/hooks/useAssessment';
import { ProgressBar } from '@/components/assessment/ProgressBar';
import { QuestionCard } from '@/components/assessment/QuestionCard';
import { TOTAL_QUESTIONS } from '@/data/questions';

export default function Assessment() {
  const [, navigate] = useLocation();
  const {
    currentQuestion,
    currentAnswer,
    currentIndex,
    progress,
    isComplete,
    result,
    sessionId,
    answerAndAdvance,
    goBack,
    restart,
  } = useAssessment();

  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const topRef = useRef<HTMLDivElement>(null);

  // Redirect to onboarding if no session
  useEffect(() => {
    if (!sessionId) {
      navigate('/start-assessment');
    }
  }, [sessionId, navigate]);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex]);

  useEffect(() => {
    if (isComplete && result) {
      navigate(`/results/${result.profileCode}`);
    }
  }, [isComplete, result, navigate]);

  // Synchronous guards — run after all hooks so no rules are violated
  // 1. No session: send back to onboarding
  if (!sessionId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground text-sm">Redirecting to onboarding…</p>
        </div>
      </div>
    );
  }

  // 2. Assessment complete but result not yet available (navigating)
  if (isComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground text-sm">Calculating your results…</p>
        </div>
      </div>
    );
  }

  // 3. Question somehow undefined (shouldn't happen, but safeguard)
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm">Something went wrong loading the question.</p>
          <button
            onClick={restart}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
          >
            Restart Assessment
          </button>
        </div>
      </div>
    );
  }

  const handleSelect = (value: number) => {
    setDirection('forward');
    answerAndAdvance(value);
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      navigate('/');
      return;
    }
    setDirection('backward');
    goBack();
  };

  const questionNumber = currentIndex + 1;

  return (
    <div className="min-h-screen bg-background" ref={topRef}>
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              PersonaScope
            </span>
          </button>
          <button
            onClick={restart}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            Restart
          </button>
        </div>

        <div className="mb-8">
          <ProgressBar current={questionNumber} total={TOTAL_QUESTIONS} percent={progress} />
        </div>

        <QuestionCard
          questionNumber={questionNumber}
          text={currentQuestion.text}
          selectedValue={currentAnswer}
          direction={direction}
          onSelect={handleSelect}
        />

        <div className="flex items-center justify-between mt-6">
          <motion.button
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            {currentIndex === 0 ? 'Exit' : 'Previous'}
          </motion.button>

          <AnimatePresence>
            {currentAnswer != null && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect(currentAnswer)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                {currentIndex + 1 >= TOTAL_QUESTIONS ? 'See Results' : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Select an answer to continue — your progress is saved automatically.
        </p>
      </div>
    </div>
  );
}
