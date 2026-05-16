import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function Dishes() {
  const dishes = [
    {
      name: 'Truffle Pasta',
      price: '₹420',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop',
      description: 'Silky truffle-infused pasta with parmesan crust',
    },
    {
      name: 'Paneer Steak',
      price: '₹380',
      image: 'https://images.unsplash.com/photo-1604103442097-8e03e01ba97b?w=400&h=400&fit=crop',
      description: 'Grilled paneer with exotic spices and herbs',
    },
    {
      name: 'Sizzling Pizza',
      price: '₹350',
      image: 'https://images.unsplash.com/photo-1571407-918286d4194c?w=400&h=400&fit=crop',
      description: 'Wood-fired pizza with premium toppings',
    },
    {
      name: 'Alfredo Special',
      price: '₹400',
      image: 'https://images.unsplash.com/photo-1645112411341-6c4ee32510d8?w=400&h=400&fit=crop',
      description: 'Creamy alfredo sauce with handmade pasta',
    },
    {
      name: 'Tandoori Platter',
      price: '₹440',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
      description: 'Authentic tandoori delicacies assorted platter',
    },
    {
      name: 'Chocolate Lava Cake',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
      description: 'Decadent molten chocolate with vanilla ice cream',
    },
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
    },
  };

  return (
    <section id="menu" className="luxury-section bg-luxury-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gold-tag">🍽️ CULINARY EXCELLENCE</span>
          <h2 className="luxury-heading mt-6">Popular Dishes</h2>
          <p className="luxury-text max-w-2xl mx-auto mt-4">
            Handcrafted selections from our award-winning chefs, featuring the finest ingredients and timeless flavors
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dishes.map((dish, idx) => (
            <motion.div
              key={idx}
              className="luxury-card group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -15, rotateZ: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-luxury-black/60 group-hover:from-luxury-gold/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-zodiak font-semibold text-white mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-luxury-gold">
                    {dish.price}
                  </span>
                  <motion.button
                    className="text-luxury-gold hover:text-luxury-gold hover:scale-125 transition-transform"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus size={24} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
