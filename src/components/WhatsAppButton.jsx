import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '919606042223';
const WHATSAPP_MESSAGE = 'Hi! I would like to book a consultation at Prashali Skin Sciences.';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
                👋 Chat with us on WhatsApp!
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Book appointments, ask questions, get treatment info.
              </p>
            </div>
            <div className="absolute -bottom-1 right-5 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </motion.a>
    </div>
  );
}
