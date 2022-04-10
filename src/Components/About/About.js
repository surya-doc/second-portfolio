import React from 'react';
import './About.css';
import me from './me.jpg';

function About() {
  return (
    <div id='about'>
      <div className='about_sec flex lg:flex-col lg:my-auto'>
          <div className='me'>
              <img className='mx-auto' src={me} alt="" />
              <div className="socil">
              <a className='social' href='https://www.linkedin.com/in/surya-dana-4787271b1/'><i class="fa fa-linkedin"></i></a>
              <a className='social' href='https://github.com/surya-doc'><i class="fa fa-github"></i></a>
              <a className='social' href='https://twitter.com/SuryaDa20408831'><i class="fa fa-twitter"></i></a>
              <a className='social' href='mailto:suryadanabnk@gmail.com'><i class="fa fa-envelope"></i></a>
              </div>
              <div className="academics sm:hidden">
                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div>Academics</div>    
                </a>
              </div>
              <div className="sm-academics hidden sm:block">
                <a href="#">
                  Academics
                </a>
              </div>
          </div>
          <div className='about-text lg:text-center'>
            <h2>About Myself.</h2>
            <p>Hi I'm Surya Dana, a 21 year old Web developer from West-bengal, India. I'm an Information Technology student who loves to solve problems.<br></br><br></br>
              Have a look at my skills or just connect with me on Linkedin. I'm always excited to be with like minded people, lets start the conversation.</p>
          </div>
      </div>
    </div>
  )
}

export default About