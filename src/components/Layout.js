
// // // //Layout-> navigation
// // // import React from 'react';
// // // import { Outlet, Link } from "react-router-dom";
// // // //import image1 from '../img/logo.jpg';
// // // import { FaHome } from "react-icons/fa";
// // // import { MdOutlineFoodBank } from "react-icons/md";
// // // import { IoMdContact } from "react-icons/io";
// // // import { MdRestaurantMenu } from "react-icons/md";

// // // const Layout = () => {
// // //   return (
// // //     <div className="h-screen relative">
// // //       <div className="absolute inset-x-0 top-0 z-10 bg-opacity-50 bg-black">
// // //         <div className="container mx-auto flex justify-center  px-8 py-5">

// // //           <ul className="flex justify-center space-x-4 lg:justify-end lg:space-x-10">
// // //             <li>
// // //               <Link to="/" className="text-white font-bold text-lg flex hover:text-gray-300 active:text-gray-500"><FaHome className='my-auto mx-1' /> Home</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/about" className="text-white font-bold text-lg flex hover:text-gray-300 active:text-gray-500"><MdOutlineFoodBank className='my-auto mx-1' />About</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/contact" className="text-white font-bold text-lg flex hover:text-gray-300 active:text-gray-500 "><IoMdContact className='my-auto mx-1' />Contact</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/menu" className="text-white font-bold text-lg flex hover:text-gray-300 active:text-gray-500"><MdRestaurantMenu className='my-auto mx-1' />Menu</Link>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </div>
// // //       <div className="h-full relative">
// // //         <Outlet />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Layout;

// // //Layout-> navigation
// // import React from 'react';
// // import { Outlet, Link } from "react-router-dom";
// // import { FaHome } from "react-icons/fa";
// // import { MdOutlineFoodBank } from "react-icons/md";
// // import { IoMdContact } from "react-icons/io";
// // import { MdRestaurantMenu } from "react-icons/md";
// // import SpecialCombos from './specials';
// // import Testimonial from './Testimonial';
// // import Gallery from './Gallery';
// // import SpecialityPage from './speciality';
// // import Menu from './Menu';
// // import Menuu from './menu2';
// // const Layout = () => {
// //   return (
// //     <div>
// //     <div className="h-screen relative">
// //       {/* Navbar */}
// //       <div className="absolute inset-x-0 top-0 z-10 bg-opacity-50 bg-black">
// //         <div className="container mx-auto flex justify-between items-center px-8 py-3">
// //           {/* Logo */}
// //           <div>
// //             <img
// //               src='https://res.cloudinary.com/dmrpovrmd/image/upload/v1711775838/logo_q1of0l.jpg'
// //               loading='lazy'
// //               alt="Love Khati Logo"
// //               className="h-12 md:h-16 rounded-full"
// //             />
// //           </div>
// //           {/* Navigation Items */}
// //           <ul className="flex justify-center space-x-4 lg:space-x-10">
// //             <li>
// //               <Link to="/" className="text-white font-bold text-sm md:text-lg flex hover:text-gray-300 active:text-gray-500"><FaHome className='my-auto mx-1' /> Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/about" className="text-white font-bold text-sm md:text-lg flex hover:text-gray-300 active:text-gray-500"><MdOutlineFoodBank className='my-auto mx-1' />About</Link>
// //             </li>
// //             <li>
// //               <Link to="/menu" className="text-white font-bold text-sm md:text-lg flex hover:text-gray-300 active:text-gray-500"><MdRestaurantMenu className='my-auto mx-1' />Menu</Link>
// //             </li>
// //           </ul>
// //           {/* Contact Button */}
// //           <div>
// //             <Link to="/contact" className="text-white font-bold text-sm md:text-lg flex hover:text-gray-300 active:text-gray-500 bg-red-500 px-3 py-1 rounded-full"><IoMdContact className='my-auto mx-1' />Contact</Link>
// //           </div>
// //         </div>
// //       </div>
   
// //       <div className="h-full relative">
// //         <Outlet />
       
// //       </div>
      
// //     </div>
       
// //     <SpecialCombos/>
// //     <Gallery/>
// //     <Testimonial/>
// //     <SpecialityPage/>
// //     <Menu/>
// //     <Menuu/>

// //     </div>
// //   );
// // };

// // export default Layout;
import { useState } from 'react';
import { Outlet, Link, Routes, Route } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

