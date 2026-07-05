import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, ExternalLink } from 'lucide-react';

const BOOKING_URL = 'https://hplix.in/HPL191347';

export default function AppointmentForm() {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100">
      <div className="p-8 md:p-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Book Your Consultation</h3>
        <p className="text-slate-500 text-sm mb-8">Click below to book your appointment through our online booking portal.</p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-primary-50 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2 font-display">Online Booking Available</h4>
            <p className="text-sm text-slate-500 mb-6">
              Choose your preferred date, time, and treatment through our secure booking portal.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-all text-base shadow-lg shadow-primary-500/25"
            >
              <ExternalLink className="h-4 w-4" />
              Book Now
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-400 mb-1">Or call us to book</p>
            <a
              href="tel:+919606042223"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
            >
              <Phone className="h-5 w-5" />
              +91 9606042223
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
