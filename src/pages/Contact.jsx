import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactInfo = [
  { icon: Phone, title: 'Phone', info: '+91 9606042223', sub: 'Available 10 AM - 9 PM', color: 'bg-primary-500', href: 'tel:+919606042223' },
  { icon: Mail, title: 'Email', info: 'prashaliskinsciences@gmail.com', sub: 'We reply within 24 hrs', color: 'bg-accent-500', href: 'mailto:prashaliskinsciences@gmail.com' },
  { icon: MapPin, title: 'Address', info: '1st Floor, M M Arcade, 6th Cross, Subash Nagar, Nelamangala, Bengaluru - 562123', sub: 'Karnataka, India', color: 'bg-primary-500' },
  { icon: Clock, title: 'Business Hours', info: 'Mon - Sat: 10:00 AM - 8:00 PM', sub: 'Sunday: Holiday', color: 'bg-accent-500' },
];

export default function Contact() {
  const [formData, setFormData] = React.useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="pb-16">
      <Helmet>
        <title>Contact Us | No. 1 Dermatologist in Nelamangala Bangalore</title>
        <meta name="description" content="Contact Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore. Call +91 9606042223, email prashaliskinsciences@gmail.com, or visit our clinic near Subash Nagar." />
        <meta property="og:title" content="Contact Us | Prashali Skin Sciences Nelamangala" />
        <meta property="og:description" content="Contact Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore. Visit our clinic or call us for expert skin, hair &amp; aesthetic care." />
        <meta property="og:url" content="https://prashaliskinsciences.com/contact" />
        <link rel="canonical" href="https://prashaliskinsciences.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prashaliskinsciences.com/"},
              {"@type": "ListItem", "position": 2, "name": "Contact", "item": "https://prashaliskinsciences.com/contact"}
            ]
          })}
        </script>
      </Helmet>
      <div className="gradient-primary pt-20 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-3 font-display"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-base"
          >
            Get in touch with Prashali Skin Sciences. We are here to help.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-100 transition-all"
              >
                <div className={`${item.color} w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-slate-900 hover:text-primary-600 transition break-all">
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-900 break-all">{item.info}</p>
                  )}
                  <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex flex-col gap-2">
              <a
                href="tel:+919606042223"
                className="btn-primary w-full text-center"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919606042223?text=Hi! I would like to know more about Prashali Skin Sciences."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/place/Prashali+Skin+Sciences/@13.096895,77.4021306"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-primary-500 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all"
              >
                <Navigation className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card-premium p-5 md:p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Message Sent!</h3>
                  <p className="text-slate-500">We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 font-display">Send us a Message</h2>
                  <p className="text-slate-500 text-sm mb-8">Fill in the form and we will get back to you.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Full Name *</label>
                        <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none text-sm" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Phone *</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none text-sm" placeholder="+91 9876543210" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none text-sm" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Subject *</label>
                      <input required name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none text-sm" placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Message *</label>
                      <textarea required name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none text-sm resize-none" placeholder="Tell us about your concern..." />
                    </div>
                    <button type="submit" className="btn-primary w-full text-base py-3.5">
                      Send Message <Send className="h-4 w-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-slate-100 h-56">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1!2d77.4021306!3d13.096895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2536ebbdf061%3A0x6e2101f4aec6a125!2sPrashali%20Skin%20Sciences!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Prashali Skin Sciences Location"
          />
        </div>
      </div>
    </div>
  );
}
