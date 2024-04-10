import React, {useEffect} from 'react'

import four from "../../assets/four.png";

import Aos from 'aos'
import 'aos/dist/aos.css'

 function StrategyO() {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

  return (
    <div className="strategyO container section">
        <div className="sectionContainer grid">
            <div className="textDiv grid">
                <div className="txDiv">
                    <h2>Ready to Grow Your Business?</h2>
                    <p className='para'>
                        Lorem ipsum dolor sit amet, consectetu adipiscing 
                        elit, eiusmod temporincididunt ut labore et dolore magn
                        aliqua quis.
                    </p>
                </div>
                <div className="textT grid">
                    <div data-aos='fade-up' data-aos-duration='2500' className="imgDiv">
                        <img src={four} alt="four"/>
                    </div>
                    <div data-aos='fade-down' data-aos-duration='2500' className="grid">
                        <span>DIGITAL STRATEGY</span>
                        <h2>First page rankings. First name basis</h2>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua
                            quis nostrud exercitation.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua quis nostrud exercitation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StrategyO;
