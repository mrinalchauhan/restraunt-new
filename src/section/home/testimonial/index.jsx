import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/swiper-bundle.min.css';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/bundle'; // Import Swiper bundle styles (if you're using Swiper bundle)
import 'swiper/css/navigation';
import image1 from '../../../img/img1.png';
import image2 from '../../../img/img1.png';
import image3 from '../../../img/img1.png';
import image4 from '../../../img/img11.png';

const TestimonialSection = () => {
    return (
        <div className="relative bg-gray-900 bg-cover bg-center min-h-screen py-16 md:py-24">
            <img src={image4} alt="Background Image 1" className="absolute top-0 right-0 opacity-10" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center py-6 md:py-10 text-red-600">Testimonials</h1>
                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={3}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {/* Testimonial 1 */}
                    <SwiperSlide>
                        <div className="border-white border-1.5 hover:border-transparent hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                            <img src={image1} alt="Testimonial 1" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Name 3</h2>
                            <p className="text-white px-4 py-2"> consectetur adipiscing elit. Sed gravida, tortor non scelerisque bibendum, tortor non scelerisque bibendum, tortor non scelerisque bibendum, </p>
                            <div className="mt-auto flex justify-end pr-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Testimonial 2 */}
                    <SwiperSlide>
                        <div className="border-white border-1.5 hover:border-transparent hover:scale-110 transition-transform duration-200 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center text-center py-8 md:py-10 shadow-md mt-9">
                            <img src={image2} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Name 1</h2>
                            <p className="text-white px-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, tortor non scelerisque bibendum, tortor non scelerisque bibendum, tortor non scelerisque bibendum, </p>
                            <div className="mt-auto flex justify-end pr-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Testimonial 3 */}
                    <SwiperSlide>
                        <div className="border-white border-1.5 hover:border-transparent hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                            <img src={image3} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Name 2</h2>
                            <p className="text-white px-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, tortor non scelerisque bibendum, tortor non scelerisque bibendum, tortor non scelerisque bibendum, </p>
                            <div className="mt-auto flex justify-end pr-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more Testimonial Slides as needed */}
                    <SwiperSlide>
                        <div className="hover:border-transparent hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                            <img src={image3} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Name 4</h2>
                            <p className="text-white px-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, tortor non scelerisque bibendum, tortor non scelerisque bibendum, tortor non scelerisque bibendum, </p>
                            <div className="mt-auto flex justify-end pr-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default TestimonialSection;
