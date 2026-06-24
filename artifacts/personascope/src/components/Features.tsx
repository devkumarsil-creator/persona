import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Crown, TrendingUp, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: "Career Insights",
    description: "Discover the environments and roles where your natural tendencies transform into massive advantages."
  },
  {
    icon: Heart,
    title: "Relationship Analysis",
    description: "Understand your communication style and how to navigate friction with different personality archetypes."
  },
  {
    icon: Crown,
    title: "Leadership Style",
    description: "Learn how you inspire others, make decisions under pressure, and drive teams toward success."
  },
  {
    icon: TrendingUp,
    title: "Personal Growth",
    description: "Identify your blind spots and cognitive biases to create a targeted map for self-improvement."
  },
  {
    icon: Users,
    title: "Team Compatibility",
    description: "Map your dynamics against colleagues to build highly synergistic and effective project teams."
  },
  {
    icon: Target,
    title: "Workplace Strengths",
    description: "Pinpoint your unique value proposition in any professional setting and learn how to leverage it."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30 border-y border-border relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Go Beyond the Surface
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Your results aren't just a label. They are a comprehensive blueprint for every facet of your life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
