import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <div className="pb-24">
      <Helmet>
        <title>Gallery | Prashali Skin Sciences Nelamangala</title>
        <meta name="description" content="See our clinic, equipment, and treatment rooms at Prashali Skin Sciences, Nelamangala." />
        <meta property="og:title" content="Gallery | Prashali Skin Sciences Nelamangala" />
        <meta property="og:description" content="Photos of our clinic, equipment, and treatment rooms in Nelamangala." />
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
            Take a look around. See what the clinic actually looks like.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <GalleryGrid />
      </div>
    </div>
  );
}
