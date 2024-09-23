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
            <div className="container flex flex-row items-center py-8 justify-between px-8 lg:px-0 mx-auto">
                <Link href="/" className="flex justify-start items-start text-white text-base font-medium">
                    Vertio
                </Link>
                <div className="flex flex-row space-x-2">
                    <Link href="/" className=" text-white hidden sm:flex justify-center h-0 px-6 py-5 items-center flex-row duration-300 transition-all">
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
            <div className={`w-full mx-auto border-b shadow-sm absolute bg-blue-100 py-10 duration-300 transition-all transform ${isSearchOpen ? '' : 'hidden'}`}>
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
        </header>
    )
}

export default Navigation