import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Food Critic',
      text: 'Kazuza Restaurant redefines luxury dining in Prayagraj. The fusion of Indian and Italian cuisines is impeccable, and the ambiance is simply breathtaking.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Priya Sharma',
      role: 'Event Organizer',
      text: 'Perfect for special occasions! The live music, exceptional service, and culinary excellence made our anniversary unforgettable. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Amitabh Singh',
      role: 'Business Professional',
      text: 'The premium experience at Kazuza is worth every penny. An ideal venue for business meetings and corporate dinners. Outstanding!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    {
      name: 'Ananya Patel',
      role: 'Travel Blogger',
      text: 'A culinary masterpiece! The signature dishes are creative, and Chef Alessandro\'s vision is evident in every plate. Must visit!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="luxury-section bg-luxury-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gold-tag">⭐ GUEST REVIEWS</span>
          <h2 className="luxury-heading mt-6">What Our Guests Say</h2>
          <p className="luxury-text max-w-2xl mx-auto mt-4">
            Discover why Kazuza Restaurant is the choice of discerning diners
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              className="luxury-card glass p-8 md:p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Guest Info */}
                <div className="md:col-span-1 flex flex-col items-center text-center">
                  <motion.img
                    src={testimonials[currentIdx].image}
                    alt={testimonials[currentIdx].name}
                    className="w-20 h-20 rounded-full border-2 border-luxury-gold mb-4 object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <h4 className="text-xl font-zodiak font-semibold text-white">
                    {testimonials[currentIdx].name}
                  </h4>
                  <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mt-1">
                    {testimonials[currentIdx].role}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mt-3 justify-center">
                    {Array.from({ length: testimonials[currentIdx].rating }).map(
                      (_, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.2 }}>
                          <Star
                            size={16}
                            className="fill-luxury-gold text-luxury-gold"
                          />
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="md:col-span-2">
                  <motion.p
                    className="text-lg text-gray-300 leading-relaxed italic"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonials[currentIdx].text}"
                  </motion.p>

                  {/* Quote Mark */}
                  <div className="text-6xl text-luxury-gold/20 font-zodiak mt-4">
                    "
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              onClick={handlePrev}
              className="p-3 rounded-full border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIdx ? 'bg-luxury-gold w-8' : 'bg-luxury-gold/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="p-3 rounded-full border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Auto-advance hint */}
          <div className="text-center mt-8 text-gray-400 text-sm">
            {currentIdx + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
