import React from "react";
import "./About.css";
import about1 from "../../assets/images/about-1.jpg";
import abcard1 from "../../assets/images/abcard1.jpg";
import abcard2 from "../../assets/images/abcard2.jpg";
import abcard3 from "../../assets/images/abcard3.jpg";
import abvcard1 from "../../assets/images/abvcard1.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const controlsIntro = useAnimation();
  const controlsCards = useAnimation();
  const controlsVision = useAnimation();

  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (introInView) {
      controlsIntro.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
    if (cardsInView) {
      controlsCards.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
    if (visionInView) {
      controlsVision.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [
    controlsIntro,
    introInView,
    controlsCards,
    cardsInView,
    controlsVision,
    visionInView,
  ]);

  return (
    <div className="about">
      {/* First Section: Image and Paragraph */}
      <motion.section
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsIntro}
        className="about__section about__section--intro"
      >
        <img src={about1} alt="Description" className="about__image" />
        <p className="about__intro-text">
          <span className="about__intro-header">
            <h4>About Us</h4>
          </span>
          Shreem Steel Co is a prominent name in the wholesale and trading of
          flat steel products, including HR Coils, CR Coils, Galvanized Coils,
          and more. We also offer finished products such as MS ERW tubes/pipes,
          CR ERW tubes/pipes, and TMT Bars. With over 30 years of industry
          experience and expertise spanning three generations, we are committed
          to delivering high-quality products and ensuring 100% customer
          satisfaction.
        </p>
      </motion.section>

      {/* Second Section: Card Section */}
      <motion.h4
        ref={cardsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsCards}
        className="about__section-header"
      >
        Our Mission
      </motion.h4>
      <motion.section
        ref={cardsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsCards}
        className="about__section about__section--cards"
      >
        <div className="about__card">
          <h3>Global Excellence</h3>
          <img src={abcard1} alt="Card Image 1" className="about__card-image" />
          <p>We deliver top-quality steel products and services worldwide...</p>
        </div>
        <div className="about__card">
          <h3>Lasting Value</h3>
          <img src={abcard3} alt="Card Image 3" className="about__card-image" />
          <p>
            We focus on superior quality and ethical practices to provide
            significant value...
          </p>
        </div>
        <div className="about__card">
          <h3>Dynamic Work Culture</h3>
          <img src={abcard2} alt="Card Image 2" className="about__card-image" />
          <p>Our team’s dedication drives continuous improvement...</p>
        </div>
      </motion.section>

      {/* Third Section: Two Images with Center Text */}
      <motion.h5
        ref={visionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsVision}
        className="about__section-header"
      >
        Our Vision
      </motion.h5>
      <motion.section
        ref={visionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsVision}
        className="about__section about__section--vision"
      >
        <div className="about__vision">
          <img
            src={abvcard1}
            alt="Vision Image 2"
            className="about__vision-image"
          />
        </div>
        <p className="about__vision-text">
        Our company's vision is to be the world's most reliable and innovative manufacturer, service provider, and solution provider in the steel industry. We aim to set the standard for excellence, driving innovation and maintaining the highest levels of reliability and quality in all our products and services. By continually investing in advanced technology and sustainable practices, we strive to enhance our capabilities and deliver value to our customers. Our commitment to innovation ensures that we remain at the forefront of industry developments, offering cutting-edge solutions that meet the evolving needs of the market. We believe in building strong relationships with our customers, understanding their unique requirements, and providing tailored solutions that exceed expectations. Our goal is to foster a culture of continuous improvement, where our team is empowered to think creatively and deliver exceptional results
        </p>
      </motion.section>
    </div>
  );
}

export default About;
