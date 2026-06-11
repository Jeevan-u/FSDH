import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { doctor } from '../data/doctor';
import { CheckCircle, Award, GraduationCap, Star, Calendar, ArrowRight, BookOpen, Microscope } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      <Helmet>
        <title>About Dr. Varsha R. Koti | No. 1 Dermatologist in Nelamangala</title>
        <meta name="description" content="Meet Dr. Varsha R. Koti (MBBS, MD, DNB) — the No. 1 dermatologist in Nelamangala, Bangalore. Expert in clinical dermatology, dermatosurgery, lasers &amp; aesthetic treatments at Prashali Skin Sciences." />
        <meta property="og:title" content="About Dr. Varsha R. Koti | No. 1 Dermatologist in Nelamangala" />
        <meta property="og:description" content="Meet Dr. Varsha R. Koti (MBBS, MD, DNB) — the No. 1 dermatologist in Nelamangala, Bangalore. Expert in clinical dermatology, dermatosurgery, lasers &amp; aesthetic treatments." />
        <meta property="og:url" content="https://prashaliskinsciences.com/about" />
        <link rel="canonical" href="https://prashaliskinsciences.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prashaliskinsciences.com/"},
              {"@type": "ListItem", "position": 2, "name": "About", "item": "https://prashaliskinsciences.com/about"}
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
            About Dr. Varsha R. Koti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-3xl mx-auto text-lg"
          >
            MBBS, MD (DVL), DNB — Consultant Dermatologist & Cosmetologist at Prashali Skin Sciences
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm justify-center">
              <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
              <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
              <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
              <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
              <Star className="h-4 w-4 fill-accent-500 text-accent-500" />
              <span className="ml-1 font-semibold text-slate-700">4.9</span>
              <span className="text-slate-400">(127+ reviews)</span>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Meet Your Doctor</span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 font-display">
                {doctor.name}
              </h1>
              <p className="text-xl text-primary-500 font-semibold mb-2">{doctor.qualifications}</p>
              <p className="text-slate-500 mb-6">{doctor.title}</p>

              <p className="text-slate-600 leading-relaxed text-lg mb-8">{doctor.bio}</p>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-primary-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 font-display">Education</h2>
                  </div>
                  <ul className="space-y-3">
                    {doctor.education.map((edu, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle className="h-5 w-5 text-accent-500 shrink-0" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 font-display">Achievements</h2>
                  </div>
                  <ul className="space-y-3">
                    {doctor.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <Award className="h-5 w-5 text-accent-500 shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Microscope className="h-5 w-5 text-primary-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 font-display">Specializations</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {doctor.specializations.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <BookOpen className="h-4 w-4 text-primary-500 shrink-0" />
                        <span className="text-sm text-slate-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/appointment" className="btn-primary">
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </Link>
                <a
                  href="https://wa.me/919606042223?text=Hi! I want to know more about Dr. Varsha R. Koti at Prashali Skin Sciences."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Ask a Question
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
