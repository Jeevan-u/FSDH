import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.slice(0, 6).length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.slice(0, 6).length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.slice(0, 6).length) % testimonials.slice(0, 6).length);
  };

  const visible = testimonials.slice(0, 6);
  const t = visible[current];

  const variants = {
    enter: (d) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  if (!t) return null;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-3"
        >
          <div className="inline-flex items-center gap-1.5 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
            ))}
          </div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Patient Stories</p>
        </motion.div>

        <div className="relative">
          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="text-center px-4"
              >
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                    {(t.name || 'P').charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.location || 'Verified Patient'}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ChevronLeft className="h-4 w-4 text-slate-400" />
            </button>

            <div className="flex items-center gap-1.5">
              {visible.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary-500 w-5 h-2' : 'bg-slate-200 hover:bg-slate-300 w-2 h-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
