'use client'

import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='w-[99.9%] fixed min-h-24 border-b-[1px] border-[#FAF9F6] top-0 flex border-opacity-0'>
                <div className='flex items-center justify-between w-full px-8 '>
                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-8 ml-auto'>
                        <a href='#' className='text-lg font-semibold hover:underline'>
                            App
                        </a>
                        <a href='#' className='text-lg font-semibold hover:underline'>
                            Products
                        </a>
                        <a href='#' className='text-lg font-semibold hover:underline'>
                            Pricing
                        </a>
                        <a href='#' className='text-lg font-semibold bg-[#FAF9F6] text-black px-4 py-2 rounded hover:bg-opacity-80'>
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='flex items-center space-x-8 ml-auto md:hidden'>
                        <button
                            className='bg-[#000000] text-lg text-[#FAF9F6] p-3 font-semibold hover:underline'
                            onClick={toggleMenu}
                        >
                            Menu
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10 md:hidden'>
                    <div className='bg-black w-full h-full p-8'>
                        <button className='absolute top-2 right-4 text-white' onClick={toggleMenu}>
                            Close
                        </button>
                        <a href='#' className='block my-4 text-lg font-semibold hover:underline'>
                            App
                        </a>
                        <a href='#' className='block my-4 text-lg font-semibold hover:underline'>
                            Products
                        </a>
                        <a href='#' className='block my-4 text-lg font-semibold hover:underline'>
                            Pricing
                        </a>
                        <a href='#' className='block my-4 text-lg font-semibold bg-[#FAF9F6] text-black px-4 py-2 rounded hover:bg-opacity-80'>
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
