import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 6, ease: 'easeInOut', repeat: Infinity },
    },
  };

  const badges = [
    { label: 'Best Rated', icon: '⭐' },
    { label: 'Live Music', icon: '🎵' },
    { label: 'Signature Dish', icon: '👨‍🍳' },
  ];

  return (
    <section className="min-h-screen bg-luxury-black pt-24 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Gold Tag */}
          <motion.div variants={itemVariants} className="w-fit">
            <span className="gold-tag">✨ FINE DINING EXPERIENCE</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="luxury-heading">
              Kazuza — <span className="italic text-luxury-gold">Luxury Cuisine</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="luxury-text max-w-lg"
          >
            Experience an exquisite blend of modern Indian and Italian fine dining. Our chef crafts each dish with precision, using only the finest ingredients to create an unforgettable culinary journey in an elegant, sophisticated ambiance with live music performances.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="#menu"
              className="luxury-btn-gold"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.a>
            <motion.a
              href="#reservations"
              className="luxury-btn-outline"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Table
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Floating Image with Badges */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
          viewport={{ once: true }}
        >
          {/* Gold Glow Background */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Food Image Container */}
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden"
            style={{ perspective: '1000px' }}
            variants={floatingVariants}
            animate="animate"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop"
              alt="Premium Luxury Dish"
              className="w-full h-full object-cover"
              whileHover={{
                rotateY: 15,
                rotateX: -10,
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Badges */}
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              className="absolute glass rounded-full px-4 py-3 text-sm font-semibold text-luxury-gold whitespace-nowrap"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4 + idx * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: ['20%', '10%', '20%'][idx],
                top: ['10%', '40%', '70%'][idx],
              }}
            >
              <span className="mr-2">{badge.icon}</span>
              {badge.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-luxury-gold rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
