
// // //Layout-> navigation
// // import React from 'react';
// // import { Outlet, Link } from "react-router-dom";
// // //import image1 from '../img/logo.jpg';
// // import { FaHome } from "react-icons/fa";
// // import { MdOutlineFoodBank } from "react-icons/md";
// // import { IoMdContact } from "react-icons/io";
// // import { MdRestaurantMenu } from "react-icons/md";

// // const Layout = () => {
// //   return (
// //     <div className="h-screen relative">
// //       <div className="absolute inset-x-0 top-0 z-10 bg-opacity-50 bg-black">
// //         <div className="container mx-auto flex justify-center  px-8 py-5">

// //           <ul className="flex justify-center space-x-4 lg:justify-end lg:space-x-10">
// //             <li>
// //               <Link to="/" className="text-white font-bold text-lg flex hover:text-gray-300 active:text-gray-500"><FaHome className='my-auto mx-1' /> Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/about" className="text-white font-bold text-lg flex hover:text-gray-300 active:text-gray-500"><MdOutlineFoodBank className='my-auto mx-1' />About</Link>
// //             </li>
// //             <li>
// //               <Link to="/contact" className="text-white font-bold text-lg flex hover:text-gray-300 active:text-gray-500 "><IoMdContact className='my-auto mx-1' />Contact</Link>
// //             </li>
// //             <li>
// //               <Link to="/menu" className="text-white font-bold text-lg flex hover:text-gray-300 active:text-gray-500"><MdRestaurantMenu className='my-auto mx-1' />Menu</Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //       <div className="h-full relative">
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Layout;

// //Layout-> navigation
// import React from 'react';
// import { Outlet, Link } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
// import { MdOutlineFoodBank } from "react-icons/md";
// import { IoMdContact } from "react-icons/io";
// import { MdRestaurantMenu } from "react-icons/md";
// import SpecialCombos from './specials';
// import Testimonial from './Testimonial';
// import Gallery from './Gallery';
// import SpecialityPage from './speciality';
// import Menu from './Menu';
// import Menuu from './menu2';
// const Layout = () => {
//   return (
//     <div>
//     <div className="h-screen relative">
//       {/* Navbar */}
//       <div className="absolute inset-x-0 top-0 z-10 bg-opacity-50 bg-black">
//         <div className="container mx-auto flex justify-between items-center px-8 py-3">
//           {/* Logo */}
//           <div>
//             <img
//               src='https://res.cloudinary.com/dmrpovrmd/image/upload/v1711775838/logo_q1of0l.jpg'
//               loading='lazy'
//               alt="Love Khati Logo"
//               className="h-12 md:h-16 rounded-full"
//             />
//           </div>
//           {/* Navigation Items */}
//           <ul className="flex justify-center space-x-4 lg:space-x-10">
//             <li>
//               <Link to="/" className="text-white font-bold text-sm md:text-lg flex hover:text-gray-300 active:text-gray-500"><FaHome className='my-auto mx-1' /> Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-white font-bold text-sm md:text-lg flex hover:text-gray-300 active:text-gray-500"><MdOutlineFoodBank className='my-auto mx-1' />About</Link>
//             </li>
//             <li>
//               <Link to="/menu" className="text-white font-bold text-sm md:text-lg flex hover:text-gray-300 active:text-gray-500"><MdRestaurantMenu className='my-auto mx-1' />Menu</Link>
//             </li>
//           </ul>
//           {/* Contact Button */}
//           <div>
//             <Link to="/contact" className="text-white font-bold text-sm md:text-lg flex hover:text-gray-300 active:text-gray-500 bg-red-500 px-3 py-1 rounded-full"><IoMdContact className='my-auto mx-1' />Contact</Link>
//           </div>
//         </div>
//       </div>
   
//       <div className="h-full relative">
//         <Outlet />
       
//       </div>
      
//     </div>
       
//     <SpecialCombos/>
//     <Gallery/>
//     <Testimonial/>
//     <SpecialityPage/>
//     <Menu/>
//     <Menuu/>

//     </div>
//   );
// };

// export default Layout;
import React from 'react';
import { Outlet, Link, Routes, Route } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import SpecialCombos from './specials';
import Testimonial from './Testimonial';
import Gallery from './Gallery';
import SpecialityPage from './speciality';
import Menu from './Menu';
import Menuu from './menu2';
import About from './About'; // Import your About component here
import Contact from './Contact'; // Import your Contact component here

const Home = () => (
  <>
    <SpecialCombos/>
    <Gallery/>
    <Testimonial/>
    {/* <SpecialityPage/> */}
    <Menuu/>
    
  </>
);

const Layout = () => {
  return (
    <div>
      <div className="h-screen relative">
        {/* Navbar */}
        <div className="absolute inset-x-0 top-0 z-10 bg-opacity-50">
          <div className="container mx-auto flex justify-between items-center  py-3">
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
         
        </div>
        
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </div>
  );
};

export default Layout;
