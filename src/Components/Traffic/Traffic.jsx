import React, {useEffect} from 'react'

import five from "../../assets/five.png";

import Aos from 'aos'
import 'aos/dist/aos.css'

 function Traffic() {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

  return (
    <div className="traffic container section">
        <div className="sectionContainer grid">
            <div data-aos='fade-up' data-aos-duration='2500' className="imgDiv">
                <img src={five} alt="five"/>
            </div>
            <div data-aos='fade-up' data-aos-duration='2500' className="textDiv grid">
                <h2>Ultimate solution to website traffic</h2>
                <ul className='list'>
                    <li className='listItem'>
                        Sed egestas egestas fringilla phasellus. Tortor
                        consequat id porta nibh venenatis cras sed felis
                        eget. Diam quis enim lobortis scelerisque.
                    </li>
                    <li className='listItem'>
                        Tellus elementum sagittis vitae et leo duis.
                    </li>
                    <li className='listItem'>
                    Turpis egestas integer eget aliquet nibh praesent
                    tristique magna sit. Nunc id cursus metus aliquam.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Traffic;
