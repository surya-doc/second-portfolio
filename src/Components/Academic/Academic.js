import React from 'react';
import './Academic.css';

function Academic() {
  return (
    <div id='study' className="ac_pa">
            <div className='academic lg:pb-8 sm:hidden'>
                <div className='school' style={{zIndex: "888"}}>
                    <div className="card">
                        <div className="content">
                            <img className='mx-auto' style={{width: "80px", height: "70px"}} src="./second-portfolio/school.png" alt="" />
                            <div style={{display: "flex", justifyContent: "center", width: "100%"}}><h3>School</h3></div>
                            <p>
                            I have passed my 10th from J.G.M.G.S.V with 94.1% marks and have my 12th from Bankura Banga Vidyalay sequring 90.4% marks. My school life was not only just marks but also taught and inspired me to move forword. And I feel proud to say that I was a West bengal board student.</p>
                        </div>
                    </div>
                </div>
                <div className='university'>
                        <div className="card">
                            <div className="content">
                                <img className='mx-auto' style={{width: "80px", height: "70px"}} src="./second-portfolio/university.png" alt="" />
                                <div style={{display: "flex", justifyContent: "center", width: "100%"}}><h3>University</h3></div>
                                <p>
                                Currently I am in the 3rd year of my B.tech degree in Maulana Abul Kalam Azad University Of Technology. My college life becomes as a new chapter of my life with lots of exprriences and lessons. For the first time I could feel the strength within me. The hostel life is one of the beautiful experience in my college life.</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='sm-academic lg:mb-8 hidden sm:block'>
                <div className='sm-school' style={{zIndex: "888"}}>
                    <div className="sm-card">
                        <div className="content">
                            <img className='mx-auto' style={{width: "80px", height: "70px"}} src="./second-portfolio/school.png" alt="" />
                            <div style={{display: "flex", justifyContent: "center", width: "100%"}}><h3>School</h3></div>
                            <p>
                            I have passed my 10th from J.G.M.G.S.V with 94.1% marks and have my 12th from Bankura Banga Vidyalay sequring 90.4% marks. My school life was not only just marks but also taught and inspired me to move forword. And I feel proud to say that I was a West bengal board student.</p>
                        </div>
                    </div>
                </div>
                <div className='sm-university'>
                        <div className="sm-card">
                            <div className="content">
                                <img className='mx-auto' style={{width: "80px", height: "70px"}} src="./second-portfolio/university.png" alt="" />
                                <div style={{display: "flex", justifyContent: "center", width: "100%"}}><h3>University</h3></div>
                                <p>
                                Currently I am in the 3rd year of my B.tech degree in Maulana Abul Kalam Azad University Of Technology. My college life becomes as a new chapter of my life with lots of exprriences and lessons. For the first time I could feel the strength within me. The hostel life is one of the beautiful experience in my college life.</p>
                            </div>
                        </div>
                </div>
            </div>
    </div>
  )
}
export default Academic;
