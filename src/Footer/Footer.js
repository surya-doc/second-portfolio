import React from 'react';
import Contact from '../Contact/Contact';
import './Footer.css';

function Footer() {
  return (
    <div id='contact' className='footer'>
        <Contact />
        <div className='flex justify-between mx-64 md:block lg:mx-16'>
            <div className='text-left lg:w-1/3 md:m-auto md:mb-8 sm:w-full sm:text-center'>
                <div className='font-semibold'>No <i class="fa fa-copyright"></i> coppyright issues.</div>
                <div className='md:text-center'>Made with <i class="fa fa-heart" style={{color: "red"}}></i></div>
            </div>
            <div className='lg:w-1/3 md:m-auto md:mb-8 sm:w-full'>
                <img className='sm:mx-auto' style={{width: "200px"}} src="./second-portfolio/Surya_Dana_b1.png" alt="" />
            </div>
            <div className='flex lg:w-1/3 md:m-auto sm:w-full sm:flex sm:items-center'>
                <div className='sm:text-center sm:w-full'>
                    <div className='ml-8' style={{textAlign: "center"}}>You can find me here.</div>
                    <div className="socil_1 md:w-full lg:flex sm:justify-center sm:ml-4">
                        <a className='bs social mt-1' href='https://www.linkedin.com/in/surya-dana-4787271b1/'><i class="fa fa-linkedin m-0 abs"></i></a>
                        <a className='bs social mt-1' href='https://github.com/surya-doc'><i class="fa fa-github abs"></i></a>
                        <a className='bs social mt-1' href='https://twitter.com/SuryaDa20408831'><i class="fa fa-twitter abs"></i></a>
                        <a className='bs social mt-1' href='mailto:suryadanabnk@gmail.com'><i class="fa fa-envelope abs"></i></a>
                    </div>
                </div>
                <div className='relative sm:hidden'> <img src="./second-portfolio/arrow.png" alt=""  style={{width: "80px"}} /></div>
            </div>
        </div>
        <div className='footer-img'>
            <img className='mx-auto' src="./second-portfolio/foot.png" alt="" />
        </div>
    </div>
  )
}

export default Footer