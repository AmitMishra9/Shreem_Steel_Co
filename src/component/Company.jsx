// src/components/Company.js
import React from 'react';
import { motion } from 'framer-motion';
import './Company.css'; // Import the CSS file

// Variants for button animation
const buttonVariants = {
  idle: {
    scale: 1,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.50)",
  },
  tap: {
    scale: 0.95,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.10)",
  },
};

// Variants for text animation
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const Company = () => {
  return (
    <div className="container">
      <motion.div
        className="text-container"
        variants={textVariants}
        initial="hidden"
        whileInView="visible" // Triggers animation on scroll
        viewport={{ once: false, amount: 0.3 }} // Runs when 30% of the element is in view
      >
        <h1 className="title">Welcome to our company!</h1>
        <section className="description">
          Our company is one of the largest cement producers in the world. It consists of 9 factories. The products of
          the company are well known and have a high reputation among consumers of the building complex. Our
          products are considered to be one of the best in the world and are used during the construction of most of
          the strategic industrial, infrastructural, and residential projects. We work to build long-term and reliable
          cooperation with our customers, providing them with high-quality products and services.
        </section>
        <br /><br />
        <motion.button
          className="animated-button"
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="tap"
          whileInView="visible" // Triggers the button's animation on scroll
          viewport={{ once: false, amount: 0.3 }} // Repeats the animation when scrolled into view
          animate={{
            backgroundColor: [
              '#ff4c4c', 
              '#d32f2f', 
              '#c62828',
              '#c62828', 
              '#424242',
              '#d32f2f',
              '#424242',
            ],
            transition: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          CLICK HERE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Company;
