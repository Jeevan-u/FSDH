import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function TreatmentCard({ treatment, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <Link to={`/treatments/${treatment.slug}`}>
        <div className="card-premium overflow-hidden h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-500/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-bold text-white font-display">{treatment.title}</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-slate-600 mb-4 line-clamp-2">{treatment.shortDesc}</p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {treatment.duration}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {treatment.sessions}
              </span>
            </div>
            <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
              Learn More <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
