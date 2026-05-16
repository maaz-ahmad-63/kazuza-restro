import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Specials', href: '#specials' },
    { label: 'About', href: '#about' },
  ];

  const rightLinks = [
    { label: 'Contact', href: '#location' },
    { label: 'Reservations', href: '#reservations', isButton: true },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-zodiak font-bold text-white">KAZUZA</h1>
          <p className="text-luxury-gold text-xs tracking-widest font-bold">RESTAURANT</p>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-luxury-gold text-sm tracking-widest uppercase font-semibold transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {rightLinks.map((link, idx) => (
              link.isButton ? (
                <motion.a
                  key={idx}
                  href={link.href}
                  className="luxury-btn-gold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ) : (
                <motion.a
                  key={idx}
                  href={link.href}
                  className="text-gray-300 hover:text-luxury-gold text-sm tracking-widest uppercase font-semibold transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.label}
                </motion.a>
              )
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-luxury-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden glass mx-4 mb-4 rounded-2xl p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-4">
            {[...navLinks, ...rightLinks].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className={link.isButton ? 'luxury-btn-gold block text-center' : 'text-gray-300 hover:text-luxury-gold text-sm tracking-widest uppercase font-semibold'}
                whileHover={{ x: 10 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
