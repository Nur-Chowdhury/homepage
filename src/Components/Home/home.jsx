import React from 'react';
import image from '../../assets/hero.png';

function Home() {
  return (
    <div className="home grid container">
        <div className="homeImages">
            <img src={image} alt='hero' className='plane' />
        </div>
        <div className="mainText">
            <h1>Generating income with complete form data</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do ut labore et dolore magna aliqua.
            </p>
            <button className='btn .heroBtn'>Get Started</button>
        </div>
    </div>
  )
}

export default Home;