import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import  HRCRCoils from '../assets/images/flat.png'
import  HRCRSheets from '../assets/images/Finished.png'
import  ERWPipes from '../assets/images/ERW Pipes.jpeg'
import MSERWTubesPipes from '../assets/images/H1.png';
import CRERWTubesPipes from '../assets/images/CR ERW TubesPipes.jpeg'
import PreGalvanizedTubesPipes from '../assets/images/Pre-Galvanized TubesPipes.jpeg'

// Replace these paths with the actual paths to your images
const products = [
  {
    name: 'HR||CR Coils',
    description: 'Hot rolled steel is roll-pressed at high temperatures, making it easier to form.',
    image: HRCRCoils, // Replace with the actual path to the Rubble image
  },
  {
    name: 'HR||CR sheets',
    description: 'Cold rolled steel is hot rolled steel further processed in a cold rolling mill.',
    image:  HRCRSheets, // Replace with the actual path to the Cement image
  },
  {
    name: 'ERW Pipes',
    description: 'Aerocrete is convenient and practical material. It combines the best properties of brick and wood. From the first it takes the strength and reliability, and from the second - breathability.',
    image:  ERWPipes, // Replace with the actual path to the Aerocrete image
  },
  {
    name: 'MS ERW Tubes/Pipes ',
    description: 'Mild Steel Electric Resistance Welded tubes/pipes.',
    image: MSERWTubesPipes, // Replace with the actual path to the Gravel image
  },
  {
    name: 'CR ERW Tubes/Pipes ',
    description: 'Cold Rolled Electric Resistance Welded tubes/pipes.',
    image: CRERWTubesPipes, // Replace with the actual path to the Gravel image
  },
  {
    name: 'Pre-Galvanized Tubes/Pipes',
    description: 'Tubes/pipes with a pre-applied zinc coating.',
    image: PreGalvanizedTubesPipes, // Replace with the actual path to the Gravel image
  },
  
];

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

const ProductCard = ({ product }) => (
  <motion.div
    className="product-card"
    variants={itemVariants}
    initial="hidden"
    whileInView="visible" // Animates when in view
    viewport={{ once: false, amount: 0.8 }} // Runs every time 30% of the element is in view
    transition={{ duration: 0.9 }}
  >
    <div className="icon-container">
      <img src={product.image} alt={product.name} className="product-image" />
    </div>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <Link to="/categoris" className="read-morep">READ MORE</Link>
  </motion.div>
);

const ProductGrid = () => (
  <motion.div
    className="product-grid-container"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <style jsx>{`
      .product-grid-container {
        position: relative;
        margin-top: -7%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        background-color: white;
      }

      h1 {
        text-align: center;
        color: #333;
        margin-bottom: 30px;
        font-size: 3rem;
        width: 100%;
      }

      .product-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        gap: 20px;
        max-width: 1200px;
        width: 100%;
      }

      .product-card {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition: background-color 0.3s ease;
        height: 300px;
      }

      .icon-container {
        background-color: gray;
        border-radius: 50%;
        width: 80px; /* Adjust the size as needed */
        height: 80px; /* Adjust the size as needed */
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        overflow: hidden; /* Ensures the image stays within the container */
      }

      .product-image {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures the image covers the container while maintaining aspect ratio */
        border-radius: 50%; /* Makes the image circular */
      }

      h2 {
        margin: 10px 0;
        color: #444;
      }

      p {
        font-size: 16px;
        margin-bottom: 15px;
      }

      .read-morep {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        background-color: black;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
      }

      .read-morep:hover {
        background-color: white;
        color: black;
      }

      .product-card:nth-child(1) {
        background-color: #e1f5fe;
      }

      .product-card:nth-child(2) {
        background-color: #fce4ec;
      }

      .product-card:nth-child(3) {
        background-color: #f9fbe7;
      }

      .product-card:nth-child(4) {
        background-color: #e8f5e9;
      }

      @media (max-width: 768px) {
        .product-grid {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
      }

      @media (max-width: 480px) {
        .product-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
    <h1>Our Categories</h1>
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </motion.div>
);

export  default ProductGrid;
