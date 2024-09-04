// src/components/Statistics.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Statistics.css';

const Statistics = () => {
  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Hook for animated numbers
  const useCountAnimation = (targetValue, duration = 2) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const controls = setInterval(() => {
        setCount((prev) => {
          if (prev < targetValue) {
            return prev + Math.ceil(targetValue / (duration * 31));
          } else {
            clearInterval(controls);
            return targetValue;
          }
        });
      }, 33); // Approximately 30 frames per second

      return () => clearInterval(controls);
    }, [targetValue, duration]);

    return count;
  };

  // Use custom hook for each stat
  const oemCustomers = useCountAnimation(800, 2);
  const skus = useCountAnimation(300, 2);
  const plants = useCountAnimation(3, 1);
  const capacity = useCountAnimation(3.6, 2); // For decimal values, adjust as needed
  const experience = useCountAnimation(40, 2);

  return (
    <motion.div
      className="statistics-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animates when in view
      viewport={{ once: false, amount: 0.3 }} // Runs every time 30% of the element is in view
    >
      <motion.div className="stat-item" variants={itemVariants}>
        <p className='s-item'>{oemCustomers}+</p>
        <span className='s-item'>OEM Customers</span>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <p className='s-item'>{skus}+</p>
        <span className='s-item'>SKU'S</span>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <p className='s-item'>{plants}</p>
        <span className='s-item'>Manufacturing Plants</span>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <p className='s-item'>{capacity.toFixed(1)} Lacs</p> {/* .toFixed(1) for decimal places */}
        <span className='s-item'>Ton/Installed Capacity</span>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <p className='s-item'>{experience}+</p>
        <span className='s-item'>Years of Rich Experience</span>
      </motion.div>
    </motion.div>
  );
};

export default Statistics;
