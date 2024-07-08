import React from 'react'

const ComboCard = ({ img, pricing, title }) => {
    return (
        <div className="text-center px-6 items-center">
            <div className="combo-card bg-gradient-to-b from-gray-700 to-gray-800 bg-opacity-80 rounded-lg overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-105">
                <img src={img} alt="Combo 3" className="rounded-full h-56 w-52 object-cover mb-4" />
                <p className="text-lg text-white font-semibold text-center">Rs {pricing}</p>
                <p className="text-lg text-white font-semibold text-center">{title}</p>
            </div>
        </div>
    )
}

export default ComboCard
