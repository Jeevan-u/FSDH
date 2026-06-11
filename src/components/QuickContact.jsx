import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';

export default function QuickContact() {
  const [phone, setPhone] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim().length >= 10) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setPhone('');
      }, 4000);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="gradient-primary py-16 md:py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Book Your Appointment Today
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Your personalized skin and hair treatment plan starts with one click. Schedule your consultation with our experts now and take the first step toward your transformation.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4"
              >
                <CheckCircle className="h-6 w-6 text-emerald-400" />
                <span className="text-white font-semibold">We will call you back shortly!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <div className="relative flex-1 w-full">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-4 rounded-full text-base outline-none focus:ring-2 focus:ring-accent-400"
                    minLength={10}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold text-base px-8 py-4 w-full sm:w-auto whitespace-nowrap"
                >
                  Call Me Back <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}

            <p className="text-white/60 text-sm mt-4">
              Or call us directly at{' '}
              <a href="tel:+919606042223" className="text-accent-400 font-semibold hover:underline">+91 9606042223</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
