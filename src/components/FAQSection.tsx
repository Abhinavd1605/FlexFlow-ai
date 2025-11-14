'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CalendlyModal } from './CalendlyModal';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What is FlexFlow AI?',
    answer: 'FlexFlow AI is an advanced automation platform that uses artificial intelligence to handle customer calls, chats, and workflows, allowing businesses to operate 24/7 with intelligent automation.'
  },
  {
    question: 'How does the AI voice assistant work?',
    answer: 'Our AI voice assistant uses natural language processing to understand customer queries and respond naturally. It can handle multiple languages, learn from interactions, and integrate with your existing systems.'
  },
  {
    question: 'What languages does the AI support?',
    answer: 'Our AI currently supports multiple languages including English and Telugu, with more languages being added regularly to serve a global customer base.'
  },
  {
    question: 'How long does it take to set up?',
    answer: 'Most businesses can be up and running within 48 hours. Our team handles the entire setup process, including integration with your existing systems.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all new customers. No credit card required to get started.'
  },
  {
    question: 'How secure is my data?',
    answer: 'We take security seriously. All data is encrypted in transit and at rest, and we comply with industry-standard security protocols to protect your information.'
  }
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about FlexFlow AI. Can't find the answer you're looking for? 
            <a href="#contact" className="text-primary hover:underline ml-1">Contact us</a>.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg font-medium text-foreground">{item.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-muted-foreground"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-muted-foreground">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <button 
            onClick={() => setShowCalendly(true)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Call
          </button>
        </div>
      </div>
      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />
    </section>
  );
};
