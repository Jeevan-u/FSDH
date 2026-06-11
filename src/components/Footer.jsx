import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Instagram, MessageCircle, Award, Star, Shield } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Doctor', path: '/about' },
  { name: 'Treatments', path: '/treatments' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const treatmentLinks = [
  { name: 'Acne Treatment', path: '/treatments/acne-treatment' },
  { name: 'Hair Loss Treatment', path: '/treatments/hair-loss-treatment' },
  { name: 'PRP Therapy', path: '/treatments/prp-therapy' },
  { name: 'Laser Hair Reduction', path: '/treatments/laser-hair-reduction' },
  { name: 'Chemical Peels', path: '/treatments/chemical-peels' },
  { name: 'HydraFacial', path: '/treatments/hydrafacial' },
  { name: 'Microneedling', path: '/treatments/microneedling' },
  { name: 'Anti-Aging', path: '/treatments/anti-aging-treatment' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12 pb-8 border-b border-white/10">
          {[
            { icon: Award, text: 'No. 1 Dermatologist in Nelamangala' },
            { icon: Star, text: '4.9 Stars • 127+ Reviews' },
            { icon: Shield, text: 'MD, DNB Certified' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/85 text-sm">
              <item.icon className="h-4 w-4 text-accent-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-small.png"
                alt="Prashali Skin Sciences"
                className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1"
              />
              <div>
                <h3 className="text-lg font-bold font-display">PRASHALI</h3>
                <p className="text-xs text-accent-400 tracking-widest uppercase font-medium">Skin Sciences</p>
              </div>
            </div>
            <p className="text-sm text-white/85 leading-relaxed">
              The <strong className="text-accent-400">No. 1 dermatology clinic in Nelamangala</strong>, Bangalore. Science-backed skin, hair &amp; aesthetic care with advanced technology and personalized treatment plans led by Dr. Varsha R. Koti (MD, DNB).
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/prashali_skin_sciences" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 hover:text-primary-500 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://wa.me/919606042223" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 hover:text-primary-500 transition-all">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/85 hover:text-accent-400 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-5">Treatments</h4>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-white/85 hover:text-accent-400 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-white/85">
                    1st Floor, M M Arcade, 6th Cross,<br />
                    Subash Nagar, Nelamangala,<br />
                    Bengaluru, Karnataka 562123
                  </span>
                  <a
                    href="https://www.google.com/maps/place/Prashali+Skin+Sciences/@13.096895,77.4021306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 text-xs mt-1 block hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </li>
              <li>
                <a href="tel:+919606042223" className="flex items-center gap-3 text-white/85 hover:text-accent-400 transition">
                  <Phone className="h-5 w-5 text-accent-400 shrink-0" />
                  +91 9606042223
                </a>
              </li>
              <li>
                <a href="mailto:prashaliskinsciences@gmail.com" className="flex items-center gap-3 text-white/85 hover:text-accent-400 transition">
                  <Mail className="h-5 w-5 text-accent-400 shrink-0" />
                  prashaliskinsciences@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-white/85">Mon - Sat: 10:00 AM - 8:00 PM</span>
                  <span className="text-white/70 text-xs mt-0.5 block">Sunday: Holiday</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/70 space-y-2">
          <p>© {new Date().getFullYear()} Prashali Skin Sciences. All rights reserved.</p>
          <p className="text-xs text-white/60">Nelamangala | Bangalore | Tumkur | Dodballapur</p>
        </div>
      </div>
    </footer>
  );
}
