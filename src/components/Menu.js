// Menu.js

import React from 'react';
import ExcelComponent from '../utils/ExcelComponent';

const Menu = () => {
    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl text-white font-bold mb-4">Our Menu</h1>
                <ExcelComponent />
            </div>
        </div>
    );
};

export default Menu;
