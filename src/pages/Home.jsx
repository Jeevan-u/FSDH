import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Award, Sparkles, Star, CheckCircle, ArrowRight, Calendar, MessageCircle, HeartPulse, Syringe, BadgeCheck, MapPin, Quote, Clock, Phone } from 'lucide-react';
import { doctor } from '../data/doctor';
import TreatmentIconGrid from '../components/TreatmentIconGrid';
import TestimonialCarousel from '../components/TestimonialCarousel';
import BookingSteps from '../components/BookingSteps';

const stats = [
  { value: '5000+', label: 'Happy Patients' },
  { value: '95%+', label: 'Client Retention' },
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Advanced Procedures' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Prashali Skin Sciences | No. 1 Dermatologist in Nelamangala, Bangalore</title>
        <meta name="description" content="Prashali Skin Sciences — No. 1 dermatologist in Nelamangala, Bangalore. Advanced dermatology, hair restoration, laser treatments, PRP therapy &amp; aesthetic procedures by Dr. Varsha R. Koti (MD, DNB)." />
        <meta property="og:title" content="Prashali Skin Sciences | No. 1 Dermatologist in Nelamangala, Bangalore" />
        <meta property="og:description" content="Prashali Skin Sciences — No. 1 dermatologist in Nelamangala, Bangalore. Expert skin, hair &amp; aesthetic care by Dr. Varsha R. Koti (MD, DNB)." />
        <meta property="og:url" content="https://prashaliskinsciences.com/" />
        <link rel="canonical" href="https://prashaliskinsciences.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalClinic",
                "@id": "https://prashaliskinsciences.com/#clinic",
                "name": "Prashali Skin Sciences",
                "description": "No. 1 dermatology, cosmetology, trichology, laser and aesthetic clinic in Nelamangala, Bangalore.",
                "url": "https://prashaliskinsciences.com",
                "telephone": "+919606042223",
                "email": "prashaliskinsciences@gmail.com",
                "image": "https://prashaliskinsciences.com/images/reception.jpg",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1st Floor, M M Arcade, 6th Cross, Subash Nagar",
                  "addressLocality": "Nelamangala",
                  "addressRegion": "Bengaluru",
                  "postalCode": "562123",
                  "addressCountry": "IN"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 13.096895, "longitude": 77.4021306 },
                "openingHoursSpecification": [
                  {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "10:00", "closes": "20:00"}
                ],
                "medicalSpecialty": "Dermatology",
                "areaServed": [
                  {"@type": "City", "name": "Nelamangala"},
                  {"@type": "City", "name": "Bangalore"},
                  {"@type": "City", "name": "Tumkur"},
                  {"@type": "City", "name": "Dodballapur"}
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127",
                  "bestRating": "5"
                },
                "physician": {
                  "@type": "Physician",
                  "@id": "https://prashaliskinsciences.com/#doctor",
                  "name": "Dr. Varsha R. Koti",
                  "medicalSpecialty": "Dermatology",
                  "hasCredential": [
                    {"@type": "MedicalCredential", "credentialCategory": "MBBS"},
                    {"@type": "MedicalCredential", "credentialCategory": "MD (DVL)"},
                    {"@type": "MedicalCredential", "credentialCategory": "DNB"},
                    {"@type": "MedicalCredential", "credentialCategory": "FRGUHS - Dermatosurgery"}
                  ]
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/reception.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 via-primary-500/90 to-primary-500/85" />
        </div>
        

        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/20 backdrop-blur-md rounded-full border border-accent-500/30 text-accent-200 text-xs font-semibold mb-6"
              >
                <Award className="h-3.5 w-3.5" />
                No. 1 Dermatologist in Nelamangala
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-5 font-display"
              >
                Expert Dermatology
                <br />
                Care in <span className="text-gradient">Nelamangala</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-xl"
              >
                Science-backed skin, hair, and aesthetic treatments by <strong className="text-white/90">Dr. Varsha R. Koti</strong> — bringing advanced dermatology with personalized care to Nelamangala.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mb-14"
              >
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-500 text-primary-500 rounded-full font-semibold hover:bg-accent-400 transition-all shadow-lg shadow-accent-500/25"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/919606042223?text=Hi! I would like to book a consultation at Prashali Skin Sciences."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/25 text-white/90 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Consultation
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-x-8 gap-y-3"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-accent-500/60 rounded-full" />
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-white font-display leading-none">{stat.value}</div>
                      <div className="text-[10px] text-white/60 tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST + ABOUT (merged) ===== */}
      <section className="relative -mt-16 z-30 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl shadow-xl shadow-black/5 p-6 md:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-2 text-accent-500 font-semibold text-xs uppercase tracking-widest mb-3">
                  <BadgeCheck className="h-4 w-4" />
                  Why Prashali Skin Sciences
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display leading-tight">
                  Advanced Technology.
                  <br />
                  <span className="text-primary-400">Trusted Protocols.</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  At Prashali Skin Sciences, we assess your skin and hair concerns, recommend the best treatment options, and create a personalized care plan for optimal results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Shield, title: 'Evidence-Based', desc: 'Treatments backed by clinical research.' },
                    { icon: Award, title: 'FDA Approved Tech', desc: 'Cutting-edge international standards.' },
                    { icon: BadgeCheck, title: 'Expert Dermatologist', desc: 'Led by Dr. Varsha R. Koti, MD, DNB.' },
                    { icon: Sparkles, title: 'Personalized Care', desc: 'Custom plans for your unique needs.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80">
                      <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-[380px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent-500 text-primary-500 rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-xl font-bold font-display leading-none">{doctor.experience}</p>
                  <p className="text-xs font-medium mt-0.5">of Expertise</p>
                </div>
                <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-accent-500 text-accent-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9</span>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Clock className="h-4 w-4" />
                Mon – Sat: 10:00 AM – 8:00 PM
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="text-slate-400">Sunday: Holiday</span>
              </div>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-primary-400 transition-colors">
                Know More About Dr. Varsha R. Koti <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <TreatmentIconGrid />

      {/* ===== QUOTE / TRUST ===== */}
      <section className="relative overflow-hidden">
        <div className="gradient-primary">
          <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 text-center relative">
            <Quote className="h-10 w-10 text-accent-500/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-white/90 font-display font-medium leading-relaxed max-w-3xl mx-auto mb-8">
              Our commitment is to provide evidence-based, personalized dermatological care — combining medical expertise with cutting-edge technology to deliver natural-looking results for every patient.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <img src={doctor.image} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-accent-500/50" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">{doctor.name}</p>
                <p className="text-xs text-white/60">{doctor.title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
        <div className="bg-cream py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {[
                { label: 'No. 1 Dermatologist', sub: 'in Nelamangala' },
                { label: '5000+ Patients', sub: 'Trusted Care' },
                { label: '4.9 Stars', sub: '127+ Google Reviews' },
                { label: 'Award Winning', sub: 'Dermatology Care' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-primary-500 font-bold text-base font-display">{item.label}</p>
                  <p className="text-sage-500 text-xs">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <BookingSteps />

      {/* ===== FINAL CTA ===== */}
      <section className="gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Take the first step toward healthier skin and hair. Schedule your consultation with the No. 1 dermatologist in Nelamangala.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/appointment" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-primary-500 rounded-full font-semibold hover:bg-accent-400 transition-all shadow-lg shadow-black/20">
                <Calendar className="h-4 w-4" />
                Book Your Consultation
              </Link>
              <a href="tel:+919606042223" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                <Phone className="h-4 w-4" />
                Call +91 9606042223
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
