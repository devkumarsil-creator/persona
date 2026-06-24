import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';


export function Hero() {
  const [, navigate] = useLocation();
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 dark:bg-primary/20" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 dark:bg-accent/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Scientifically-inspired framework
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">True Personality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              For curious, self-aware individuals seeking profound understanding. 
              Uncover your hidden strengths, relationship dynamics, and workplace potential through our precise, deeply analytical assessment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base shadow-xl shadow-primary/20 group" onClick={() => navigate('/start-assessment')}>
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center"
          >
            {/* CSS Art Illustration */}
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              
              <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-2xl">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Orbital rings */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
                <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/40" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/50" />
                
                {/* Central node */}
                <circle cx="100" cy="100" r="15" fill="url(#grad1)" />
                
                {/* Connecting lines */}
                <path d="M100 85 L100 35 M115 100 L165 100 M100 115 L100 165 M85 100 L35 100" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
                <path d="M110 89 L145 55 M110 111 L145 145 M89 111 L55 145 M89 89 L55 55" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" strokeDasharray="2 2" />
                
                {/* Satellites */}
                <circle cx="100" cy="35" r="6" fill="url(#grad2)" />
                <circle cx="165" cy="100" r="8" fill="url(#grad2)" />
                <circle cx="100" cy="165" r="5" fill="url(#grad2)" />
                <circle cx="35" cy="100" r="7" fill="url(#grad2)" />
                
                <circle cx="145" cy="55" r="4" fill="hsl(var(--accent))" opacity="0.8" />
                <circle cx="55" cy="145" r="4" fill="hsl(var(--accent))" opacity="0.6" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
