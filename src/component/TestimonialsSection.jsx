import React from 'react';
import './TestimonialsSection.css'; // Import the CSS file
import avtar from  '../assets/images/avtar.webp'
// Updated component name to TestimonialsSection
const TestimonialsSection = () => {
  return (
    <div className="faq-wrapper">
      <div className="contact-us">
        <h4>Shreem Steel Co</h4>
        <p>🏗️ <strong>Foundation Year :</strong> 2024</p>
        <p>📧 <strong>Email :</strong> info.shreemsteelco@gmail.com</p>
        <p>📞 <strong>Phone :</strong> 9971562000 || 9818927444</p>
        <p>🤝 <strong>Partners :</strong> Keshav Aggarwal & Raghav Aggarwal</p>
      </div>
      <div className="faq-container">
        <h2 className="faq-title">Our Testimonials</h2>
        <div className="testimonial">
          <img className="testimonial-avatar" src={avtar} alt="Customer Avatar" />
          <p>
            "The steel materials provided by Shreem Steel Co for our toy manufacturing have been exceptional. Their products meet all safety standards and the durability is commendable. We are very satisfied with their service."
          </p>
        </div>
        <div className="testimonial">
          <img className="testimonial-avatar" src={avtar} alt="Customer Avatar" />
          <p>
            "Shreem Steel Co has been an excellent supplier for our electrical panel manufacturing needs. Their high-quality steel and precision components have significantly improved our product reliability."
          </p>
        </div>
        <div className="testimonial">
          <img className="testimonial-avatar" src={avtar} alt="Customer Avatar" />
          <p>
            "Partnering with Shreem Steel Co for our construction projects has been an outstanding experience. Their steel products are of the highest quality and their commitment to timely delivery is unmatched. Highly recommended!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
