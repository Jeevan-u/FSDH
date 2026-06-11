import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, HelpCircle } from 'lucide-react';
import FAQItem from '../components/FAQItem';
import { faqs } from '../data/faqs';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filtered = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="pb-24">
      <Helmet>
        <title>FAQ | No. 1 Dermatologist in Nelamangala Bangalore</title>
        <meta name="description" content="Find answers to frequently asked questions about dermatology treatments, hair restoration, laser procedures, and skin care at Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore." />
        <meta property="og:title" content="FAQ | Prashali Skin Sciences Nelamangala" />
        <meta property="og:description" content="Find answers to frequently asked questions about dermatology and aesthetic treatments at Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore." />
        <meta property="og:url" content="https://prashaliskinsciences.com/faq" />
        <link rel="canonical" href="https://prashaliskinsciences.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prashaliskinsciences.com/"},
              {"@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://prashaliskinsciences.com/faq"}
            ]
          })}
        </script>
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="gradient-primary pt-24 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-md">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our treatments and services.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white shadow-lg border border-slate-100 focus:ring-2 focus:ring-primary-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="card-premium p-8 md:p-10">
          {filtered.length > 0 ? (
            <div>
              {filtered.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-500 text-lg">No matching questions found.</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center card-premium p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Still have questions?</h3>
          <p className="text-slate-600 mb-6">We are here to help. Reach out to us anytime.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a
              href="https://wa.me/919606042223?text=Hi! I have a question about treatments."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
