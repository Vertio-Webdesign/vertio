"use client"

import Link from "next/link";
import React from "react";
import { IoIosMenu, IoMdClose, IoMdLogIn } from "react-icons/io";
import { MdOutlineSearch, MdSearch } from "react-icons/md";


type NavigationProps = {
    menu: any;
}

export type Props = NavigationProps

export const Navigation = ({ menu }: Props) => {
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const handleSearchToggle = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      setIsSearchOpen(!isSearchOpen);
    };
  
    const handleMenuToggle = () => {
      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
      setIsSearchOpen(false);
    };

    return(
        <header className="w-full flex-col mx-auto bg-blue-700">
            <div className="container flex flex-row items-center py-5 justify-between px-8 lg:px-0 mx-auto">
                <Link href="/" className="flex justify-start items-start text-white font-bold text-base">
                    Vertio
                </Link>
                <div className="flex flex-row space-x-2">
                    <Link href="/" className="flex text-white justify-center h-0 px-6 py-5 items-center flex-row duration-300 transition-all">
                        <span className="flex text-sm md:text-base items-center space-x-1"><IoMdLogIn className="mr-2"/>Login</span>
                    </Link>
                <div onClick={handleSearchToggle} className="flex border border-white text-white min-w-fit min-h-fit h-0 px-6 py-5 justify-center rounded-full hover:bg-blue-500 duration-300 ">
                    <div className="flex justify-center items-center">
                        <span className="flex text-sm md:text-base items-center space-x-1"><MdOutlineSearch className="mr-2"/>Søk</span>
                    </div>
                </div>
                <div onClick={handleMenuToggle} className="flex border border-white text-white min-w-fit min-h-fit h-0 px-6 py-5 justify-center rounded-full hover:bg-blue-500 duration-300 ">
                    <div className="flex justify-center items-center">
                    {isMenuOpen ? <IoMdClose className="mr-2 items-center text-lg justify-center flex mx-auto" /> : <IoIosMenu className="mr-2 items-center text-lg justify-center flex mx-auto" />}Meny
                    </div>
                </div>
                </div>
            </div>
            <div className={`w-full mx-auto border-b  absolute bg-blue-300 z-30 py-10 duration-300 transition-all transform ${isSearchOpen ? '' : 'hidden'}`}>
                <div className="container flex items-center justify-center mx-auto">
                    <form method="get">
                        <div className="w-full max-w-[500px] items-center rounded-full h-12 border border-blue-700 flex bg-white overflow-hidden">
                            <MdSearch className='mx-2 text-blue-700'/>
                            <input placeholder="Søk..." className="bg-inherit border-none outline-none" />
                            <button type="submit" className="h-full bg-blue-700 p-4 flex justify-center items-center text-white">
                                Søk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="meny-container" className={`w-full mx-auto border-b absolute bg-blue-300 z-30 py-10 duration-300 transition-all transform ${isMenuOpen ? '' : 'hidden'}`}>
                <ul className="container grid grid-cols-1 px-4 lg:grid-cols-3 items-start md:px-0 text-base justify-between w-full mx-auto">
                    <li className='flex justify-start items-start order-3 lg:order-1 flex-col space-y-4'>
                            <a id="meny-button" href="/" className="flex justify-center items-center text-black font-bold">
                                    <span className='flex text-lg items-center justify-center'>Hjem &rarr;</span>
                                </a>
                    </li>
                    <li className='flex justify-start items-start flex-col space-y-4 order-3 lg:order-2'>
                        <a id="meny-button" href="/" className="flex justify-center items-center text-black">
                            <span className="flex text-lg items-center justify-center">Blog &rarr;</span>
                        </a>
                    </li>   
                    <li className='order-1 lg:order-3 flex items-start justify-start pb-4 flex-col w-full space-y-4'>
                            <a href="/" className="flex border border-blue-700 bg-blue-700 text-white w-full md:max-w-fit min-h-fit h-0 px-8 md:px-12 py-7 justify-between items-center rounded-full hover:bg-white hover:text-black duration-300 ">
                                <span className='flex justify-between items-center w-full text-base'>
                                    <span className='flex items-center justify-center'>Ta kontakt</span>
                                    &rarr;
                                </span>
                            </a>
                        <a href="/" className="flex border border-blue-700 bg-blue-700 text-white w-full md:max-w-fit min-h-fit h-0 px-8 md:px-12 py-7 justify-between items-center rounded-full hover:bg-white hover:text-black duration-300 ">
                            <span className='flex justify-between items-center w-full text-base'>
                                <span className="flex text-sm md:text-base items-center space-x-1">Login<IoMdLogIn className="ml-2"/></span>
                            </span>
                        </a>
                    </li>   
                </ul>
            </div>
        </header>
    )
}

export default Navigation