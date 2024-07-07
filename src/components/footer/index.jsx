import React from 'react';
import { Link } from 'react-router-dom';
import { SiZomato, SiSwiggy } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" text-white">
            <section className="bg-red-950 py-10 px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Column 1 */}
                <aside>
                    <div className="flex items-center space-x-4">
                        <img
                            src='https://res.cloudinary.com/dmrpovrmd/image/upload/v1711775838/logo_q1of0l.jpg'
                            loading='lazy'
                            alt="Love Khati Logo"
                            className="h-10 md:h-14 rounded-md"
                        />
                        <h3 className="font-bold text-4xl">Love khati</h3>
                    </div>
                    <div className='mt-4'>
                        <p>Experience culinary delight at our restaurant. Indulge in exquisite flavors and enjoy our inviting ambiance. Every visit promises memorable dishes and elevated taste. Come dine with us!</p>
                    </div>
                </aside>

                {/* Column 2 */}
                <aside>
                    <h3 className="font-bold text-2xl">Location</h3>
                    <p>Love Khati, Plot No 777, near ITER College Road, Jagmohan Nagar</p>
                    <p>Bhubaneswar, Odisha, 751030</p>
                    <Link to='https://www.google.com/maps?sca_esv=0f377be67df6cd70&sca_upv=1&sxsrf=ADLYWIIxnngiwtXgZgvGC_Pg6gNQKywryA:1720336745568&lsig=AB86z5UH9kzFFHi3yoxZneb18oHt&kgs=b0a880a6cc679ed3&shndl=-1&shem=lsde,lsp&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KQHOM93mpxk6Me0-89LqyDam&daddr=Love+Khati,+Plot+No+777,+near+ITER+College+Road,+Jagmohan+Nagar,+Bhubaneswar,+Odisha+751030'>
                        <button className='flex items-center shadow-xl bg-red-600 bg-opacity-30 px-6 rounded-md py-4'>
                            <FaMapMarkedAlt className='my-auto mr-2' /> Locate On Map
                        </button>
                    </Link>
                </aside>

                {/* Column 3 */}
                <aside>
                    <h3 className="font-bold text-2xl">Contact</h3>
                    <div className="flex item-center space-x-3">
                        <FaPhoneAlt className='my-auto' />
                        <p>9853967400</p>
                    </div>
                    <div className="flex item-center space-x-3">
                        <IoRestaurantOutline className='my-auto' />
                        <p>Opening Hours: 9 AM - 10 PM</p>
                    </div>
                    <div className='my-3 flex items-center space-x-4'>
                        <p className='font-semibold'>We Are Also On</p>
                        <div className="space-x-2">
                            <Link to='https://www.zomato.com/bhubaneswar/love-khati-jagmohan-nagar-bhubaneshwar'>
                                <button className='rounded-lg px-4 py-2 shadow-2xl bg-opacity-10 border border-red-800 bg-red-700 hover:bg-red-500 duration-300 transition-all'>
                                    <SiZomato className='text-4xl' />
                                </button>
                            </Link>
                            <Link to='https://www.swiggy.com/restaurants/i-love-khati-khandagiri-jagamara-bhubaneswar-301925'>
                                <button className='rounded-lg px-4 py-2 shadow-2xl bg-opacity-10 border border-red-800 bg-red-700 hover:bg-red-500 duration-300 transition-all'>
                                    <SiSwiggy className='text-4xl' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </aside>
            </section>
            <section className='bg-red-900 text-center py-4'>
                <p>Develop And Design by <Link to='https://www.brandladder.co.in/' className='text-blue-300 hover:text-blue-950 transition-all duration-200'>Brandladder Pvt Ltd</Link> </p>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ffull-logo.png?alt=media&token=5a963339-c8d7-42f1-9b21-fc29358196e6"
                    alt="Brandladder Pvt Ltd"
                    className='w-2/5 md:w-1/5 mx-auto bg-red-950 bg-opacity-30 block px-4 py-2'
                />
            </section>
        </footer>
    );
};

export default Footer;
