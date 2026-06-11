import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { treatmentCategories } from '../data/treatments';
import TreatmentCard from '../components/TreatmentCard';
import { useEffect } from 'react';

export default function Treatments() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <div className="pb-24">
      <Helmet>
        <title>Dermatology, Hair & Laser Treatments | No. 1 Dermatologist Nelamangala</title>
        <meta name="description" content="Explore 30+ dermatology, hair restoration, laser &amp; aesthetic treatments at Prashali Skin Sciences in Nelamangala, Bangalore — the No. 1 dermatologist in Nelamangala. Acne, PRP, HydraFacial, laser hair reduction &amp; more." />
        <meta property="og:title" content="Dermatology, Hair & Laser Treatments | Prashali Skin Sciences Nelamangala" />
        <meta property="og:description" content="Explore 30+ dermatology, hair restoration, laser &amp; aesthetic treatments at Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore." />
        <meta property="og:url" content="https://prashaliskinsciences.com/treatments" />
        <link rel="canonical" href="https://prashaliskinsciences.com/treatments" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prashaliskinsciences.com/"},
              {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://prashaliskinsciences.com/treatments"}
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
            Our Treatments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Comprehensive dermatology, hair restoration, aesthetic and laser treatments tailored for you.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        {treatmentCategories.map((cat, catIndex) => (
          <section key={cat.id} id={cat.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-end justify-between gap-6 mb-4">
                <div>
                  <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Category</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-display">{cat.title}</h2>
                  <p className="text-slate-600 mt-2 max-w-2xl">{cat.description}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.treatments.map((treatment, i) => (
                <TreatmentCard key={treatment.id} treatment={treatment} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="gradient-primary rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Book a consultation with our expert dermatologist for a personalized assessment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919606042223"
                className="px-8 py-3.5 bg-white text-primary-500 rounded-full font-semibold hover:bg-accent-50 transition-all"
              >
                Call +91 9606042223
              </a>
              <a
                href="https://wa.me/919606042223?text=Hi! I have a question about treatments at Prashali Skin Sciences."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
