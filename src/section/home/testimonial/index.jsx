import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/swiper-bundle.min.css';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/bundle'; // Import Swiper bundle styles (if you're using Swiper bundle)
import 'swiper/css/navigation';
import image4 from '../../../img/img11.jpg'

const suraj = 'https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/surajsahu.jpg?alt=media&token=49154adc-8642-48b4-addf-7febebc7a16b';
const anurag = 'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2Fanurag_kumar.webp?alt=media&token=f6085285-b723-4368-9be5-575ad884d7aa';
const shiv = 'https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/shiv.jpg?alt=media&token=3f826fb1-1f1a-4882-b527-44a5f3942d49';
const pratik = 'https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/pratik.jpg?alt=media&token=bccaaeee-6113-4dad-8c30-2fc1c7d2a75b';
const mrinal = 'https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/team%2Fmrinal.webp?alt=media&token=07aa2b92-12a2-4e07-be77-6d0cf87a582e';
const ayush = 'https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/ayushjisa.jpg?alt=media&token=fb466aa4-baf3-4d78-9408-7d5cb5f3260e';
const animesh = 'https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/animesh.jpg?alt=media&token=be7661d9-268a-49d8-ad2f-409b255ef3ed';
const anurupam = 'https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/anurupam.jpg?alt=media&token=9ec6f268-3b97-4f58-b03f-9ad06d0212ac';

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
                            <img src={suraj} alt="Testimonial 1" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Suraj Sahu</h2>
                            <p className="text-white px-4 py-2"> The best dining experience I've ever had! The food was exquisite, and the ambiance was perfect for a relaxing evening. Highly recommend!</p>
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
                            <img src={anurag} alt="Testimonial 2" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-10 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Anurag Kumar</h2>
                            <p className="text-white px-4 py-2">Absolutely amazing! From the appetizers to the desserts, every dish was bursting with flavor. The staff was incredibly friendly and attentive. Can't wait to come back!</p>
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
                            <img src={mrinal} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
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
                    </SwiperSlide>
                    {/* Add more Testimonial Slides as needed */}
                    <SwiperSlide>
                        <div className="border-white border-1.5 hover:border-transparent hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                            <img src={animesh} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Animesh Pradhan</h2>
                            <p className="text-white px-4 py-2">This restaurant exceeded all my expectations! The chef's creativity shines through in every dish. Exceptional service and a warm, welcoming atmosphere. A must-visit!</p>
                            <div className="mt-auto flex justify-end pr-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="border-white border-1.5 hover:border-transparent hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                            <img src={ayush} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Ayush Kumar</h2>
                            <p className="text-white px-4 py-2">An unforgettable dining experience! The flavors were rich and authentic, and the presentation was beautiful. The staff made us feel like VIPs. Highly recommend to all food lovers!</p>
                            <div className="mt-auto flex justify-end pr-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="border-white border-1.5 hover:border-transparent hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                            <img src={anurupam} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Anurupam Sinha</h2>
                            <p className="text-white px-4 py-2">A culinary masterpiece! The menu offers a fantastic variety, and every bite was a delight. The ambiance is elegant yet comfortable. Perfect for any occasion. Will definitely be back!</p>
                            <div className="mt-auto flex justify-end pr-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="border-white border-1.5 hover:border-transparent hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                            <img src={pratik} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Pratik Mahapatra</h2>
                            <p className="text-white px-4 py-2">Simply outstanding! The dishes were both innovative and delicious, with a perfect blend of flavors. The service was impeccable, making it a top-notch dining experience. Highly recommended!</p>
                            <div className="mt-auto flex justify-end pr-4">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 0a.75.75 0 0 1 .59.29l2.98 3.9 4.85.65a.75.75 0 0 1 .41 1.28l-3.5 3.4.83 4.86a.75.75 0 0 1-1.09.79L10 14.35l-4.36 2.3a.75.75 0 0 1-1.09-.79l.83-4.86-3.5-3.4a.75.75 0 0 1 .41-1.28l4.85-.65L9.41.29A.75.75 0 0 1 10 0zm0 2.5L8.55 5.44a.75.75 0 0 1-.56.42l-3.57.48 2.58 2.51c.18.18.26.44.22.7l-.61 3.61 3.2-1.68c.18-.09.39-.09.57 0l3.2 1.68-.61-3.61a.75.75 0 0 1 .22-.7l2.58-2.51-3.57-.48a.75.75 0 0 1-.56-.42L10 2.5z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="border-white border-1.5 hover:border-transparent hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-600 to-gray-950 rounded-lg overflow-hidden flex flex-col items-center py-8 md:py-10 text-center shadow-md">
                            <img src={shiv} alt="Testimonial 3" className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover mt-4 md:mt-6" />
                            <h2 className="text-white font-semibold mt-4 md:mt-6">Shivshankar Malla</h2>
                            <p className="text-white px-4 py-2">A dining experience like no other! The food was mouth-watering, and the atmosphere was charming and cozy. The staff went above and beyond to ensure we had a wonderful time. Can't wait to return!</p>
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
