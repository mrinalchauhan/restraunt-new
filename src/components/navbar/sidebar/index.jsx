import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { FaGift } from 'react-icons/fa';

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    }

    return (
        <div className='flex w-screen justify-between items-center bg-gray-900 py-3 shadow-2xl px-4'>
            <div className='flex items-center space-x-2 ml-3'>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/lovekhati-982c6.appspot.com/o/Love_Khati-removebg-preview.png?alt=media&token=18fd9138-314f-45a9-b8b8-fef3359f4f57"
                    loading='lazy'
                    alt="Love Kathi"
                    className="h-12 md:h-16 rounded contrast-200 brightness-200" />
            </div>
            <button
                className='bg-gray-700 bg-opacity-60 p-2 rounded-full text-xl'
                onClick={toggleDropdown}
            >
                <IoMenuOutline className='text-white' />
            </button>
            {isDropdownOpen && (
                <div className="absolute top-12 right-4 rounded-md shadow-2xl border border-gray-700 w-3/5 bg-gray-900 bg-opacity-80 p-2">
                    {/* Dropdown content goes here */}
                    <ul className='space-y-4 px-2'>
                        <li>
                            <Link onClick={closeDropdown} to="/" className="text-white space-x-2 font-bold text-sm text-md flex md:text-lg hover:text-red-400 active:text-red-400"><FaHome className='my-auto' /><span>Home</span> </Link>
                        </li>
                        <li>
                            <Link onClick={closeDropdown} to="/about" className="text-white space-x-2 font-bold text-sm  md:text-lg flex hover:text-red-400 active:text-red-400"><MdOutlineFoodBank className='my-auto' /><span>About</span></Link>
                        </li>
                        <li>
                            <Link onClick={closeDropdown} to="/menu" className="text-white space-x-2 font-bold text-sm md:text-lg flex hover:text-red-400 active:text-red-400"><MdRestaurantMenu className='my-auto' /><span>Menu</span></Link>
                        </li>
                        <li>
                            <Link onClick={closeDropdown} to="/contact" className="text-white space-x-2 font-bold text-sm md:text-lg flex hover:text-red-400 active:text-red-400"><MdRestaurantMenu className='my-auto' /><span>Contact</span></Link>
                        </li>
                        <li>
                            <Link onClick={closeDropdown} to="/offer" className="text-white space-x-2 font-bold text-sm md:text-lg flex hover:text-red-400 active:text-red-400"><FaGift className='my-auto' /><span>Offer</span></Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
