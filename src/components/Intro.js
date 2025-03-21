import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebookF, faLinkedin, faInstagram } from "react-icons/fa6";
import profilepic from '../assets/profile-pic.webp';

function Intro() {

  const line = ["I Code Cool ", "I Love ", "I Develop "];
  const lineWord = ["Websites", "Programming", "Softwares"];

  const [typingLine, setTypingLine] = useState(line[0]);
  const [mainWord, setmainWord] = useState(lineWord[0]);

  const userLoad = () => {
    let x = 1
    console.log("event function");
    setInterval(() => {
      console.log("interval function");
      setTypingLine(line[x]);
      setmainWord(lineWord[x]);
      x == 2 ? x = 0 : x++;
    }, 3400);
  };

  return (
    <div id='userSection' onLoad={userLoad} className='h-dvh flex flex-wrap'>
      <div className='w-full h-4/5 pl-14 pb-14 flex items-end justify-start'>
        <img src={profilepic} alt="Profile Picture" loading='lazy' className='w-7/12 hover:rotate-z30' />
        <div className=' h-fit font-roboto -ml-20 mb-12 text-2xl '>
          <p>Hello, I’m <span className='text-mono'><strong>Ali Ahsan</strong></span>,<br />A Software Engineer Based in Pakistan.</p>
        </div>
      </div>

      <div className='w-full h-1/5 pb-5 flex'>
        <div className='w-2/12 h-full p-7 font-roboto'>
          E: aliahsann15@gmail.com <br />
          T: +92 323 1199074
        </div>

        <div className='w-9/12 h-full text-8xl font-poppins font-semibold'>
          <p className='typewriter-line -mt-6 overflow-hidden whitespace-nowrap leading-relaxed'>
            {typingLine} <span className='text-mono'>{mainWord}</span>
          </p>
        </div>

        <div className='w-1/12 h-fit fixed place-self-end z-50 right-0 bottom-0'>
          <FontAwesomeIcon id='socialIcons-main' onClick={toggleIcons} className='mr-4 p-2 z-20 rounded-full bg-mono text-black cursor-pointer absolute bottom-16 right-12' size='xl' icon={faAt} />
          <a href="https://github.com/aliahsan09" target='_blank'>
            <FontAwesomeIcon id='gitLink' className='socialIcons hideIcons mr-4 p-2 z-10 rounded-full cursor-pointer hover:text-mono absolute bottom-44 right-10' size='xl' icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/ali-ahsan-71501231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
            <FontAwesomeIcon id='LinkedInLink' className='socialIcons hideIcons mr-3 p-2 z-10 rounded-full cursor-pointer hover:text-mono absolute bottom-40 right-28' size='xl' icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com/share/1Fmz8Y1DKk/" target='_blank'>
            <FontAwesomeIcon id='fbLink' className='socialIcons hideIcons mr-3 p-2 z-10 rounded-full cursor-pointer hover:text-mono absolute bottom-28 right-40' size='xl' icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/aliahsann15?igsh=dncydXlkMmpzcDkz" target='_blank'>
            <FontAwesomeIcon id='InstaLink' className='socialIcons hideIcons mr-3 p-2 z-10 rounded-full cursor-pointer hover:text-mono absolute bottom-10 right-40' size='xl' icon={faInstagram} />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Intro

const toggleIcons = () => {
  const ele = document.getElementsByClassName("socialIcons");
  for (let x = 0; x < ele.length; x++) {
    ele[x].classList.toggle("hideIcons");
  }
}