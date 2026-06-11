import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AppointmentForm from '../components/AppointmentForm';
import { Calendar, Clock, ShieldCheck, Phone, MessageCircle, Star, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Appointment() {
  return (
    <div className="pb-24">
      <Helmet>
        <title>Book Appointment | No. 1 Dermatologist in Nelamangala Bangalore</title>
        <meta name="description" content="Book a consultation with Dr. Varsha R. Koti (MD, DNB) — the No. 1 dermatologist in Nelamangala, Bangalore. Easy online booking for dermatology, hair, and aesthetic treatments at Prashali Skin Sciences." />
        <meta property="og:title" content="Book Appointment | Prashali Skin Sciences Nelamangala" />
        <meta property="og:description" content="Book a consultation with Dr. Varsha R. Koti — the No. 1 dermatologist in Nelamangala, Bangalore. Easy online booking for skin, hair &amp; aesthetic treatments." />
        <meta property="og:url" content="https://prashaliskinsciences.com/appointment" />
        <link rel="canonical" href="https://prashaliskinsciences.com/appointment" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prashaliskinsciences.com/"},
              {"@type": "ListItem", "position": 2, "name": "Appointment", "item": "https://prashaliskinsciences.com/appointment"}
            ]
          })}
        </script>
      </Helmet>
      <div className="gradient-primary pt-24 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-display"
          >
            Book Your Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Take the first step towards healthier skin and hair. Schedule your visit today.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="flex items-start gap-3 p-4 mb-6 bg-amber-50 border border-amber-200 rounded-2xl text-sm text-amber-800">
          <Timer className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <p>Appointment times may fluctuate. You may have to wait up to 30 minutes if required, depending on patient flow and consultation duration.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>

          <div className="space-y-6">
            <div className="card-premium p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-5 font-display">Why Book With Us?</h3>
              <div className="space-y-5">
                {[
                  { icon: Calendar, title: 'Easy Scheduling', desc: 'Choose your preferred date and time for consultation.' },
                  { icon: Clock, title: 'Minimal Wait Time', desc: 'We value your time and keep appointments on schedule.' },
                  { icon: ShieldCheck, title: 'Expert Care', desc: 'Consult with a qualified MD, DNB dermatologist.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gradient-primary rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3 font-display">Need Immediate Help?</h3>
              <p className="text-white/80 text-sm mb-5">Call us for urgent dermatology concerns.</p>
              <a
                href="tel:+919606042223"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-primary-500 rounded-xl font-semibold hover:bg-accent-50 transition-all"
              >
                <Phone className="h-5 w-5" />
                +91 9606042223
              </a>
              <a
                href="https://wa.me/919606042223?text=Hi! I need immediate consultation at Prashali Skin Sciences."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 mt-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <div className="card-premium p-6 text-center">
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-900">4.9 Stars • 127+ Reviews</p>
              <p className="text-xs text-slate-500 mt-1">Trusted by patients across Nelamangala</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
