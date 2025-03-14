import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDownload, faLaptopCode, faBook, faContactCard, faAt } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

function NavBar(props) {
    return (
        <div className='flex justify-end items-center absolute top-5 right-0 bg-transparent px-20 w-fit h-14'>
            <nav className='flex font-bold'>
                <div className='navLinks flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <FontAwesomeIcon className='mr-4' size='xl' icon={faUser} />
                        <span>Myself</span>
                    </a>
                </div>
                <div className='navLinks longTxt flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <FontAwesomeIcon className='mr-4' size='xl' icon={faBook} />
                        <span>Education</span>
                    </a>
                </div>
                <div className='navLinks flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <FontAwesomeIcon className='mr-4' size='xl' icon={faLaptopCode} />
                        <span>Skills</span>
                    </a>
                </div>
                <div className='navLinks longTxt flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <FontAwesomeIcon className='mr-4' size='xl' icon={faContactCard} />
                        <span>Contacts</span>
                    </a>
                </div>
                <div className='navLinks shortTxt flex items-center justify-start overflow-hidden mx-3 cursor-pointer' >
                    <a href='' className='flex items-center justify-center'>
                        <FontAwesomeIcon className='mr-4' size='xl' icon={faDownload} />
                        <span>CV</span>
                    </a>
                </div>
            </nav>
            <div className='w-2'>
                <FontAwesomeIcon icon={faSun} size='xl' color='#black' cursor='pointer' id='sunIcon' className='hover:text-mono hidden' onClick={() => { toggleIcons(); props.themeMode(); }} />
                <FontAwesomeIcon icon={faMoon} size='xl' color='white' cursor='pointer' id='moonIcon' className='hover:text-mono' onClick={() => { toggleIcons(); props.themeMode(); }} />
            </div>
        </div>
    )
}

export default NavBar

const toggleIcons = () => {
    document.getElementById("sunIcon").classList.toggle("hidden");
    document.getElementById("moonIcon").classList.toggle("hidden");
  }