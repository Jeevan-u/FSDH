import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Scissors, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { treatmentCategories } from '../data/treatments';

const categoryIcons = {
  'clinical-dermatology': Stethoscope,
  'hair-treatments': Scissors,
  'aesthetic-treatments': Sparkles,
  'laser-treatments': Zap,
};

const categoryGradients = {
  'clinical-dermatology': 'from-primary-500 to-primary-400',
  'hair-treatments': 'from-primary-400 to-sage-500',
  'aesthetic-treatments': 'from-accent-500 to-amber-600',
  'laser-treatments': 'from-primary-500 to-accent-600',
};

export default function TreatmentIconGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs text-accent-500 font-semibold uppercase tracking-widest mb-2">Our Expertise</p>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-display">
            Comprehensive Treatments
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            From clinical dermatology to advanced aesthetic procedures, we offer complete care under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {treatmentCategories.map((cat, i) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            const grad = categoryGradients[cat.id] || 'from-primary-500 to-primary-700';
            return (
              <Link key={cat.id} to={`/treatments#${cat.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative card-premium p-6 md:p-8 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br ${grad} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-300 font-display mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary-600 group-hover:text-white transition-colors duration-300">
                      {cat.treatments.length} Treatments <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
