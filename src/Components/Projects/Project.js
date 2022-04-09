import React from 'react';
import './Project.css';

function Project() {
  return (
      <div id='project'>
          <div className='p-p'>
            <div className='project-title'>Projects.</div>
          </div>
        <div className='project grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1' >
            <div className="crd mx-auto">
                <div className="face face1">
                    <div className="content">
                        <img src="blogger_1.png" alt="" />
                        <h3>Bloggy</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>This is a daily blog web app. Here users can post their daily blogs just by signing up themselves to our application. This is responsive and user friendly so users can post and viewers can 
                            see or find blogs easily.</p>
                        <a href="https://quiet-sands-66397.herokuapp.com/">Visit</a>
                    </div>
                </div>
            </div>
            <div className="crd mx-auto">
                <div className="face face1">
                    <div className="content">
                        <img className='mx-auto' src="flipkart_clone.png" alt="" />
                        <h3>Flipkart Clone</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>
    A MERN Stack application. Build using React Js and Node js. It has major functionalities of the eCommerce website like users sign up/sign in, searching, listing, sorting conditionally, add to cart, buying, tracking, etc.</p>
                        <a href="https://musing-mestorf-5e4fda.netlify.app/">Visit</a>
                    </div>
                </div>
            </div>
            <div className="crd mx-auto">
                <div className="face face1">
                    <div className="content">
                        <img className='mx-auto' src="virus.png" alt="" />
                        <h3>Covid-19 tracker</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Users can get to know the Covid-19 related information of India state-wise as well as they can search for district-wise data.</p>
                        <a href="https://floating-spire-68968.herokuapp.com/">Visit</a>
                    </div>
                </div>
            </div>
            <div className="crd mx-auto -top-24 lg:top-0">
                <div className="face face1">
                    <div className="content">
                        <img className='mx-auto' src="music.png" alt="" />
                        <h3>The melody box</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>This is a website of three different musical instruments. We can
    play them virtually with the features of voice navigation.</p>
                        <a href="https://the-melody-box.web.app/">Visit</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Project