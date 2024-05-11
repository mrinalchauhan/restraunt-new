import React, { useState } from 'react';
import image1 from '../../../img/gallery/img01.jpg';
import image2 from '../../../img/gallery/img02.jpg';
import image3 from '../../../img/gallery/img03.jpg';
import image4 from '../../../img/gallery/img04.jpg';
import image5 from '../../../img/gallery/img01.jpg';
import image6 from '../../../img/gallery/img05.jpg';
import image7 from '../../../img/gallery/img06.jpg';
import image8 from '../../../img/gallery/img07.jpg';
import image9 from '../../../img/gallery/img08.jpg';

const GallerySection = () => {

    const [showMore, setShoweMore] = useState(false);

    const handleShoweMore = () => {
        setShoweMore(!showMore);
    }

    return (
        <div className="bg-cover bg-gray-900 bg-center min-h-screen overflow-hidden">
            <div className="container mx-auto px-5 py-12 md:py-24">
                <h1 className="text-4xl pt-12 md:text-5xl font-bold text-white text-center mb-12">Our <span className="text-red-600">Gallery</span></h1>

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col justify-between">
                        <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        {
                            showMore && (
                                <>
                                    <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                    <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                </>
                            )
                        }
                    </div>

                    <div className="flex flex-col justify-between">
                        <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />

                        {
                            showMore && (
                                <>
                                    <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                    <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                </>
                            )
                        }

                    </div>
                    <div className="flex flex-col justify-between">
                        <img src={image7} alt="Image 7" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        {
                            showMore && (
                                <>
                                    <img src={image8} alt="Image 8" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                    <img src={image9} alt="Image 9" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                </>
                            )
                        }
                    </div>

                </div>
                {
                    showMore ? (
                        <div className=' flex items-center justify-center'>
                            <button className='text-white shadow-xl border rounded-md border-gray-600 w-2/3 py-4' onClick={handleShoweMore}>
                                Show Less
                            </button>
                        </div>
                    ) : (
                        <div className=' flex items-center justify-center'>
                            <button className='text-white shadow-xl border rounded-md border-gray-600 w-2/3 py-4' onClick={handleShoweMore}>
                                Show More
                            </button>
                        </div>

                    )
                }
            </div>
        </div>
    );
}

export default GallerySection;
