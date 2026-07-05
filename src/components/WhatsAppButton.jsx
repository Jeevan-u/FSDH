import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X } from 'lucide-react';

const BOOKING_URL = 'https://hplix.in/HPL191347';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 max-w-[260px]">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition"
              >
                <X className="h-3 w-3 text-slate-600" />
              </button>
              <p className="text-sm text-slate-700 font-medium">
                Book your appointment online!
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Quick & easy booking — choose your slot and treatment.
              </p>
            </div>
            <div className="absolute -bottom-1 right-5 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all"
      >
        <Calendar className="h-7 w-7 text-white" />
      </motion.a>
    </div>
  );
}
