import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, HeartHandshake, ShieldCheck, Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const types = [
  {
    icon: Lightbulb,
    category: "Analysts",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    description: "Architects of logic. You rely on profound intuition and relentless rational analysis to solve complex problems."
  },
  {
    icon: HeartHandshake,
    category: "Diplomats",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    description: "Masters of empathy. You navigate the world through deep emotional intelligence and an urge to connect."
  },
  {
    icon: ShieldCheck,
    category: "Sentinels",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    description: "Pillars of stability. You value order, tradition, and bring reliable structure to chaotic environments."
  },
  {
    icon: Compass,
    category: "Explorers",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    description: "Seekers of experience. You thrive on adaptability, quick thinking, and the thrill of the unknown."
  }
];

export function TypesPreview() {
  return (
    <section id="types" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              The 16 Personality Types
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Our framework categorizes personalities into four core domains. 
              Which one shapes your worldview?
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="hidden md:flex">
              View All 16 Types
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border bg-card hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${type.border}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${type.bg} ${type.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{type.category}</h3>
                <p className="text-muted-foreground flex-grow mb-6">{type.description}</p>
                <Button variant="ghost" className="w-full justify-between group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All 16 Types
          </Button>
        </div>
      </div>
    </section>
  );
}
