import { useState } from 'react';
import { Outlet, Link, Routes, Route } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

import Testimonial from './Testimonial';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';

const Home = () => (
  <>
    <Testimonial />
  </>
);

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-2 border-pink-500'>
      <div className="h-screen  relative">
        <div className="lg:hidden border-2 fixed top-0 right-0 z-50 p-4">
          <button className="text-gray-50" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="w-10 h-10" />
            ) : (
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        {/* Regular Navigation for Desktop */}
        {/* Navbar */}
        <div className=" hidden lg:block fixed z-50 inset-x-0 top-0 bg-gray-800 bg-opacity-65">
          <div className="py-1 mx-auto flex justify-between items-center">
            {/* Logo */}
            <div>
              <img
                src='https://res.cloudinary.com/dmrpovrmd/image/upload/v1711775838/logo_q1of0l.jpg'
                loading='lazy'
                alt="Love Khati Logo"
                className="h-12 md:h-16 rounded-full"
              />
            </div>
            {/* Navigation Items */}
            <ul className="flex justify-center space-x-3 lg:space-x-10">
              <li>
                <Link to="/" className="text-white font-bold text-sm text-md flex md:text-lg hover:text-red-400 active:text-red-400"><FaHome className='my-auto mx-1' /> Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white font-bold text-sm  md:text-lg flex hover:text-red-400 active:text-red-400"><MdOutlineFoodBank className='my-auto mx-1' />About</Link>
              </li>
              <li>
                <Link to="/menu" className="text-white font-bold text-sm md:text-lg flex hover:text-red-400 active:text-red-400"><MdRestaurantMenu className='my-auto mx-1' />Menu</Link>
              </li>
            </ul>
            {/* Contact Button */}
            <div>
              <Link to="/contact" className="text-white font-bold text-sm md:text-lg flex hover:text-white active:text-gray-500 bg-red-500 px-3 py-1 rounded-full"><IoMdContact className='my-auto mx-1' />Contact</Link>
            </div>
          </div>
        </div>

        <div className="h-full">
          <Outlet />
        </div>
        <Routes Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes >

      </div>


      {/* Hamburger Menu Content for Mobile */}
      {
        isOpen && (
          <div className="lg:block-hidden fixed w-4/5 top-0 h-full bg-black bg-opacity-85 z-40">
            <div className="mx-auto pt-20 border-2 ">
              <ul className="flex flex-col space-y-4">
                <li className="transition-transform transform hover:-translate-y-1">
                  <Link to="/" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-all duration-300 py-3 rounded-lg shadow-black shadow-sm transform ">
                    <FaHome className='w-10 h-10 mr-4' />
                    <span className="text-lg font-bold">Home</span>
                  </Link>
                </li>
                <li className="transition-transform transform hover:-translate-y-1">
                  <Link to="/about" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-all duration-300 py-3 rounded-lg shadow-black shadow-sm transform">
                    <MdOutlineFoodBank className='w-10 h-10 mr-4' />
                    <span className="text-lg font-bold">About</span>
                  </Link>
                </li>
                <li className="transition-transform transform hover:-translate-y-1">
                  <Link to="/contact" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-all duration-300 py-3 rounded-lg shadow-black shadow-sm transform">
                    <IoMdContact className='w-10 h-10 mr-4' />
                    <span className="text-lg font-bold">Contact</span>
                  </Link>
                </li>
                <li className="transition-transform transform hover:-translate-y-1">
                  <Link to="/menu" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-all duration-300 py-3 rounded-lg shadow-black shadow-sm transform">
                    <MdRestaurantMenu className='w-10 h-10 mr-4' />
                    <span className="text-lg font-bold">Menu</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default Layout;
