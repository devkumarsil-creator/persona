import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
  percent: number;
}

export function ProgressBar({ current, total, percent }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Question <span className="text-foreground font-semibold">{current}</span> of {total}
        </span>
        <span className="text-sm font-semibold text-primary">{percent}% complete</span>
      </div>
      <div className="relative h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  );
}
