import React from 'react';
import { motion } from 'framer-motion';
import { Music, Volume2 } from 'lucide-react';

export default function LiveMusic() {
  const bars = Array.from({ length: 12 });

  const barVariants = {
    animate: (idx) => ({
      height: ['30%', '100%', '30%'],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        delay: idx * 0.1,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section id="specials" className="luxury-section bg-luxury-black relative overflow-hidden py-32">
      {/* Spotlight Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-luxury-gold/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-luxury-gold/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-luxury-gold/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gold-tag">🎵 IMMERSIVE EXPERIENCE</span>
          <h2 className="luxury-heading mt-6">Live Music Nights</h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="luxury-card glass p-12 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Music Icon with animation */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="relative">
                <Music size={64} className="text-luxury-gold" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-luxury-gold"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Heading */}
            <h3 className="luxury-subheading text-white mb-4">
              Experience Soulful Harmonies
            </h3>

            {/* Description */}
            <p className="luxury-text text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Indulge in our premium culinary creations while enjoying exceptional live performances. Our carefully curated musical selections complement your dining experience, creating an unforgettable evening of elegance and entertainment.
            </p>

            {/* Animated Equalizer */}
            <div className="flex justify-center items-end gap-2 h-20 mb-8">
              {bars.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="w-1.5 bg-luxury-gold rounded-full"
                  custom={idx}
                  variants={barVariants}
                  animate="animate"
                  style={{ minHeight: '30%' }}
                />
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Live Performances', desc: 'Wed–Sun, 7 PM onwards' },
                { title: 'Premium Ambiance', desc: 'Curated music selection' },
                { title: 'Signature Cocktails', desc: 'Crafted mocktails available' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-luxury-gold/20"
                  whileHover={{ bg: 'rgba(212, 175, 55, 0.1)', y: -5 }}
                >
                  <h4 className="text-luxury-gold font-zodiak font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#reservations"
            className="luxury-btn-gold inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Volume2 size={18} />
            Book Your Experience
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
