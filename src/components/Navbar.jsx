import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Award, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Treatments', path: '/treatments' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-small.png"
              alt="Prashali Skin Sciences"
              className="w-10 h-10 rounded-xl object-contain transition-transform group-hover:scale-105 duration-300"
            />
            <div className="leading-tight">
              <h1 className={cn(
                "text-sm font-bold tracking-wide font-display transition-colors duration-300",
                scrolled ? "text-primary-500" : "text-white"
              )}>
                PRASHALI
              </h1>
              <p className={cn(
                "text-[10px] font-medium tracking-widest uppercase transition-colors duration-300",
                scrolled ? "text-accent-500" : "text-accent-300"
              )}>
                Skin Sciences
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  location.pathname === link.path
                    ? scrolled ? "bg-primary-50 text-primary-600" : "bg-white/20 text-white"
                    : scrolled
                      ? "text-slate-600 hover:text-primary-600 hover:bg-primary-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919606042223"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all",
                scrolled
                  ? "text-primary-600 bg-primary-50 hover:bg-primary-100"
                  : "text-white bg-white/20 hover:bg-white/30"
              )}
            >
              <Phone className="h-4 w-4" />
              +91 9606042223
            </a>
            <Link
              to="/appointment"
              className="btn-gold text-sm px-5 py-2.5"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition",
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <div className="flex items-center gap-2 px-4 py-2 mb-2 bg-accent-50 rounded-lg">
                <Award className="h-4 w-4 text-accent-500" />
                <span className="text-xs font-semibold text-accent-700">No. 1 Dermatologist in Nelamangala</span>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium",
                    location.pathname === link.path
                      ? "bg-primary-50 text-primary-600"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+919606042223"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary-50 text-primary-600 rounded-xl text-base font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  +91 9606042223
                </a>
                <Link
                  to="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 gradient-gold text-primary-600 rounded-xl text-base font-semibold"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
