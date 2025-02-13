import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Testi1 from '../../assets/testimonial_1.jpg';
import Testi2 from '../../assets/testimonial_2.jpg';
import Testi3 from '../../assets/testimonial_3.jpg';
import Testi4 from '../../assets/testimonial_4.jpg';
import Testi5 from '../../assets/testimonial_5.jpg';
import PropertyLogo from '../../assets/property-logo.png';
import PropertyLogo2 from '../../assets/property-logo2.png';
import NavBgImage from '../../assets/nav-bg.jpg';
import Bglogo from '../../assets/bg-logo.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home flex md:flex-row flex-col font-outfit container gap-5">
      
      {/* Navbar */}
      <div className="w-full md:w-[60%] mt-5">
        <nav className="flex justify-between items-center p-4">
          {/* Logo + Home Icon */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-800 flex items-center justify-center rounded-full">
              <i className="fa-solid fa-house text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold hover:text-green-900">EcoEstates</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-xl font-semibold text-gray-800">
            <li className="hover:text-green-900 transition duration-300 cursor-pointer">
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="hover:text-green-900 transition duration-300 cursor-pointer">
              <Link to="properties" smooth={true} duration={500}>Properties</Link>
            </li>
            <li className="hover:text-green-900 transition duration-300 cursor-pointer">
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className="hover:text-green-900 transition duration-300 cursor-pointer">
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 text-lg font-semibold text-gray-800 bg-white shadow-md p-5 rounded-lg">
            <li className="hover:text-green-900 transition duration-300 cursor-pointer">
              <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-green-900 transition duration-300 cursor-pointer">
              <Link to="properties" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Properties</Link>
            </li>
            <li className="hover:text-green-900 transition duration-300 cursor-pointer">
              <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="hover:text-green-900 transition duration-300 cursor-pointer">
              <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        )}

        {/* Hero Section */}
        <div className="mt-10 text-center md:text-left px-4">
          
          {/* Trust Banner */}
          <div className="bg-green-200 border-2 border-green-800 p-1 inline-flex items-center space-x-3 rounded-full">
            <div className="relative flex">
              <img src={Testi1} className="w-8 h-8 border-2 border-green-600 rounded-full" alt="Testimonial 1" />
              <img src={Testi2} className="w-8 h-8 border-2 border-green-600 rounded-full -ml-3" alt="Testimonial 2" />
              <img src={Testi3} className="w-8 h-8 border-2 border-green-600 rounded-full -ml-3" alt="Testimonial 3" />
              <img src={Testi4} className="w-8 h-8 border-2 border-green-600 rounded-full -ml-3" alt="Testimonial 4" />
              <img src={Testi5} className="w-8 h-8 border-2 border-green-600 rounded-full -ml-3" alt="Testimonial 5" />
            </div>
            <span className="text-sm font-bold">Trusted by 3000+ people</span>
          </div>

          {/* Animated Heading */}
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h3 className="md:max-w-3xl text-3xl md:text-6xl mt-5 leading-tight font-bold">
              Where Luxury Meets Sustainable Living
            </h3>
          </motion.div>

          {/* Description */}
          <div className="mt-6">
            <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="max-w-2xl text-lg md:text-xl">
              Experience Eco-friendly homes that don't compromise on comfort.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="max-w-2xl text-lg md:text-xl mt-3">
              Join the future of mindful living in properties that care for you and the planet.
            </motion.p>
          </div>

          {/* Animated Logos */}
          <div className="flex flex-col md:flex-row items-center md:gap-5 mt-6">
            <motion.img src={PropertyLogo} className="w-36 h-36 md:w-52 md:h-52" alt="Property-Logo" whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} />
            <motion.img src={PropertyLogo2} className="w-40 h-40 md:w-56 md:h-56" alt="Property-Logo" whileHover={{ rotate: -10, scale: 1.1 }} transition={{ duration: 0.3 }} />
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <motion.div className="bg-cover bg-center w-full md:w-[40%] h-96 md:h-[630px] mt-5 rounded-3xl p-5" style={{ backgroundImage: `url(${NavBgImage})` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        
        {/* Buttons */}
        <motion.div className="flex justify-center md:justify-end items-center gap-3 mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <div className="bg-green-800 text-white p-2 rounded-full flex items-center">
            <span className="text-sm md:text-lg font-semibold">List Properties</span>
          </div>
          <div className="bg-white p-2 rounded-full flex items-center space-x-2">
            <img src={Bglogo} alt="Logo" className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-sm md:text-lg font-semibold">EN</span>
            <i className="fa-solid fa-chevron-down text-gray-600"></i>
          </div>
        </motion.div>

        {/* Testimonial Bubble */}
        <div className="bg-white opacity-40 flex max-w-[90%] md:max-w-[70%] mt-6 rounded-xl p-3 mx-auto md:mx-0">
          <img src={Testi2} className="w-6 h-6 md:w-8 md:h-8 border-2 border-green-600 rounded-full" alt="Testimonial 2" />
          <p className="text-xs md:text-sm ml-2">"A Seamless Experience from start to finish. I found my perfect home with ease!"</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
