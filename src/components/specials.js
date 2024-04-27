// // page for combo offers
// import React from 'react';
// import backgroundImage from '../img/img1.png';
// import image2 from '../img/img2.jpg';
// const SpecialCombos = () => {
//     return (
//         <div className="bg-cover bg-center py-10 " style={{backgroundImage: `url(${backgroundImage})`}}> {/* h-screen removed*/}
//             <div className="flex flex-col items-center">
//                 <h1 className="text-3xl font-bold text-white text-center mb-8">Our Special Combos</h1>
//                 <div className="grid grid-row-2 md:grid-cols-3 gap-8">
//                     {/* Combo 1 */}
//                     <div className="bg-gray-200 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center">
//                         <img src={image2} alt="Combo 1" className="rounded-full h-40 w-40 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold">Combo 1 Description</p>
//                     </div>
//                     {/* Combo 2 */}
//                     <div className="bg-gray-200 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center">
//                         <img src={image2} alt="Combo 2" className="rounded-full h-40 w-40 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold">Combo 2 Description</p>
//                     </div>
//                     {/* Combo 3*/}
//                     <div className="bg-gray-200 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center">
//                         <img src={image2} alt="Combo 1" className="rounded-full h-40 w-40 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold">Combo 1 Description</p>
//                     </div>
//                     {/* Combo 4*/}
//                     <div className="bg-gray-200 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center">
//                         <img src={image2} alt="Combo 1" className="rounded-full h-40 w-40 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold">Combo 1 Description</p>
//                     </div>
//                     {/* Combo 5*/}
//                     <div className="bg-gray-200 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center">
//                         <img src={image2} alt="Combo 1" className="rounded-full h-40 w-40 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold">Combo 1 Description</p>
//                     </div>
//                     {/* Combo 6*/}
//                     <div className="bg-gray-200 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center">
//                         <img src={image2} alt="Combo 1" className="rounded-full h-40 w-40 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold">Combo 1 Description</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SpecialCombos;

// import React from 'react';
// import backgroundImage from '../img/img8.jpg';
// import image2 from '../img/img1.png';

// const SpecialCombos = () => {
//     return (                 
//         <div className="bg-cover bg-center pt-10 opacity-90 bg-gray-900 " style={{backgroundImage: `url(${backgroundImage})`}} >
//             <div className="flex flex-col items-center ">
//                 <h1 className="text-4xl font-bold text-white text-center py-20 mb-8">Our Special <span className='text-red-600'>Combos and Offers !!</span></h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-15 gap-28">
//                     {/* Combo 1 */}
//                     <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
//                         <img src={image2} alt="Combo 1" className="rounded-full h-48 w-48 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold text-center">Rs 250</p>
//                         <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
//                     </div>
//                     {/* Combo 2 */}
//                     <div className="bg-gradient-to-b from-gray-900 to-gray-700 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
//                         <img src={image2} alt="Combo 2" className="rounded-full h-48 w-48 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold text-center">Rs 250</p>
//                         <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
//                     </div>
//                     {/* Combo 3*/}
//                     <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
//                         <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold text-center">Rs 250</p>
//                         <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
//                     </div>
//                     {/* Combo 4*/}
//                     <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
//                         <img src={image2} alt="Combo 4" className="rounded-full h-48 w-48 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold text-center">Rs 250</p>
//                         <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
//                     </div>
//                     {/* Combo 5*/}
//                     <div className="bg-gradient-to-b from-gray-900 to-gray-700 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
//                         <img src={image2} alt="Combo 5" className="rounded-full h-48 w-48 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold text-center">Rs 250</p>
//                         <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
//                     </div>
//                     {/* Combo 6*/}
//                     <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8">
//                         <img src={image2} alt="Combo 6" className="rounded-full h-48 w-48 object-cover mb-4" />
//                         <p className="text-lg text-white font-semibold text-center">Rs 250</p>
//                         <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SpecialCombos;


import React from 'react';
import backgroundImage from '../img/img15.png';
import image2 from '../img/img1.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SpecialCombos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay:true,
        slidesToShow: 1, // Show 1 image at once
        slidesToScroll: 1,
        centerMode: true, // Center the active slide
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Show 1 image at once on mobile
                },
            },
        ],
    };
    return (                 
        <div className="relative bg-cover bg-center pt-10   bg-gray-900" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
            {/* Blue overlay */}
            <div className="absolute inset-0  bg-gray-900 bg-opacity-80 pb-5  "></div>
            
            {/* for larger view   */}
            <div className="hidden md:block">
            <div className="flex flex-col items-center relative z-10">
                <h1 className="text-4xl font-bold text-white text-center py-20 mb-8">Our Special <span className='text-red-600'>Combos and Offers !!</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-15 gap-28">
                    {/* Combo 1 */}
                    <div className="combo-card bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 1" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                    {/* Combo 2 */}
                    <div className="combo-card bg-gradient-to-b from-gray-900 to-gray-700 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 2" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                    {/* Combo 3 */}
                    <div className="combo-card bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                    {/* Combo 4 */}
                    <div className="combo-card bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 4" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                    {/* Combo 5 */}
                    <div className="combo-card bg-gradient-to-b from-gray-900 to-gray-700 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 5" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                    {/* Combo 6 */}
                    <div className="combo-card bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 6" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                </div>
            </div>
            </div>


             {/*for mobile view */}
            <div className="md:hidden">
            <div className="relative bg-cover bg-center pt-10   bg-gray-900" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
            <div className="relative inset-0  bg-gray-900 bg-opacity-80 pb-5  ">
            <h1 className="text-4xl font-bold text-white text-center py-20 mb-8">Our Special <span className='text-red-600'>Combos and Offers !!</span></h1>
                    <Slider {...settings}>
                     
                        <div className="text-center px-6 items-center">
                        <div className="combo-card bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                        </div>
                        <div className="text-center px-6">
                        <div className="combo-card bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                        </div>
                        <div className="text-center px-6">
                        <div className="combo-card bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                        </div>
                    </div>
                        <div className="text-center px-6">
                        <div className="combo-card bg-gradient-to-b from-gray-600 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                        </div>
                        <div className="text-center px-6">
                        <div className="combo-card bg-gradient-to-b from-gray-600 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                        </div>
                        <div className="text-center px-6">
                        <div className="combo-card bg-gradient-to-b from-gray-600 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                        </div>
                        <div className="text-center px-6">
                        <div className="combo-card bg-gradient-to-b from-gray-600 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                        </div>
                        <div className="text-center px-6">
                        <div className="combo-card bg-gradient-to-b from-gray-600 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                        </div>
                        <div className="text-center px-6">
                        <div className="combo-card bg-gradient-to-b from-gray-600 to-gray-900 bg-opacity-0 border rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                        <img src={image2} alt="Combo 3" className="rounded-full h-48 w-48 object-cover mb-4" />
                        <p className="text-lg text-white font-semibold text-center">Rs 250</p>
                        <p className="text-lg text-white font-semibold text-center">Chicken Curry</p>
                    </div>
                        </div>
                    </Slider>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default SpecialCombos;
