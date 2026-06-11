import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl shadow-black/20 lg:hidden">
      <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto gap-2">
        <a
          href="tel:+919606042223"
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-50 text-primary-600 rounded-xl text-sm font-semibold flex-1"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href="https://wa.me/919606042223?text=Hi! I would like to book a consultation at Prashali Skin Sciences."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-xl text-sm font-semibold flex-1"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          to="/appointment"
          className="flex items-center justify-center gap-2 px-4 py-2.5 gradient-gold text-primary-600 rounded-xl text-sm font-semibold flex-1"
        >
          <Calendar className="h-4 w-4" />
          Book
        </Link>
      </div>
    </div>
  );
}
