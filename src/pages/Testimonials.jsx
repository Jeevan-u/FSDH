import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { testimonials, googleRating, totalReviews } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  return (
    <div className="pb-24">
      <Helmet>
        <title>Patient Testimonials | No. 1 Dermatologist in Nelamangala</title>
        <meta name="description" content="Read real patient reviews and testimonials for Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore. 4.9 stars from 127+ verified Google reviews." />
        <meta property="og:title" content="Patient Testimonials | No. 1 Dermatologist in Nelamangala" />
        <meta property="og:description" content="Read real patient reviews for Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore. 4.9 stars from 127+ verified Google reviews." />
        <meta property="og:url" content="https://prashaliskinsciences.com/testimonials" />
        <link rel="canonical" href="https://prashaliskinsciences.com/testimonials" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prashaliskinsciences.com/"},
              {"@type": "ListItem", "position": 2, "name": "Testimonials", "item": "https://prashaliskinsciences.com/testimonials"}
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
            Patient Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Real stories from our patients who experienced exceptional care.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card-premium p-8 md:p-12 text-center max-w-2xl mx-auto mb-16"
        >
          <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Quote className="h-8 w-8 text-accent-500" />
          </div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent-500 text-accent-500" />
            ))}
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-2 font-display">{googleRating}</p>
          <p className="text-slate-500">{totalReviews} verified Google reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Ready to share your own experience?</p>
          <a
            href="https://g.page/r/YOUR_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Write a Review
          </a>
        </div>
      </div>
    </div>
  );
}