import SpecialCombos from './specials';
import Testimonial from './Testimonial';
import Gallery from './Gallery';
import SpecialityPage from './speciality';
import Menu from './Menu';
import Menuu from './menu2';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => (
  <>
    <SpecialCombos/>
    <Gallery/>
    <Testimonial/>
    <Footer/>
  </>
);

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="h-screen  relative">
        {/* Hamburger Menu for Mobile */}
      <div className="absolute lg:hidden top-0 right-0 z-50 p-4">
        <button className="text-gray-50" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="w-16 h-16" />
          ) : (
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
    {/* Regular Navigation for Desktop */}
        {/* Navbar */}
        <div className=" hidden lg:block absolute inset-x-0 top-0 z-10 bg-opacity-50">
          <div className="container mx-auto flex justify-between items-center py-3">
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
                <Link to="/" className="text-white font-bold text-sm text-md flex md:text-lg flex hover:text-red-400 active:text-red-400"><FaHome className='my-auto mx-1' /> Home</Link>
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
     
        <div className="h-full relative">
          <Outlet />
          <Footer/>
        </div>
        
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* Hamburger Menu Content for Mobile */}
      {isOpen && (
        <div className="lg:block-hidden  fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-40">
          <div className="container mx-auto pt-20">
            <ul className="flex flex-col space-y-4">
              <li className="transition-transform transform hover:-translate-y-1">
                <Link to="/" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-black shadow-sm transform hover:scale-105">
                  <FaHome className='w-10 h-10 mr-4' />
                  <span className="text-lg font-bold">Home</span>
                </Link>
              </li>
              <li className="transition-transform transform hover:-translate-y-1">
                <Link to="/about" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-black shadow-sm transform hover:scale-105">
                  <MdOutlineFoodBank className='w-10 h-10 mr-4' />
                  <span className="text-lg font-bold">About</span>
                </Link>
              </li>
              <li className="transition-transform transform hover:-translate-y-1">
                <Link to="/contact" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-black shadow-sm transform hover:scale-105">
                  <IoMdContact className='w-10 h-10 mr-4' />
                  <span className="text-lg font-bold">Contact</span>
                </Link>
              </li>
              <li className="transition-transform transform hover:-translate-y-1">
                <Link to="/menu" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-black shadow-sm transform hover:scale-105">
                  <MdRestaurantMenu className='w-10 h-10 mr-4' />
                  <span className="text-lg font-bold">Menu</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;




// import React, { useState } from 'react';
// import { Outlet, Link ,Routes, Route } from "react-router-dom";
// import { FaHome, FaQrcode, FaTimes } from "react-icons/fa";
// import { MdOutlineFoodBank } from "react-icons/md";
// import { IoMdContact } from "react-icons/io";
// import { MdRestaurantMenu } from "react-icons/md";

// import SpecialCombos from './specials';
// import Testimonial from './Testimonial';
// import Gallery from './Gallery';
// import SpecialityPage from './speciality';
// import Menu from './Menu';
// import Menuu from './menu2';
// import About from './About'; // Import your About component here
// import Contact from './Contact'; // Import your Contact component here
// import Footer from './Footer';

// const Layout = () => {


//   const Home = () => (
//       <>
//         <SpecialCombos/>
//         <Gallery/>
//         <Testimonial/>
//         {/* <SpecialityPage/> */}
//         <Footer/>
//         </>
//   );

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
// <div>
//     <div className="h-screen relative">
//       {/* Hamburger Menu for Mobile */}
//       <div className="absolute lg:hidden top-0 right-0 z-50 p-4">
//         <button className="text-gray-50" onClick={toggleMenu}>
//           {isOpen ? (
//             <FaTimes className="w-16 h-16" />
//           ) : (
//             <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Regular Navigation for Desktop */}
//       <div className="absolute hidden lg:block inset-x-0 top-0 z-10 bg-opacity-50 bg-black">
//         <div className="container mx-auto flex justify-center px-8 py-5">   
//           <ul className="flex justify-center space-x-1 lg:justify-end lg:space-x-10">
//             <li>
//               <Link to="/" className="text-white font-bold text-md flex hover:text-red-500 active:text-red-500 transition-colors duration-300" onClick={closeMenu}><FaHome className='my-auto mx-1' /> Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-white font-bold text-md flex hover:text-red-500 active:text-red-500 transition-colors duration-300" onClick={closeMenu}><MdOutlineFoodBank className='my-auto mx-1' />About</Link>
//             </li>
//             <li>
//               <Link to="/contact" className="text-white font-bold text-md flex hover:text-red-500 active:text-red-500 transition-colors duration-300" onClick={closeMenu}><IoMdContact className='my-auto mx-1' />Contact</Link>
//             </li>
//             <li>
//               <Link to="/menu" className="text-white font-bold text-md flex hover:text-red-500 active:text-red-500 transition-colors duration-300" onClick={closeMenu}><MdRestaurantMenu className='my-auto mx-1' />Menu</Link>
//             </li>
//             <li>
//               <Link to="/myOffer" className="text-white font-bold text-md flex hover:text-red-500 active:text-red-500 transition-colors duration-300" onClick={closeMenu}><FaQrcode className='my-auto mx-1' />Offer</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Hamburger Menu Content for Mobile */}
//       {isOpen && (
//   <div className="lg:hidden fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-40">
//     <div className="container mx-auto pt-20">
//       <ul className="flex flex-col space-y-4">
//         <li className="transition-transform transform hover:-translate-y-1">
//           <Link to="/" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-black shadow-sm transform hover:scale-105">
//             <FaHome className='w-10 h-10 mr-4' />
//             <span className="text-lg font-bold">Home</span>
//           </Link>
//         </li>
//         <li className="transition-transform transform hover:-translate-y-1">
//           <Link to="/about" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-black shadow-sm transform hover:scale-105">
//             <MdOutlineFoodBank className='w-10 h-10 mr-4' />
//             <span className="text-lg font-bold">About</span>
//           </Link>
//         </li>
//         <li className="transition-transform transform hover:-translate-y-1">
//           <Link to="/contact" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-black shadow-sm transform hover:scale-105">
//             <IoMdContact className='w-10 h-10 mr-4' />
//             <span className="text-lg font-bold">Contact</span>
//           </Link>
//         </li>
//         <li className="transition-transform transform hover:-translate-y-1">
//           <Link to="/menu" className="text-white flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors duration-300 py-3 px-6 rounded-lg shadow-black shadow-sm transform hover:scale-105">
//             <MdRestaurantMenu className='w-10 h-10 mr-4' />
//             <span className="text-lg font-bold">Menu</span>
//           </Link>
//         </li>
        
//       </ul>
//     </div>
//     <Routes>
//          <Route exact path="/" element={<Home />} />
//          {/* <Route path="/about" element={<About />} />
//          <Route path="/menu" element={<Menu />} />
//          <Route path="/contact" element={<Contact />} /> */}
//        </Routes>
//   </div>
// )}



      
//     <div className="h-full relative">
//         <Outlet />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Layout;
