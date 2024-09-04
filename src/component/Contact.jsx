import React,{useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import './Contact.css';
const Contact = () => {  
  
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
    triggerOnce: true // Trigger animation only once
  });
  
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  


  return (
    <section className="contact-section">
    <motion.div
    ref={ref}
      className="contact-form"
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
  >
        <h2>Request a Call Back</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <button type="submit">Submit</button>
        </form>
     </motion.div>

      <div className="map-section">
        
        <div className="map-container">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.663066917285!2d77.4550984!3d28.6477606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1e244d01f19%3A0xae6484aedd3ea345!2s55%2C%20Loha%20Mandi%2C%20Bulandshahr%20Road%20Industrial%20Area%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1693641245397!5m2!1sen!2sin"
          allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
