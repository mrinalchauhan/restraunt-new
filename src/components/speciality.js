// import React from 'react';
// //import backgroundImage from '../img/backgroundImage.jpg';
// import shapeImage from '../img/img5.png';
// import passThroughImage from '../img/img3.png';
// // style={{ backgroundImage: `url(${backgroundImage})` }}
// const SpecialityPage = () => {
//     return (
//         <div className="relative bg-cover h-screen bg-gray-900 bg-center min-h-screen" >
//             <div className="container mx-auto px-4 py-12 md:py-24">
//                 <h1 className="text-4xl md:text-5xl font-bold text-center py-6 md:py-10 text-red-500">Speciality</h1>
//                 <p className="text-center text-lg md:text-xl text-gray-800 mb-8">We provide the best Service and test you remember</p>
//                 <div className="relative">
//                     <div className="absolute inset-0 bg-red-400 z-10" style={{ clipPath: 'polygon(381px 0, 1919px 0, 1938px 958px, 0 958px)' }}>
//                         {/* Content inside the shape */}
//                         <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center relative z-20">
//                             {/* Image 1 */}
//                             <img src={shapeImage} alt="Shape Image" className="w-64 h-auto md:w-1/2 mb-8 md:mb-0" />
//                             {/* Image 2 */}
//                             <img src={passThroughImage} alt="Pass Through Image" className="w-64 h-auto md:w-1/2 md:ml-8" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SpecialityPage;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../img/img1.png';
import image2 from '../img/img1.png';
import image3 from '../img/img1.png';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <>
            {/* Larger view */}
            <div className="hidden md:block">
                <div className="relative bg-gray-900 bg-cover bg-center min-h-screen py-16 md:py-24">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-center py-6 md:py-10 text-red-600">Testimonials</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                            {/* Testimonial 1 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                                <img src={image1} alt="Testimonial 1" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                                <h2 className="text-white font-semibold mt-4 md:mt-6">Suraj Sahu</h2>
                                <p className="text-white px-4 py-2">The best dining experience I've ever had! The food was exquisite, and the ambiance was perfect for a relaxing evening. Highly recommend! </p>
                                <div className="mt-auto flex justify-end pr-4">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                                                        {/* Testimonial 2 */}
                                                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                                <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                                <h2 className="text-white font-semibold mt-4 md:mt-6">Anurag Kumar</h2>
                                <p className="text-white px-4 py-2">Absolutely amazing! From the appetizers to the desserts, every dish was bursting with flavor. The staff was incredibly friendly and attentive. Can't wait to come back! </p>
                                <div className="mt-auto flex justify-end pr-4">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                                                        {/* Testimonial 3 */}
                                                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                                <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                                <h2 className="text-white font-semibold mt-4 md:mt-6">Animesh Pradhan</h2>
                                <p className="text-white px-4 py-2">This restaurant exceeded all my expectations! The chef's creativity shines through in every dish. Exceptional service and a warm, welcoming atmosphere. A must-visit! </p>
                                <div className="mt-auto flex justify-end pr-4">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                                                        {/* Testimonial 4 */}
                                                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                                <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                                <h2 className="text-white font-semibold mt-4 md:mt-6">Ayush Kumar</h2>
                                <p className="text-white px-4 py-2">An unforgettable dining experience! The flavors were rich and authentic, and the presentation was beautiful. The staff made us feel like VIPs. Highly recommend to all food lovers! </p>
                                <div className="mt-auto flex justify-end pr-4">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                                                        {/* Testimonial 5 */}
                                                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                                <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                                <h2 className="text-white font-semibold mt-4 md:mt-6">Anurupam Sinha</h2>
                                <p className="text-white px-4 py-2">A culinary masterpiece! The menu offers a fantastic variety, and every bite was a delight. The ambiance is elegant yet comfortable. Perfect for any occasion. Will definitely be back! </p>
                                <div className="mt-auto flex justify-end pr-4">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                                                        {/* Testimonial 6 */}
                                                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                                <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                                <h2 className="text-white font-semibold mt-4 md:mt-6">Pratik Mahapatra</h2>
                                <p className="text-white px-4 py-2">Simply outstanding! The dishes were both innovative and delicious, with a perfect blend of flavors. The service was impeccable, making it a top-notch dining experience. Highly recommended! </p>
                                <div className="mt-auto flex justify-end pr-4">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                                                                                    {/* Testimonial 7 */}
                                                                                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                                <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                                <h2 className="text-white font-semibold mt-4 md:mt-6">Shivshankar Malla</h2>
                                <p className="text-white px-4 py-2">A dining experience like no other! The food was mouth-watering, and the atmosphere was charming and cozy. The staff went above and beyond to ensure we had a wonderful time. Can't wait to return! </p>
                                <div className="mt-auto flex justify-end pr-4">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial 8 */}
                            <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                                <img src={image3} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                                <h2 className="text-white font-semibold mt-4 md:mt-6">Mrinal Chauhan</h2>
                                <p className="text-white px-4 py-2">A true gem! The cuisine is exceptional, and the atmosphere is cozy and inviting. Perfect spot for a date night or a family dinner. Five stars all the way!</p>
                                <div className="mt-auto flex justify-end pr-4">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile view */}
            <div className="">
                <Slider {...settings}>
                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                        <img src={image1} alt="Testimonial 1" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                        <h2 className="text-white font-semibold mt-4 md:mt-6">Suraj Sahu</h2>
                                <p className="text-white px-4 py-2">The best dining experience I've ever had! The food was exquisite, and the ambiance was perfect for a relaxing evening. Highly recommend! </p>
                        <div className="mt-auto flex justify-end pr-4">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                        <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                        <h2 className="text-white font-semibold mt-4 md:mt-6">Anurag Kumar</h2>
                                <p className="text-white px-4 py-2">Absolutely amazing! From the appetizers to the desserts, every dish was bursting with flavor. The staff was incredibly friendly and attentive. Can't wait to come back! </p>
                        <div className="mt-auto flex justify-end pr-4">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                        <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                        <h2 className="text-white font-semibold mt-4 md:mt-6">Animesh Pradhan</h2>
                        <p className="text-white px-4 py-2">This restaurant exceeded all my expectations! The chef's creativity shines through in every dish. Exceptional service and a warm, welcoming atmosphere. A must-visit! </p>
                        <div className="mt-auto flex justify-end pr-4">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                        <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                        <h2 className="text-white font-semibold mt-4 md:mt-6">Shivshankar Malla</h2>
                                <p className="text-white px-4 py-2">A dining experience like no other! The food was mouth-watering, and the atmosphere was charming and cozy. The staff went above and beyond to ensure we had a wonderful time. Can't wait to return! </p>
                        <div className="mt-auto flex justify-end pr-4">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                </svg>
                            ))}
                        </div>
                    </div>


                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                        <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                        <h2 className="text-white font-semibold mt-4 md:mt-6">Mrinal Chauhan</h2>
                                <p className="text-white px-4 py-2">A true gem! The cuisine is exceptional, and the atmosphere is cozy and inviting. Perfect spot for a date night or a family dinner. Five stars all the way!</p>
                        <div className="mt-auto flex justify-end pr-4">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                </svg>
                            ))}
                        </div>
                    </div>


                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                        <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                        <h2 className="text-white font-semibold mt-4 md:mt-6">Pratik Mahapatra</h2>
                                <p className="text-white px-4 py-2">Simply outstanding! The dishes were both innovative and delicious, with a perfect blend of flavors. The service was impeccable, making it a top-notch dining experience. Highly recommended! </p>
                        <div className="mt-auto flex justify-end pr-4">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                        <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                        <h2 className="text-white font-semibold mt-4 md:mt-6">Anurupam Sinha</h2>
                        <p className="text-white px-4 py-2">A culinary masterpiece! The menu offers a fantastic variety, and every bite was a delight. The ambiance is elegant yet comfortable. Perfect for any occasion. Will definitely be back! </p>
                        <div className="mt-auto flex justify-end pr-4">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                        <img src={image3} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                        <h2 className="text-white font-semibold mt-4 md:mt-6">Ayush Kumar</h2>
                        <p className="text-white px-4 py-2">An unforgettable dining experience! The flavors were rich and authentic, and the presentation was beautiful. The staff made us feel like VIPs. Highly recommend to all food lovers! </p>
                        <div className="mt-auto flex justify-end pr-4">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Testimonial;
