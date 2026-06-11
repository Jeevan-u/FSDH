import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className={cn(
          "text-base font-semibold transition-colors pr-4",
          isOpen ? "text-primary-600" : "text-slate-800 group-hover:text-primary-600"
        )}>
          {question}
        </span>
        <ChevronDown className={cn(
          "h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0",
          isOpen && "rotate-180 text-primary-600"
        )} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
