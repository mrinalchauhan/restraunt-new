
import React, { Suspense, lazy } from 'react';
import { CiPhone, CiMail } from "react-icons/ci";
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

const MapLocation = lazy(() => import('../../section/contact/location'));

const Contact = () => {
    useSmoothScroll();

    return (

        <div className="bg-cover bg-center min-h-screen p-0 md:pt-8 bg-gray-900"  >

            <div className="flex flex-col gap-4 justify-center items-center min-h-screen p-4"> {/* Increased height */}
                <div className="text-white font-bold text-center mb-1 md:mb-10"> {/* Adjusted margin class */}
                    <h1 className="text-xl md:text-5xl font-serif">Uncover our location for an exceptional dining experience!</h1>
                </div>


                <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>

                    <div className="w-full h-86 md:h-full">

                        <Suspense fallback={<div>Loading map...</div>}>
                            <MapLocation />
                        </Suspense>
                    </div>

                    <div className="w-full h-66 md:h-full bg-black rounded-md opacity-75"> {/* Increased height */}
                        {/* Contact Information */}
                        <div className="mx-auto p-4">
                            <div className='space-y-4 text-white'>

                                <h2 className="text-xl md:text-3xl text-amber-400 font-semibold">Dig into our tasty and wholesome meals, whether you're dining in or grabbing takeaway!!</h2>
                                <p className="text-lg md:text-xl">Address: Plot No 777, <br /> Near ITER College Road, Panchasakha Nagar, Jagmohan Nagar, Bhubaneshwar,Odisha 751030,India</p>
                                <p className="text-lg md:text-xl flex"><CiPhone className='my-auto mr-2' /> +916371093700</p>
                                <p className="text-lg md:text-xl flex"><CiMail className='my-auto mr-2' /> lovekhati2020@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;


