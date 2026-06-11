import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card-premium p-6 h-full flex flex-col"
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? 'text-accent-500 fill-accent-500' : 'text-slate-200'}`}
          />
        ))}
      </div>

      <Quote className="h-8 w-8 text-primary-100 mb-3" />

      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-xs text-slate-500">{testimonial.treatment} • {testimonial.date}</p>
        </div>
      </div>
    </motion.div>
  );
}
