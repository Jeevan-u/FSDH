import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const results = [
  {
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=450&fit=crop',
    title: 'Acne Scar Treatment',
    desc: 'Significant reduction in acne scars after 4 sessions of microneedling and PRP.',
  },
  {
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=450&fit=crop',
    title: 'Laser Hair Reduction',
    desc: 'Permanent hair reduction after 6 sessions of diode laser treatment.',
  },
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop',
    title: 'HydraFacial Glow',
    desc: 'Instant skin brightening and deep hydration after a single HydraFacial session.',
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="section-padding gradient-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Real Results</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 font-display">
            Before & After
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See the transformative results our patients have achieved with our advanced treatments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="flex items-center gap-2 text-white">
                    <Sparkles className="h-4 w-4 text-accent-400" />
                    <span className="text-sm font-medium">View Results</span>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 font-display">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/gallery" className="btn-primary">
            View Complete Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
