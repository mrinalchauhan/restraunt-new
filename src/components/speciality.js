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
//import backgroundImage from '../img/backgroundImage.jpg';
import image1 from '../img/img5.png';
import image2 from '../img/img3.png';

const SpecialityPage = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-gray-900 z-0"></div>
            {/* Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 py-12 md:py-24">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">Speciality</h1>
                    {/* Subheading */}
                  <p className="text-lg text-center text-white mb-12">We provide the best service and test you remember</p>
      a              {/* Content Background */}
                    <div className="bg-red-800 relative z-10">
                        {/* X-shaped Background */}
                        <div className="absolute top-0 left-0 w-0 h-0 border-r-959 border-b-1918 border-red-600"></div>
                        <div className="absolute bottom-0 right-0 w-0 h-0 border-t-959 border-l-1918 border-red-600"></div>
                        {/* Images */}
                        <div className="flex justify-center">
                            <img src={image1} alt="Image 1" className="w-60 h-auto object-cover mr-4" />
                            <img src={image2} alt="Image 2" className="w-48 h-auto opacity-52 object-cover ml-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialityPage;
