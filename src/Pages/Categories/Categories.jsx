import React from 'react';
import './Categories.css';
import { motion } from 'framer-motion';
import B2 from '../../assets/images/B2.jpg';
import B4 from '../../assets/images/B4.png';
import HRSP from '../../assets/images/B1.jpg';
import CRSP from '../../assets/images/B3.jpg';
import GCRP from '../../assets/images/B8.jpg';
import DCRP from '../../assets/images/B6.jpg';
import HCRP from '../../assets/images/B7.jpg';
import MSPB from '../../assets/images/H1.png';
import CRERWTP from '../../assets/images/B9.jpg';
import PreGTP from '../../assets/images/B5.jpg';

function Categories() {
  const handleBuyNowClick = () => {
    window.open('https://wa.me/your_number_here', '_blank');
  };

  return (
    <div className="categories-container">
      {/* 1st Section: HR || CR COLIS */}
      <h1>HR -- CR Coils</h1>
      <div className="cards-container">
        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={B2} alt="HR Coils/Sheets" />
          <h3>HR Coils/Sheets</h3>
          <p>Hot rolled steel is roll-pressed at high temperatures, making it easier to form.</p>
          <div className="overlay"> 
            <button className="buy-now-button" onClick={handleBuyNowClick}>
              Buy Now
            </button>
          </div>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={B4} alt="CR Coils/Sheets" />
          <h3>CR Coils/Sheets</h3>
          <p>Cold rolled steel is hot rolled steel further processed in a cold rolling mill.</p>
          <div className="overlay">
            <button className="buy-now-button" onClick={handleBuyNowClick}>
              Buy Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* 2nd Section: HR/CR Sheets Steel Products */}
      <h1>HR/CR Sheets Steel Products</h1>
      <div className="cards-container ">
        {[{ img: HRSP, title: 'HR Sheets & Plates', text: 'Hot rolled steel plates with increased surface polish.' },
          { img: CRSP, title: 'CR Sheets & Plates', text: 'Cold rolled sheets with improved strength and surface finish.' },
          { img: GCRP, title: 'Galvanized Coils/Sheets', text: 'Steel with a protective zinc coating.' },
          { img: DCRP, title: 'Color Coated Coils', text: 'Steel with a color coating.' },
          { img: HCRP, title: 'High Tensile Sheets & Plates', text: 'Sheets and plates with high tensile strength.' }]
          .map((item, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="overlay">
                <button className="buy-now-button" onClick={handleBuyNowClick}>
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
      </div>

      {/* 3rd Section: ERW Pipes Steel Products */}
      <h1>ERW Pipes Steel Products</h1>
      <div className="cards-container">
        {[{ img: CRERWTP, title: 'CR ERW Tubes/Pipes', text: 'Cold Rolled Electric Resistance Welded tubes/pipes.' },
          { img: MSPB, title: 'MS ERW Tubes/Pipes', text: 'Mild Steel Electric Resistance Welded tubes/pipes', imgStyle: { height: '50%' } },
          { img: PreGTP, title: 'Pre-Galvanized Tubes/Pipes', text: 'Tubes/pipes with a pre-applied zinc coating.'}]
          .map((item, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <img src={item.img} alt={item.title} style={item.imgStyle || {}} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <br></br>
              <div className="overlay">
                <button className="buy-now-button" onClick={handleBuyNowClick}>
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
      </div>
       <br></br>
       <br></br>
       <br></br>
    </div>
  );
}

export default Categories;
