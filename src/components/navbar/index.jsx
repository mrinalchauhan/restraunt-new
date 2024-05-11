import React from 'react';
import TopBar from './topbar';
import SideBar from './sidebar'

const Navbar = () => {
    return (
        <header className='fixed top-0 z-50'>
            <nav className='hidden lg:block'>
                <TopBar />
            </nav>
            <nav className='block lg:hidden'>
                <SideBar />
            </nav>
        </header>
    )
}

export default Navbar
