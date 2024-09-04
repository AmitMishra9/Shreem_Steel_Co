// CardList.js
import React from 'react';
import Card from './Card';
import  "./CardStyles.css";
import w1 from '../../assets/images/w1.jpg';
import w2 from '../../assets/images/w2.jpg';
import w3 from '../../assets/images/w3.jpg';
import w4 from '../../assets/images/w4.webp';


const cardData = [
  {
    image: w1,
    
    description: 'The satisfaction of our customers - that is the main task of the company.',
  },
  {
    image: w2,
    
    description: 'The quality of our products is the basis of our reputation.',
  },
  {
    image: w3,
    
    description: 'We supply cement to manufacturers of building materials.',
  },
  {
    image: w4,
    
    description: 'All our customers can always be sure in our assistance.',
  },
];

const CardList = () => {
    return (
      <div className="card-list-container">
        {/* Heading Section */}
        <h2 className="heading" style={{color:'black'}}>Our Approch</h2>
  
        {/* Card List */}
        <div className="card-list">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    );
  };
  
  export default CardList;