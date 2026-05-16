import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Utensils } from 'lucide-react';

export default function MobileCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-luxury-black/95 backdrop-blur-xl border-t border-white/10 p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-3 max-w-md mx-auto">
            <motion.a
              href="#menu"
              className="flex-1 bg-white text-luxury-black font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Utensils size={18} />
              Menu
            </motion.a>
            <motion.a
              href="#"
              className="flex-1 bg-luxury-gold text-luxury-black font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-luxury-gold/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={18} />
              Book Table
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
