import React from "react";
import "./ContactUs.css";
import TestimonialsSection from "../../component/TestimonialsSection";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const controlsForm = useAnimation();
  const controlsMap = useAnimation();
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (formInView) {
      controlsForm.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2 },
      });
    }
    if (mapInView) {
      controlsMap.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2 },
      });
    }
  }, [controlsForm, formInView, controlsMap, mapInView]);

  return (
    <div className="contact-us-container">
      <br></br><br></br>
      <h2 className="contact-us-heading">Contact Us</h2>
      <div className="contact-us-content">
        {/* Form Section */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: 500 }} // Slide in from the right
          animate={controlsForm}
          className="contact-us-form"
        >
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>

        </motion.div>

        {/* Map Section */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, x: -500 }} // Slide in from the left
          animate={controlsMap}
          className="contact-us-map"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.663066917285!2d77.4550984!3d28.6477606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1e244d01f19%3A0xae6484aedd3ea345!2s55%2C%20Loha%20Mandi%2C%20Bulandshahr%20Road%20Industrial%20Area%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1693641245397!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ContactUs;
