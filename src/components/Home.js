import React from 'react';
import image4 from '../img/img2.png'; // Import the image for the left div
import image2 from '../img/img1.png'; // Import the image for the right div
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-900 min-h-screen pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3  md:pt-0">
                {/* Left side div */}
                <div className="relative flex flex-col justify-center items-center md:items-start p-5  lg:p-10">
                    {/* Background image with opacity */}
                    <div className="absolute inset-0 "></div>
                    {/* Text content */}
                    <div className="relative z-10 text-white text-center md:text-left  mb-6 px-5 lg:mb-10">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4  lg:mb-6">Delicious food for</h1>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-4 lg:mb-6">Food lovers</h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 lg:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut mattis lectus. Ut ultrices nunc vel libero.</p>
                    </div>
                    {/* Buttons */}
                    {/* Wrap buttons with Link component and set correct 'to' prop */}
                                <div className='grid grid-cols-2  gap-4'>
                                    <Link to="/menu">
                                    <button className="bg-red-500 text-white py-4 px-8 rounded-full text-xl sm:text-2xl lg:text-xl   hover:bg-red-700 transition duration-300 ease-in-out">View Menu</button>
                                    </Link>
                                    <Link to="/contact">
                                    <button className="bg-blue-500  text-white py-4 px-5 rounded-full text-xl sm:text-2xl lg:text-xl hover:bg-blue-700 transition duration-300 ease-in-out">View location</button>
                                    </Link>
                                </div>
                               
                </div>
                <img src={image4} alt="Background Image 1" className=" hidden md:block absolute bottom-0 left-0 opacity-50" style={{maxWidth: '70%', maxHeight: '50%'}} />
                {/* Right side div */}
                
                <div className="">
                    {/* Big image covering a big space */}
                    <img src={image2} alt="Delicious Food" className="w-full h-full  object-cover" />
                </div>
            </div>
          
        </div>
        
    );
}

export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';


// const Home = () => {
//   return (
//     <div>
//       <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(https://res.cloudinary.com/dmrpovrmd/image/upload/v1711775837/img21_h2emkk.jpg)`,
//         width: "100%", // Adjust the width as needed
//         height: "100%" // Adjust the height as needed
//       }}>
//         {/* Background overlay with opacity */}
//         <div className="  flex flex-col justify-center items-center h-screen">

//           {/* Logo */}
//           <img src='https://res.cloudinary.com/dmrpovrmd/image/upload/v1711775838/logo_q1of0l.jpg' loading='lazy' alt="Love Khati Logo" className="h-24 md:h-25 lg:h-40 rounded-full mb-8" /> {/* Adjust height as needed */}
//           {/* Welcome text */}
//           <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4  text-white font-mono">Welcome to Love Khati</h1>
//           {/* Description text */}
//           <p className="text-lg md:text-3xl font-serif lg:text-xl mb-8 text-center text-white">Savor exquisite flavors that ignite your senses. Come taste the magic at our restaurant today!!!!</p>
//           {/* View Menu button */}
//           <div className='grid grid-cols-2 gap-4'>
//             <Link to="/menu">
//               <button className="bg-red-500 text-white py-4 px-8 rounded-full text-xl sm:text-2xl lg:text-xl hover:bg-red-600 transition duration-300 ease-in-out">View Menu</button>
//             </Link>
//             <Link to="/contact">
//               <button className="bg-blue-500  text-white py-4 px-5 rounded-full text-xl sm:text-2xl lg:text-xl hover:bg-blue-600 transition duration-300 ease-in-out">View location</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* <About />
//       <Contact/>
//       <Menu/> */}
//     </div>

//   );
// };

//  export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//       <div className="flex flex-col items-center">
//           <div className="flex justify-between w-full px-4 py-8">
//               <div className="w-1/2">
//                   <h1 className="text-4xl font-bold">gggggggggggggshhhhhhhhhh hhhhhhhhhhhhh kkkkkkkkkkkk</h1>
//               </div>
//               <div className="w-1/2">

// <img src="https://www.figma.com/file/vWL5FUyCpRtXuHp32veuAz/Love-khati?type=design&node-id=13-439&mode=design&t=sq6PclqhoT5kbNrf-4"
//                  alt="Image" className="w-full h-auto" />
//               </div>
//           </div>
//           <div className="w-full px-4 py-8">
//               <h2 className="text-2xl font-bold">Our Popular Dishes</h2>
//               <div className="flex justify-between mt-4">
//                   <div className="w-1/2 px-2">
//                       <img src="dish_image_url" alt="Dish" className="w-full h-auto" />
//                       <p>Dish description</p>
//                   </div>
//                   <div className="w-1/2 px-2">
//                       <img src="dish_image_url" alt="Dish" className="w-full h-auto" />
//                       <p>Dish description</p>
//                   </div>
//               </div>
//               <div className="mt-8">
//                   <h3 className="text-xl font-bold">Another Section</h3>
//                   <p>Text for another section</p>
//               </div>
//           </div>
//           <div className="w-full px-4 py-8">
//               <h2 className="text-2xl font-bold">Our Gallery</h2>
//               <div className="flex flex-wrap mt-4">
//                   <div className="w-1/3 px-2">
//                       <img src="gallery_image_url" alt="Gallery" className="w-full h-auto" />
//                   </div>
//                   {/* Repeat this div for all 9 images */}
//               </div>
//           </div>
//       </div>
//   );
// };

// export default Home;
