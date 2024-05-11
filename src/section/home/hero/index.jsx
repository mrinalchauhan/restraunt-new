import React from 'react';
import { Link } from 'react-router-dom';

import image4 from '../../../img/img2.png';
import image2 from '../../../img/img1.png';

const HomeHeroSection = () => {

    return (
        <React.Fragment>
            <section className="grid grid-cols-1 md:grid-cols-2 bg-gray-900 min-h-screen gap-3  md:pt-0">

                <aside className="relative flex flex-col justify-center items-center md:items-start p-5  lg:p-10">
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
                    <div className='grid grid-cols-2 gap-4 z-10'>
                        <Link to="/menu">
                            <button className="bg-red-500 shadow-xl text-white py-4 px-8 rounded-xl text-xl sm:text-2xl lg:text-xl   hover:bg-red-900 bg-opacity-60 transition duration-300 ease-in-out">
                                View Menu
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="bg-blue-500 shadow-xl text-white py-4 px-8 rounded-xl text-xl sm:text-2xl lg:text-xl   hover:bg-blue-900 bg-opacity-60  transition duration-300 ease-in-out">View location</button>
                        </Link>
                    </div>

                </aside>
                <img src={image4} alt="Love Kathi" className=" hidden md:block absolute bottom-0 left-0 opacity-50" style={{ maxWidth: '70%', maxHeight: '50%' }} />

                <aside className='flex items-center pt-0 md:pt-8'>
                    <img src={image2} alt="Delicious Food" className="w-full h-full object-cover" style={{ animation: 'rotation 20s infinite linear' }} />
                </aside>
            </section>
            <style>
                {`
                @keyframes rotation {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(-360deg);
                  }
                }
              `}
            </style>
        </React.Fragment>
    )
}

export default HomeHeroSection;
