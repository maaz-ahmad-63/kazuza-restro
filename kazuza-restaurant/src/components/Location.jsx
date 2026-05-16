import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export default function Location() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Khan Chauraha, Mahewa East, Near Agriculture Institute, Prayagraj, Uttar Pradesh 211007',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93693 11100',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon–Fri: 11 AM – 11 PM | Sat–Sun: 11 AM – 12 AM',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="location" className="luxury-section bg-luxury-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gold-tag">📍 VISIT US</span>
          <h2 className="luxury-heading mt-6">Our Location</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="luxury-card p-6 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ x: 10, boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)' }}
                >
                  <div className="flex gap-4 items-start">
                    <div className="text-luxury-gold mt-1">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-zodiak font-semibold text-white mb-2">
                        {info.label}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Opening Hours Detail */}
            <motion.div
              className="luxury-card glass p-8 mt-8"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-zodiak font-semibold text-luxury-gold mb-6">
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="font-semibold">Saturday - Sunday</span>
                  <span>11:00 AM - 12:00 AM</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 italic">
                Live music available Wed–Sun from 7:00 PM
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="tel:+919369311100"
                className="luxury-btn-gold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
              <motion.a
                href="https://www.google.com/maps/place/Kazuza+Restaurant/@25.4118596,81.8436752,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn-outline inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Google Maps
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            className="luxury-card overflow-hidden h-96 lg:h-full min-h-96"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)' }}
          >
            <iframe
              title="Kazuza Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5254688123745!2d81.8436752!3d25.4118596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853540fffffff9%3A0x948e271ba51b91ae!2sKazuza%20Restaurant!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
