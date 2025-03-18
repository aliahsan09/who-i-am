import React, { useState, useEffect, useRef } from 'react'
import '../App.css'

const skills = [
    "JAVA", "JavaScript", "C++", "C#", "PHP", "HTML5", "CSS3", "React.js",
    "Tailwind CSS", "Bootstrap", "MySQL", "Git & GitHub",
    "Object-Oriented Programming", "Functional Programming",
    "Problem Solving", "Team Collaboration", "Time Management",
    "Adaptability", "Communication Skills", "Leadership"
];


function Skills() {

    // code for the blob animation on cursor movement
    const [position, setPosition] = useState({ x: -250, y: -250 });
    const containerRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 10;

        setPosition({ x, y });
    };
    const handleMouseLeave = (e) => { setPosition({ x: -250, y: -250 }) }

    // code for showing skill cards permanently after animation
    const afterAnimate = (event) => {
        event.target.classList.remove("opacity-0");
    };

    return (
        <div id='skillsSection' className="w-full h-dvh py-14 pb-20">
            <h1 className='font-poppins text-7xl text-center font-bold mb-10'>My Skills</h1>
            <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
                className="py-4 px-20 relative flex flex-wrap justify-around text-lg font-semibold transition-all ease-in-out duration-150 overflow-hidden">
                <div
                    className="blob absolute -z-10 w-36 h-36 rounded-full bg-mono backdrop-blur-3xl bg-opacity-25 transition-transform duration-150 ease-out"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                    }}
                ></div>
                {skills.map((skill, index) => (
                    <div 
                        onAnimationEnd={afterAnimate}
                        key={index}
                        className="punchAnimate m-6 mx-6 z-0 p-5 w-48 h-24 flex items-center justify-center opacity-0 text-center cursor-pointer border rounded-xl bg-gray-400 bg-opacity-10 backdrop-blur-md"
                        style={{ animationDelay: `${index * 100}ms` }} // Adding delay based on index
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills
