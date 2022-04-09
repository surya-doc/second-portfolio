import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div id='skill' className='skills'>
        <div className='w-full text-4xl'><h2>Skills.</h2></div>
        <div className='skill_stor flex justify-start items-center flex-col py-10 sm:block'>
            <div className='abc interests flex justify-start sm:block'>
                <div className="type sm:mx-auto">Interests</div>
                <div className="skill-name flex sm:block sm:py-4">
                    <div className=''>Web</div>
                    <div className=''>Design</div>
                </div>
            </div>
            <div className='abc core flex sm:block'>
                <div className="type sm:mx-auto">Core</div>
                <div className="skill-name flex sm:block sm:py-4">
                    <div className=''>HTML</div>
                    <div className=''>CSS</div>
                    <div className=''>Javascript</div>
                    <div className=''>C++</div>
                </div>
            </div>
            <div className='abc mordernweb flex sm:block'>
                <div className="type sm:mx-auto">Modern Web</div>
                <div className="skill-name flex sm:block sm:py-4">
                    <div className=''>React</div>
                    <div className=''>Redux</div>
                    <div className=''>Mongo DB</div>
                </div>
            </div>
        </div>
        <div className="resume">
            <div className='text-lg' style={{fontFamily: "'Montserrat', sans-serif;"}}>My Resume</div>
                <div className="academics">
                    <a href="sdre.pdf" target="_blank">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className='text-black'>Resume</div>    
                    </a>
                </div>
        </div>
    </div>
  )
}

export default Skills