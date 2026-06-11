import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/gallery';
import { cn } from '../utils/cn';

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [selectedImage, setSelectedImage] = React.useState(null);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === cat.id
                ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                : "bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-600 border border-slate-200"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((image, index) => (
          <motion.div
            key={image.url}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05 }}
            className="relative group rounded-2xl overflow-hidden aspect-4/3 cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-5">
              <h4 className="text-white font-semibold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {image.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            />
            <p className="absolute bottom-8 text-white text-center text-lg font-medium">
              {selectedImage.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
