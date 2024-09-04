import React from 'react';
import { motion } from 'framer-motion';
import './ProjectGallery.css'; // Make sure to create a CSS file for styling
import quality from '../assets/images/quality.jpg';
import q2 from '../assets/images/q2.jpg';
import s1 from '../assets/images/s1.jpg';
import w3 from '../assets/images/w3.jpg';
import w4 from '../assets/images/w4.webp';
import cb from '../assets/images/cb.jpg';

const ProjectGallery = () => {
  // Dummy images
  const images = [quality, q2, s1, w3, w4, cb,];

  // Function to get dynamic delay for each card
  const getDelay = (index) => index * 0.2; // Adjust delay (in seconds) as needed

  return (
    <div className="gallery-container">
      <h2 className="gallery-title"> Project Gallery</h2>
       <p className="gallery-titles" >Our products have been effortlessly incorporated into numerous projects across various industries. 
        <br></br>
       Explore our diverse offerings and see how we've effectively met a wide array of global needs.</p>
      <motion.div
        className="gallery-grid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: getDelay(index) // Apply delay to each card
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={src} alt={`Gallery ${index + 1}`} className="gallery-img" />
          </motion.div>
        ))}
      </motion.div>
      <div className="view-all-button">
        <button>VIEW ALL</button>
      </div>
    </div>
  );
};

export default ProjectGallery;
