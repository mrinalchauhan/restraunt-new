import React from 'react';
import { FaRegCircleDot } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";

const Menucard = ({ price, title, veg }) => {
    return (
        <div className="bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-0 shadow-lg rounded-lg px-6 py-4 hover:shadow-2xl hover:border hover:border-gray-400">
            <div className='flex justify-end'>
                {
                    veg && veg ? (
                        <FaRegCircleDot color='green' className="text-xl" />
                    ) : (
                        <FaRegCircleDot className="text-red-600 text-xl" />
                    )
                }
            </div>
            <p className="text-lg text-red-600 font-semibold text-center flex items-center justify-center space-x-4">
                <MdCurrencyRupee className='my-auto ' /> {price}
            </p>
            <p className="text-lg text-white font-semibold text-center">{title}</p>
        </div>
    )
}

export default Menucard
