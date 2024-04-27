// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// //import backgroundImage from '../img/img4.jpg';
// import image1 from '../img/gallery/img01.jpg';
// import image2 from '../img/gallery/img02.jpg';
// import image3 from '../img/gallery/img03.jpg';
// import image4 from '../img/gallery/img04.jpg';
// import image5 from '../img/gallery/img01.jpg';
// import image6 from '../img/gallery/img05.jpg';
// import image7 from '../img/gallery/img06.jpg';
// import image8 from '../img/gallery/img07.jpg';
// import image9 from '../img/gallery/img08.jpg';


// const Gallery = () => {

//     const settings = {
//                 dots: true,
//                 infinite: true,
//                 speed: 500,
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             };

//     return (
//         <div className="bg-cover bg-gray-900 bg-center min-h-screen" >
//             <div className="container mx-auto px-4 py-12 md:py-24">
//                 <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our <span className="text-red-600">Gallery</span></h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">




//                    {/* For mobile view, render the slider */}
//                      <div className="md:hidden">
//                           <Slider {...settings}>
//                               <div>
//                                    <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                                 <div>
//                                     <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                                 <div>
//                                     <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                                 <div>
//                                     <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                                 <div>
//                                     <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                                 <div>
//                                     <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                                 <div>
//                                     <img src={image7} alt="Image 7" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                                 <div>
//                                     <img src={image8} alt="Image 8" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                                 <div>
//                                     <img src={image9} alt="Image 9" className="w-full h-auto rounded-lg mb-4" />
//                                 </div>
//                             </Slider>
//                         </div>
                

//                 {/* for destop view */}
//                     {/* First Row */}

//                 <div className=''>
//                     <div className="flex flex-col justify-between">
//                         <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-4" />
//                     </div>
//                     {/* Second Row */}
//                      <div className="flex flex-col justify-between">
//                          <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-4" />
//                          <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-4" />
//                          <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-4" />
//                      </div>
//                      {/* Third Row */}
//                     <div className="flex flex-col justify-between">
//                         <img src={image7} alt="Image 4" className="w-full h-auto rounded-lg mb-4" />
//                          <img src={image8} alt="Image 5" className="w-full h-auto rounded-lg mb-4" />
//                          <img src={image9} alt="Image 6" className="w-full h-auto rounded-lg mb-4" />
//                      </div>
//                    </div>
//                 </div>   
//                </div>
//              </div>
//          );
//      }

//  export default Gallery;


//     import React from 'react';
//     import Slider from 'react-slick';
//     import 'slick-carousel/slick/slick.css';
//     import 'slick-carousel/slick/slick-theme.css';
//     import image1 from '../img/gallery/img01.jpg';
//     import image2 from '../img/gallery/img02.jpg';
//     import image3 from '../img/gallery/img03.jpg';
// import image4 from '../img/gallery/img04.jpg';
// import image5 from '../img/gallery/img01.jpg';
// import image6 from '../img/gallery/img05.jpg';
// import image7 from '../img/gallery/img06.jpg';
// import image8 from '../img/gallery/img07.jpg';
// import image9 from '../img/gallery/img08.jpg';

// const Gallery = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     return (
//         <div className="bg-cover bg-gray-900 bg-center min-h-screen">
//             <div className="container mx-auto px-4 py-12 md:py-24">
//                 <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our <span className="text-red-600">Gallery</span></h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="md:hidden">
//                         <Slider {...settings}>
//                             <div>
//                                 <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image7} alt="Image 7" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image8} alt="Image 8" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image9} alt="Image 9" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                         </Slider>
//                     </div>
//                     {/* Display images in grid for larger screens */}
//                     <div className="hidden md:flex flex-col justify-between">
//                         <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image7} alt="Image 7" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image8} alt="Image 8" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image9} alt="Image 9" className="w-full h-auto rounded-lg mb-4" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Gallery;





// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import image1 from '../img/gallery/img01.jpg';
// import image2 from '../img/gallery/img02.jpg';
// import image3 from '../img/gallery/img03.jpg';
// import image4 from '../img/gallery/img04.jpg';
// import image5 from '../img/gallery/img01.jpg';
// import image6 from '../img/gallery/img05.jpg';
// import image7 from '../img/gallery/img06.jpg';
// import image8 from '../img/gallery/img07.jpg';
// import image9 from '../img/gallery/img08.jpg';

// const Gallery = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     return (
//         <div className="bg-cover bg-gray-900 bg-center min-h-screen">
//             <div className="container mx-auto px-4 py-12 md:py-24">
//                 <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our <span className="text-red-600">Gallery</span></h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {/* For mobile view, render the slider */}
//                     <div className="md:hidden">
//                         <Slider {...settings}>
//                             <div>
//                                 <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image7} alt="Image 7" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image8} alt="Image 8" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                             <div>
//                                 <img src={image9} alt="Image 9" className="w-full h-auto rounded-lg mb-4" />
//                             </div>
//                         </Slider>
//                     </div>
//                     {/* For larger screens, render the grid */}
//                     <div className="hidden md:grid md:grid-cols-3 md:gap-6">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {/* First Row */}
//                     <div className="flex flex-col justify-between">
//                         <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-4" />
//                     </div>
//                     {/* Second Row */}
//                     <div className="flex flex-col justify-between">
//                         <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-4" />
//                     </div>
//                     {/* Third Row */}
//                     <div className="flex flex-col justify-between">
//                         <img src={image7} alt="Image 4" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image8} alt="Image 5" className="w-full h-auto rounded-lg mb-4" />
//                         <img src={image9} alt="Image 6" className="w-full h-auto rounded-lg mb-4" />
//                     </div>
//                 </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Gallery;


