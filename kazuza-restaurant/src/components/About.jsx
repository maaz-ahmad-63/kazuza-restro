import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '12+', label: 'Years Excellence', icon: Award },
    { number: '500+', label: 'Happy Guests', icon: Users },
    { number: '24/7', label: 'Dedication', icon: Clock },
  ];

  return (
    <section id="about" className="luxury-section bg-luxury-black relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Collage */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Large image */}
              <motion.div
                className="col-span-1 row-span-2 rounded-3xl overflow-hidden luxury-card"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504674900152-b8b0f6f773d2?w=400&h=800&fit=crop"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top right image */}
              <motion.div
                className="rounded-2xl overflow-hidden luxury-card"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1414235077418-3a027786a13f?w=400&h=300&fit=crop"
                  alt="Fine Dining"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom right - Stats Card */}
              <motion.div
                className="luxury-card glass flex flex-col justify-center items-center p-6"
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
              >
                <div className="text-4xl font-zodiak font-bold text-luxury-gold mb-2">
                  12+
                </div>
                <div className="text-sm text-gray-300 text-center tracking-widest uppercase font-semibold">
                  Years Excellence
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gold-tag">📖 OUR STORY</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="luxury-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Chef Alessandro's Legacy
            </motion.h2>

            {/* Blockquote */}
            <motion.blockquote
              className="border-l-4 border-luxury-gold pl-6 italic text-xl text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              "Every dish tells a story of passion, tradition, and innovation. We believe luxury dining is not just about food—it's about the experience."
            </motion.blockquote>

            {/* Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="luxury-text">
                Kazuza Restaurant was established with a vision to bring world-class dining to Prayagraj. Our fusion of modern Indian and Italian cuisines has earned us recognition as one of the most sophisticated dining establishments in the region.
              </p>
              <p className="luxury-text">
                Under the expert guidance of Chef Alessandro, our kitchen maintains the highest standards of culinary excellence, using only premium ingredients and innovative cooking techniques.
              </p>
            </motion.div>

            {/* Chef Signature */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-3xl font-zodiak text-luxury-gold">
                ~ Chef Alessandro
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="luxury-card glass p-8 text-center"
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
              >
                <Icon className="w-8 h-8 text-luxury-gold mx-auto mb-4" />
                <div className="text-3xl font-zodiak font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 tracking-widest uppercase font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
