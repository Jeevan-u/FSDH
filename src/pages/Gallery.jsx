import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <div className="pb-24">
      <Helmet>
        <title>Gallery | No. 1 Dermatologist in Nelamangala Bangalore</title>
        <meta name="description" content="Take a visual tour of Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore. View our advanced equipment, treatment rooms, and patient results gallery." />
        <meta property="og:title" content="Gallery | No. 1 Dermatologist in Nelamangala Bangalore" />
        <meta property="og:description" content="Take a visual tour of Prashali Skin Sciences — the No. 1 dermatologist in Nelamangala, Bangalore. View our advanced equipment, treatment rooms, and results." />
        <meta property="og:url" content="https://prashaliskinsciences.com/gallery" />
        <link rel="canonical" href="https://prashaliskinsciences.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://prashaliskinsciences.com/"},
              {"@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://prashaliskinsciences.com/gallery"}
            ]
          })}
        </script>
      </Helmet>
      <div className="gradient-primary pt-24 pb-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-display"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Take a visual tour of our clinic, advanced equipment, and treatment results.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <GalleryGrid />
      </div>
    </div>
  );
}
