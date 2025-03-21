import React from 'react'
import '../App.css';
import { FaSun, FaMoon, FaUser, FaDownload, FaLaptopCode, FaBook } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaL } from 'react-icons/fa6';

function NavBar(props) {
    return (
        <div className='flex justify-end items-center fixed bg-transparent px-20 mt-7 w-full h-14'>
            <nav className='flex font-bold'>
                <div className='navLinks flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <FaUser className='mr-4' size='xl' />
                        <span>Myself</span>
                    </a>
                </div>
                <div className='navLinks flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='#skillsSection' className='flex items-center justify-center'>
                        <FaLaptopCode className='mr-4' size='xl' />
                        <span>Skills</span>
                    </a>
                </div>
                <div className='navLinks longTxt flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <FaBook className='mr-4' size='xl' />
                        <span>Education</span>
                    </a>
                </div>
                <div className='navLinks longTxt flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <RiContactsBook3Fill className='mr-4' size='xl' />
                        <span>Contacts</span>
                    </a>
                </div>
                <div className='navLinks shortTxt flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <FaDownload className='mr-4' size='xl' />
                        <span>CV</span>
                    </a>
                </div>
            </nav>
            <div className='w-2'>
                <FaSun size='xl' color='#black' cursor='pointer' id='sunIcon' className='hover:text-mono hidden' onClick={() => { toggleIcons(); props.themeMode(); }} />
                <FaMoon size='xl' color='white' cursor='pointer' id='moonIcon' className='hover:text-mono' onClick={() => { toggleIcons(); props.themeMode(); }} />
            </div>
        </div>
    )
}

export default NavBar

const toggleIcons = () => {
    document.getElementById("sunIcon").classList.toggle("hidden");
    document.getElementById("moonIcon").classList.toggle("hidden");
  }