// imp 



// try imp

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import image1 from '../img/gallery/img01.jpg';
// import image2 from '../img/gallery/img02.jpg';
// import image3 from '../img/gallery/img03.jpg';
// import image4 from '../img/gallery/img04.jpg';
// import image5 from '../img/gallery/img01.jpg';
// import image6 from '../img/gallery/img05.jpg';
// import image7 from '../img/gallery/img06.jpg';
// import image8 from '../img/gallery/img07.jpg';
// import image9 from '../img/gallery/img08.jpg';

// const Gallery = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1, // Show 1 image at once
//         slidesToScroll: 1,
//         centerMode: true, // Center the active slide
//         centerPadding: '0px',
//         responsive: [
//             {
//                 breakpoint: 768, // Mobile breakpoint
//                 settings: {
//                     slidesToShow: 1, // Show 1 image at once on mobile
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="bg-cover bg-gray-900 bg-center min-h-screen">
//             <div className="container mx-auto px-4 py-12 md:py-24">
//                 <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our <span className="text-red-600">Gallery</span></h1>
//                 <div className="md:hidden ">
//                     <Slider {...settings}>
//                         <div className="text-center items-center">
//                             <img src={image1} alt="Image 1" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <div className="text-center">
//                             <img src={image2} alt="Image 2" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <div className="text-center">
//                             <img src={image3} alt="Image 3" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <div className="text-center">
//                             <img src={image4} alt="Image 4" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <div className="text-center">
//                             <img src={image5} alt="Image 5" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <div className="text-center">
//                             <img src={image6} alt="Image 6" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <div className="text-center">
//                             <img src={image7} alt="Image 7" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <div className="text-center">
//                             <img src={image8} alt="Image 8" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                         <div className="text-center">
//                             <img src={image9} alt="Image 9" className="inline-block w-68 rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
//                         </div>
//                     </Slider>
//                 </div>
//                 <div className="hidden md:block">
//                     {/* Display images in a grid on larger screens */}
//                     <div className="grid grid-cols-3 gap-4">
//                         {/* Render images here */}
//                         <div className="flex flex-col justify-between">
//                          <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300 " />
//                          <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300" />
//                          <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300" />
//                      </div>
//                      {/* Second Row */}
//                       <div className="flex flex-col justify-between">
//                           <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300" />
//                           <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300" />
//                           <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300" />
//                       </div>
//                       {/* Third Row */}
//                      <div className="flex flex-col justify-between">
//                          <img src={image7} alt="Image 4" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300" />
//                           <img src={image8} alt="Image 5" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300" />
//                           <img src={image9} alt="Image 6" className="w-full h-auto rounded-lg mb-7 hover:scale-110 transition-transform duration-300" />
//                       </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
        
//     );
// }

// export default Gallery;


// important


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../img/gallery/img01.jpg';
import image2 from '../img/gallery/img02.jpg';
import image3 from '../img/gallery/img03.jpg';
import image4 from '../img/gallery/img04.jpg';
import image5 from '../img/gallery/img01.jpg';
import image6 from '../img/gallery/img05.jpg';
import image7 from '../img/gallery/img06.jpg';
import image8 from '../img/gallery/img07.jpg';
import image9 from '../img/gallery/img08.jpg';

const Gallery = () => {
   
    const settings = {
        dots: true, // Disable default dots
        line: true, // Enable line dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true, // Enable autoplay
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-cover bg-gray-900 bg-center min-h-screen overflow-hidden">
            <div className="container mx-auto px-5 py-12 md:py-24">
                <h1 className="text-4xl pt-12 md:text-5xl font-bold text-white text-center mb-12">Our <span className="text-red-600">Gallery</span></h1>
                
                {/* mobile view */}
                <div className="md:hidden text-white px-5"> {/* Added padding x in the content */}
                    <Slider {...settings} className="slick-dots relative text-white">
                        <div className="text-center pt-14 items-center">
                            <img src={image1} alt="Image 1" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                            <img src={image2} alt="Image 2" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                            <img src={image3} alt="Image 3" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                            <img src={image4} alt="Image 4" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                            <img src={image5} alt="Image 5" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                            <img src={image6} alt="Image 6" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                            <img src={image7} alt="Image 7" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                            <img src={image8} alt="Image 8" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-center">
                            <img src={image9} alt="Image 9" className="inline-block w-68 rounded-lg mb-4 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                    </Slider>
                </div>
                {/*   larger view     */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col justify-between">
                            <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                            <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                            <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                            <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                            <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <img src={image7} alt="Image 7" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                            <img src={image8} alt="Image 8" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                            <img src={image9} alt="Image 9" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
