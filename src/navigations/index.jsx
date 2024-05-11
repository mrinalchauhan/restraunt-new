import React from 'react';
import { Routes, Route } from 'react-router-dom';
import navigation from './navigation.js';

const Navigate = () => {
    return (
        <Routes>
            {
                navigation.map((data, index) => {
                    return (
                        <Route key={index} path={data.path} element={data.element} />
                    )
                })
            }
            <Route />
        </Routes>
    )
}

export default Navigate
