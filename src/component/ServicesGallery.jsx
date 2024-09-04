// src/components/ServiceGallery.js
import React from 'react';
import { Users, ThumbsUp, Truck, Trophy, Cog, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/s1.jpg'; 

const services = [
  { icon: <Users size={24} />, title: "CUSTOMER SERVICE", description: "We are a friendly group of knowledgeable and courteous people who coordinate and schedule your concrete pours." },
  { icon: <ThumbsUp size={24} />, title: "QUALITY CONTROL", description: "Our qualified specialists help us to create status of a group leader in the market." },
  { icon: <Truck size={24} />, title: "WAREHOUSE MATERIALS", description: "We have the necessary commodity stock of bagged cement of all grades in our warehouses." },
  { icon: <Trophy size={24} />, title: "READY-MIX CONCRETE", description: "Ready mixed refers to concrete that is batched for delivery from a central plant instead of being mixed on the job site." },
  { icon: <Cog size={24} />, title: "SAND YARD OPERATIONS", description: "Wash the sand from fine dust fraction, silt and clay inclusions; divide sand into two or more fractions by size." },
  { icon: <Tag size={24} />, title: "BLOCK SALES", description: "Blocks for the construction are mainly manufactured of cement and have good characteristics and low cost." },
];

// Array of colors for the icons
const iconColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', '#33FFF2'];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

const ServiceGallery = () => {
  return (
    <motion.div 
      className="service-gallery"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="gallery-heading">Our Expertise </h2>
      <motion.div className="services-container">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-item"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }} // Adding rotation on hover for fun effect
          >
            <motion.div 
              className="service-icon" 
              style={{ backgroundColor: iconColors[index % iconColors.length] }}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {React.cloneElement(service.icon, { color: 'white' })}
            </motion.div>
            <h3>{service.title}</h3>
            <p className='p'>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <style jsx>{`
        .service-gallery {
          position: relative;
          top:-100px;
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage});
          
          background-size: cover;
          background-position: center;
          padding: 1rem;
          color: white;
        }
        .gallery-heading {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          color:white;
        }
        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        .service-item {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .service-icon {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 1rem;
          
        }
        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.02rem;
          line-height: 1.4;
        }
        .p {
          color: white; 
          font-size: 1.02rem;
        }
        @media (max-width: 768px) {
          .services-container {
            grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
          }
        }
        @media (max-width: 480px) {
          .services-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ServiceGallery;
