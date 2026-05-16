import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Brand',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Mission', href: '#about' },
        { label: 'Press', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Menu', href: '#menu' },
        { label: 'Reservations', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Catering', href: '#' },
      ],
    },
    {
      title: 'Hours',
      links: [
        { label: 'Mon - Fri: 11 AM - 11 PM', href: '#' },
        { label: 'Sat - Sun: 11 AM - 12 AM', href: '#' },
        { label: 'Live Music: Wed - Sun', href: '#' },
        { label: '7:00 PM onwards', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Phone: +91 93693 11100', href: 'tel:+919369311100' },
        { label: 'Prayagraj, UP 211007', href: '#location' },
        { label: 'Email: info@kazuza.com', href: 'mailto:info@kazuza.com' },
        { label: 'Support Available 24/7', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-luxury-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-lg font-zodiak font-semibold text-white mb-6 tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-luxury-gold text-sm transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/5 py-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Brand Statement */}
          <div>
            <h2 className="text-2xl font-zodiak font-bold text-white mb-2">KAZUZA</h2>
            <p className="text-gray-400 text-sm">
              Luxury Dining Experience | Where tradition meets innovation
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 hover:border-luxury-gold flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-gray-500 text-sm">
              © {currentYear} Kazuza Restaurant. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Designed for Luxury Dining Excellence
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
    </footer>
  );
}
