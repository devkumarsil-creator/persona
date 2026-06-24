import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutGrid, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Assessments Completed",
    description: "Join thousands who have discovered their true selves."
  },
  {
    icon: LayoutGrid,
    value: "16",
    label: "Personality Types",
    description: "Deep, nuanced profiles based on cognitive functions."
  },
  {
    icon: Star,
    value: "95%",
    label: "User Satisfaction",
    description: "Rated highly for accuracy and actionable insights."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Trust() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-lg font-medium text-foreground mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
