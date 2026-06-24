import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardPen, Cpu, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: ClipboardPen,
    title: "1. Answer Questions",
    description: "Take our carefully calibrated assessment. No generic multiple choice—expect thought-provoking scenarios."
  },
  {
    icon: Cpu,
    title: "2. Get Personality Type",
    description: "Our algorithm analyzes your cognitive preferences to place you accurately within our 16 distinct archetypes."
  },
  {
    icon: BookOpen,
    title: "3. Receive Detailed Report",
    description: "Unlock a comprehensive, highly personalized dossier on your strengths, relationships, and optimal career paths."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30 relative border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Three simple steps to unlock a lifetime of self-awareness.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-12" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="bg-background border border-border p-6 rounded-full z-10 shadow-sm mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground px-4 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
