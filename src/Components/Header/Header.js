import React, { useState } from 'react';
import './Header.css';

function Header() {
  const[txt, setTxt] = useState();  return (
    <div>
      <div className='header'>
          <div><a href="#about" className={txt === 'about' ? 'borde' : ''} onClick={() => setTxt('about')}>About</a></div>
          <div><a href="#study" className={txt === 'study' ? 'borde' : ''} onClick={() => setTxt('study')}>Study</a></div>
          <div><a href="#skill" className={txt === 'skill' ? 'borde' : ''} onClick={() => setTxt('skill')}>Skill</a></div>
          <div><a href="#project" className={txt === 'project' ? 'borde' : ''} onClick={() => setTxt('project')}>Project</a></div>
          <div><a href="#contact" className={txt === 'contact' ? 'borde' : ''} onClick={() => setTxt('contact')}>Contact</a></div>
      </div>
    </div>
  )
}

export default Header