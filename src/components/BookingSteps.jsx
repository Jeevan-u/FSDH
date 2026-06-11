import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, CalendarCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { doctor } from '../data/doctor';

const steps = [
  {
    icon: Phone,
    title: 'Call or Book Online',
    desc: 'Reach us at +91 9606042223 or book instantly through our website.',
  },
  {
    icon: CalendarCheck,
    title: 'Consult with Expert',
    desc: `Meet ${doctor.name} for a thorough skin/hair analysis and personalized plan.`,
  },
  {
    icon: MessageCircle,
    title: 'Start Your Treatment',
    desc: 'Begin your customized treatment journey with premium care and follow-ups.',
  },
];

export default function BookingSteps() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-accent-500 font-semibold uppercase tracking-widest mb-2">How to Get Started</p>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-display">
            Book in 3 Easy Steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative flex md:flex-col items-center md:text-center gap-4 md:gap-5 p-5 md:p-8 rounded-2xl bg-cream hover:bg-warm-white transition-colors"
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-500 rounded-xl flex items-center justify-center shadow-md">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center text-[11px] font-bold text-primary-500 shadow-sm">
                  {i + 1}
                </div>
              </div>
              <div className="md:mt-3 text-left md:text-center">
                <h3 className="font-bold text-slate-900 text-base md:text-lg font-display">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/appointment" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-primary-500 rounded-full font-semibold hover:bg-accent-400 transition-all shadow-lg shadow-accent-500/25">
            Book Your Appointment Now <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
