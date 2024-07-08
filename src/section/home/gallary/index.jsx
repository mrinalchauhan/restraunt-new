import React, { useState } from 'react';
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery1.jpg?alt=media&token=af5febc8-2356-4345-8fc9-277626f91788" alt="Image 1" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        {
                            showMore && (
                                <>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery2.jpg?alt=media&token=e1a3138c-7ec6-4cec-98f7-1000b5d15aea" alt="Image 2" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery3.jpg?alt=media&token=bc50be5e-95be-4fdc-98f8-80cdaed56edc" alt="Image 3" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                </>
                            )
                        }
                    </div>

                    <div className="flex flex-col justify-between">
                        <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery4.jpg?alt=media&token=ed5d95d0-5c8e-44a3-aff0-b8b1967fdb43" alt="Image 4" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />

                        {
                            showMore && (
                                <>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery5.jpg?alt=media&token=e8cd2b75-b980-41c8-bb95-59b8727cb3e6" alt="Image 5" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery6.jpg?alt=media&token=5e08b941-8459-4453-9b24-8ab427b8662f" alt="Image 6" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                </>
                            )
                        }

                    </div>
                    <div className="flex flex-col justify-between">
                        <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery7.jpg?alt=media&token=d23b3eb5-ee30-4f78-8f00-e77300d378f4" alt="Image 7" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                        {
                            showMore && (
                                <>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery8.jpg?alt=media&token=29040549-8c07-4664-bfe0-e58f989a36b8" alt="Image 8" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/client-project%2Flove-kathi%2Fgallery9.jpg?alt=media&token=6393b1ca-2d88-4570-b8f5-b7e57fa38789" alt="Image 9" className="w-full h-auto rounded-lg mb-7 border border-white hover:border-transparent hover:scale-110 transition-transform duration-300" />
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
