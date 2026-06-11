import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getTreatmentBySlug, getCategoryByTreatmentId, allTreatments } from '../data/treatments';
import { ArrowLeft, Clock, Calendar, CheckCircle, Phone, MessageCircle, Sparkles, Shield, Star } from 'lucide-react';
import TreatmentCard from '../components/TreatmentCard';

export default function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = getTreatmentBySlug(slug);
  const category = treatment ? getCategoryByTreatmentId(treatment.id) : null;
  const relatedTreatments = category
    ? category.treatments.filter(t => t.id !== treatment.id).slice(0, 3)
    : [];

  if (!treatment) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-24">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display">Treatment not found</h2>
        <Link to="/treatments" className="inline-flex items-center gap-2 text-primary-600 font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back to Treatments
        </Link>
      </div>
    );
  }

  const benefits = treatment.benefits || [];

  const title = treatment ? `${treatment.title} | No. 1 Dermatologist in Nelamangala` : 'Treatment | Prashali Skin Sciences';
  const desc = treatment ? `${treatment.shortDesc} - ${treatment.description?.slice(0, 150)}. No. 1 dermatologist in Nelamangala, Bangalore.` : 'Treatment information at Prashali Skin Sciences — No. 1 dermatologist in Nelamangala, Bangalore.';

  return (
    <div className="pt-24 pb-24">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={`${treatment?.title || 'Treatment'} | No. 1 Dermatologist in Nelamangala`} />
        <meta property="og:description" content={`${treatment?.shortDesc || 'Treatment'} — No. 1 dermatologist in Nelamangala, Bangalore. Book your consultation at Prashali Skin Sciences.`} />
        <meta property="og:url" content={`https://prashaliskinsciences.com/${slug}`} />
        <link rel="canonical" href={`https://prashaliskinsciences.com/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prashaliskinsciences.com/"},
              {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://prashaliskinsciences.com/treatments"},
              {"@type": "ListItem", "position": 3, "name": treatment?.title || slug, "item": `https://prashaliskinsciences.com/${slug}`}
            ]
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/treatments"
          className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Treatments
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">{category?.title}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 font-display">{treatment.title}</h1>
              <p className="text-lg text-slate-600 mb-8">{treatment.shortDesc}</p>

              <div className="rounded-2xl overflow-hidden mb-10 shadow-xl">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-3 px-5 py-3 bg-primary-50 rounded-xl">
                  <Clock className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-xs text-slate-500">Duration</p>
                    <p className="text-sm font-semibold text-slate-900">{treatment.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-primary-50 rounded-xl">
                  <Calendar className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-xs text-slate-500">Sessions</p>
                    <p className="text-sm font-semibold text-slate-900">{treatment.sessions}</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display">About This Treatment</h2>
                <p className="text-slate-600 leading-relaxed">{treatment.description}</p>
              </div>

              {benefits.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">Key Benefits</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl"
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-primary-50 rounded-2xl p-8 mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4 font-display">Why Choose Prashali Skin Sciences?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Shield, text: 'Expert Dermatologist with MD, DNB qualifications' },
                    { icon: Sparkles, text: 'FDA-approved advanced technology' },
                    { icon: Star, text: 'Personalized treatment plans' },
                    { icon: CheckCircle, text: 'Evidence-based medical approach' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-primary-500 shrink-0" />
                      <span className="text-sm text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="card-premium p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 font-display">Book Consultation</h3>
                <p className="text-sm text-slate-600 mb-5">
                  Take the first step towards healthier skin and hair.
                </p>
                <Link
                  to="/appointment"
                  className="btn-primary w-full text-center mb-3"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/919606042223?text=Hi! I want to know more about ${treatment.title} at Prashali Skin Sciences."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 border-2 border-green-500 text-green-600 rounded-full font-semibold hover:bg-green-50 transition-all text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Inquiry
                </a>
              </div>

              <div className="card-premium p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 font-display">Contact</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-slate-500">Phone</p>
                    <a href="tel:+919606042223" className="font-semibold text-primary-600">+91 9606042223</a>
                  </div>
                  <div>
                    <p className="text-slate-500">Location</p>
                    <p className="font-semibold text-slate-900">Nelamangala, Bengaluru</p>
                  </div>
                </div>
              </div>

              {relatedTreatments.length > 0 && (
                <div className="card-premium p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 font-display">Related Treatments</h3>
                  <div className="space-y-3">
                    {relatedTreatments.map((t) => (
                      <Link
                        key={t.id}
                        to={`/treatments/${t.slug}`}
                        className="block text-sm text-slate-600 hover:text-primary-600 hover:bg-primary-50 p-2 rounded-lg transition"
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {relatedTreatments.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 font-display">More Treatments in {category?.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTreatments.map((t, i) => (
                <TreatmentCard key={t.id} treatment={t} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
