import { motion, AnimatePresence } from 'framer-motion';

const SCALE_LABELS = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

interface QuestionCardProps {
  questionNumber: number;
  text: string;
  selectedValue: number | undefined;
  direction: 'forward' | 'backward';
  onSelect: (value: number) => void;
}

const variants = {
  enter: (dir: 'forward' | 'backward') => ({
    x: dir === 'forward' ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: 'forward' | 'backward') => ({
    x: dir === 'forward' ? -60 : 60,
    opacity: 0,
  }),
};

export function QuestionCard({ questionNumber, text, selectedValue, direction, onSelect }: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={questionNumber}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-full"
      >
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-4">
            Statement {questionNumber}
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-snug mb-10">
            {text}
          </h2>

          <div className="flex flex-col gap-3">
            {SCALE_LABELS.map(({ value, label }) => {
              const isSelected = selectedValue === value;
              return (
                <motion.button
                  key={value}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelect(value)}
                  className={`
                    relative flex items-center gap-4 px-5 py-4 rounded-xl border text-left
                    transition-all duration-200 cursor-pointer
                    ${isSelected
                      ? 'bg-primary border-primary text-primary-foreground shadow-md'
                      : 'bg-background border-border text-foreground hover:border-primary/50 hover:bg-accent/40'
                    }
                  `}
                >
                  <span className={`
                    w-6 h-6 flex-shrink-0 rounded-full border-2 flex items-center justify-center
                    transition-all duration-200
                    ${isSelected ? 'border-primary-foreground bg-primary-foreground/20' : 'border-muted-foreground/40'}
                  `}>
                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2.5 h-2.5 rounded-full bg-primary-foreground"
                      />
                    )}
                  </span>
                  <span className="font-medium text-sm md:text-base">{label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
