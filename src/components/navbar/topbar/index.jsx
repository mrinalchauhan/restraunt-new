import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { FaGift } from 'react-icons/fa';
const TopBar = () => {
    return (
        <div className="fixed z-50 inset-x-0 top-0 bg-gray-800 bg-opacity-65">
            <div className="py-1 mx-auto flex justify-between items-center px-2">
                {/* Logo */}
                <div className="ml-4" >
                    <img
                        src='https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/Love_Khati-removebg-preview.png?alt=media&token=18fd9138-314f-45a9-b8b8-fef3359f4f57'
                        loading='lazy'
                        alt="Love Khati Logo"
                        className="h-12 md:h-16 rounded"
                    />
                </div>
                {/* Navigation Items */}
                <ul className="flex justify-center space-x-3 lg:space-x-10">
                    <li>
                        <Link to="/" className="text-white font-bold text-sm text-md flex md:text-lg hover:text-red-400 active:text-red-400"><FaHome className='my-auto mx-1' /> Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white font-bold text-sm  md:text-lg flex hover:text-red-400 active:text-red-400"><MdOutlineFoodBank className='my-auto mx-1' />About</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="text-white font-bold text-sm md:text-lg flex hover:text-red-400 active:text-red-400"><MdRestaurantMenu className='my-auto mx-1' />Menu</Link>
                    </li>
                    <li>
                        <Link to="/offer" className="text-white font-bold text-sm md:text-lg flex hover:text-red-400 active:text-red-400"><FaGift className='my-auto mx-1' />Offer</Link>
                    </li>
                </ul>
                <div>
                    <Link to="/contact" className="text-white font-bold text-sm md:text-lg flex hover:text-white active:text-gray-500 bg-red-500 px-3 py-1 rounded-full"><IoMdContact className='my-auto mx-1' />Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar
