import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    occupation: "Organizational Psychologist",
    initials: "SC",
    color: "from-blue-400 to-indigo-500",
    review: "PersonaScope manages to balance academic rigor with accessible design. It’s the first assessment I comfortably recommend to both corporate clients and individuals."
  },
  {
    name: "Marcus Thorne",
    occupation: "Engineering Manager",
    initials: "MT",
    color: "from-emerald-400 to-teal-500",
    review: "I've taken them all, and this is different. The insights on my leadership style weren't just flattering; they highlighted blind spots I didn't know I had. Truly transformative."
  },
  {
    name: "Elena Rodriguez",
    occupation: "Creative Director",
    initials: "ER",
    color: "from-purple-400 to-fuchsia-500",
    review: "As an 'Explorer', the report perfectly captured my erratic creative process and gave me concrete strategies for grounding my work without losing the spark."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-lg text-muted-foreground">Hear from professionals who have used our insights to grow.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border flex flex-col"
            >
              <div className="mb-6 flex gap-1">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-grow italic mb-8">"{t.review}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.occupation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
