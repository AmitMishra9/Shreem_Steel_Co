import './App.css';
import Navbar from './component/Nav/Navbar';
import Footer from './component/Footer/Footer';
import Carousel from './component/Carousel/VideoComponent';
import Company from './component/Company';
import CardList from './component/Whatwedo/CardList';
import ServicesGallery from './component/ServicesGallery';
import ProductGrid from './component/ProductGrid';
import Statistics from './component/Statistics';
import Quality from './component/Quality';
import ProjectGallery from './component/ProjectGallery';
import Contact from './component/Contact';
import CopyrightBar from './component/CopyrightBar';
import TestimonialsSection from './component/TestimonialsSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './Pages/Contact/ContactUs';
import About from './Pages/About/About';
import Categories from './Pages/Categories/Categories';

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Company />
              <CardList />
              <ServicesGallery />
              <ProductGrid />
              <Statistics />
              <Quality />
              <ProjectGallery />
              <TestimonialsSection />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/categoris" element={<Categories/>} />
          {/* Add other routes here for Products, Contact Us, Categories, etc. */}
        </Routes>
        <Footer />
        <CopyrightBar />
      </div>
  
  );
}

export default App;