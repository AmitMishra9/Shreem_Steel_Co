import React from 'react';
import { motion } from 'framer-motion';
import './Quality.css';

const Quality = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const valueVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const valueVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="section">
      <motion.div
        className="section-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.h2 variants={textVariants}>Our Core Values</motion.h2>
        <motion.p className="main-text" variants={textVariants}>
        Discover what makes us stand out in the industry
        </motion.p>
        <div className="values">
          <motion.div className="value" variants={valueVariantsLeft}>
            <h3>Quality Standards</h3>
            <p>
            We uphold the highest standards of quality in our steel products, ensuring reliability and durability.
            </p>
          </motion.div>
          <motion.div className="value" variants={valueVariantsRight}>
            <h3>Innovative Solutions</h3>
            <p>
            We continually innovate to deliver cutting-edge steel products that meet market needs.
            </p>
          </motion.div>
          <motion.div className="value" variants={valueVariantsLeft}>
            <h3>Customer Commitment</h3>
            <p>
            Customer satisfaction is our priority. We provide personalized service and customized steel solutions.
            </p>
          </motion.div>

          <motion.div className="value" variants={valueVariantsLeft}>
            <h3>24 X 7 Support</h3>
            <p>
            We offer round-the-clock support to meet our clients' needs promptly.
            </p>
          </motion.div>

          <motion.div className="value" variants={valueVariantsLeft}>
            <h3>Eco-Friendly Practices</h3>
            <p>
            We prioritize sustainability with eco-friendly materials and processes.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Quality;
