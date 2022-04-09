import React, { useState } from 'react'

function SmallHeader() {
    const[txt, setTxt] = useState();
    const[show, setShow] = useState(false);
  
  return (
    <div>
        <div className={`mob-nav sm-hd flex-col ${show ? 'down' : 'up'}`}>
            <div className='ele-div' style={{display: show ? "block" : "none"}}>
                <div><a id='#about' href="#about" className={txt === 'about' ? 'border about_1' : 'about_1'} onClick={() => setTxt('about')}>About</a></div>
                <div><a id='#study' href="#study" className={txt === 'study' ? 'border study_1' : 'study_1'} onClick={() => setTxt('study')}>Study</a></div>
                <div><a id='#skill' href="#skill" className={txt === 'skill' ? 'border skill_1' : 'skill_1'} onClick={() => setTxt('skill')}>Skill</a></div>
                <div><a id='#project' href="#project" className={txt === 'project' ? 'border project_1' : 'project_1'} onClick={() => setTxt('project')}>Project</a></div>
                <div><a id='#contact' href="#contact" className={txt === 'contact' ? 'border contact_1' : 'contact_1'} onClick={() => setTxt('contact')}>Contact</a></div>
            </div>
        </div>
        <div className='ham-berger' onClick={() => setShow(!show)}>
        <i class="fa fa-2x fa-bars m-0"></i>
        </div>
    </div>
  )
}

export default SmallHeader