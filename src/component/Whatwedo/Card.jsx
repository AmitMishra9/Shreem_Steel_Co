// Card.js
import React from 'react';
import { motion } from 'framer-motion';
import  "./CardStyles.css";
import { Link } from 'react-router-dom';


const Card = ({ image, title, description }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/about" className="read-more">Know More</Link>
      </div>
    </motion.div>
  );
};

export default Card;
