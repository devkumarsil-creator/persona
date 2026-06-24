import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the assessment take?",
    answer: "The assessment consists of 60 targeted questions and typically takes 10 to 15 minutes to complete. We recommend finding a quiet space where you won't be interrupted to ensure the most accurate results."
  },
  {
    question: "Is the report free?",
    answer: "Yes, you receive your core personality type and a comprehensive summary report entirely for free. We also offer a premium, deep-dive dossier with extended career and relationship analytics for those who want to go further."
  },
  {
    question: "How accurate are the results?",
    answer: "Our assessment is built upon decades of psychological research into cognitive functions and traits. While no test is perfectly flawless, 95% of our users report that their profile describes them accurately or highly accurately."
  },
  {
    question: "Can I retake the assessment?",
    answer: "Absolutely. While core personality traits tend to remain stable over time, life events and personal growth can shift how you express them. If you feel you've changed significantly, retaking it after 6-12 months can yield new insights."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about the PersonaScope framework.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
