import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleNested = () => setIsNestedOpen(!isNestedOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Shreem Steel Co</Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/categoris" className="nav-links"> CATEGORIES</Link>
          </li>
          <li className="nav-item">
            {/*<div className="dropdown">
              <button className="dropbtn nav-item" onClick={toggleProducts}>
                PRODUCTS <i className="fa fa-caret-down" />
              </button>
              <div className={`dropdown-content ${isProductsOpen ? 'show' : ''}`}>
                <Link to="/product1">Product 1</Link>
                <Link to="/product2">Product 2</Link>
                <div className="nested-dropdown">
                  <button className="nested-dropbtn" onClick={toggleNested}>
                    Nested Menu <i className="fa fa-caret-right" />
                  </button>
                  <div className={`nested-dropdown-content ${isNestedOpen ? 'show' : ''}`}>
                    <Link to="/nested1">Nested 1</Link>
                    <Link to="/nested2">Nested 2</Link>
                    <Link to="/nested3">Nested 3</Link>
                  </div>
                </div>
              </div>
            </div>*/}
          </li>
          <li className="nav-item">
            <Link to="/contactus" className="nav-links">CONTACTS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;