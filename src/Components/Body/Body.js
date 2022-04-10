import React from 'react';
import './Body.css';

function Body() {
    var style1 = {"--i":1};
    var style2 = {"--i":2};
    var style3 = {"--i":3};
    var style4 = {"--i":4};
  return (
    <div className='body'>
        <div className="name">
            <div className='md:hidden'>
                <img style={{width: "300px"}} src="./second-portfolio/signature.png" alt="" />
                <h1>I'm a web developer and a </h1>
                <h1 className='dly'>proud Indian.</h1>
                <div><div className="about mt-8"><a href="#about">About</a></div></div>
            </div>
        </div>
        <div className="m-b">
            <div className='hidden md:block'>
                <img className='m-img mx-auto' style={{width: "300px"}} src="./second-portfolio/signature.png" alt="" />
                <h1 className='text-lg'>I'm a web developer and a proud Indian.</h1>
                {/* <h1 className='dly'></h1> */}
                <div><div className="about mt-8"><a href="#about">About</a></div></div>
            </div>
        </div>
        <div className="b lg:hidden lg:w-0">
            <div className="cube lg:hidden">
                <div className="top lg:hidden"></div>
                <div>
                    <span style={style1}></span>
                    <span style={style2}></span>
                    <span style={style3}></span>
                    <span style={style4}></span>
                </div>
            </div>

            <div className="m-cube hidden lg:block md:hidden">
                <div className="m-top hidden lg:block md:hidden"></div>
                <div>
                    <span style={style1}></span>
                    <span style={style2}></span>
                    <span style={style3}></span>
                    <span style={style4}></span>
                </div>
            </div>

            <div className="cube_1 lg:hidden">
                <div className="top_1"></div>
                <div>
                    <span style={style1}></span>
                    <span style={style2}></span>
                    <span style={style3}></span>
                    <span style={style4}></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body