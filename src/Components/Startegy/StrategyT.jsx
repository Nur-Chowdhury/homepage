import React, {useEffect} from 'react'
import StrategicC from './StrategicC'

import Aos from 'aos'
import 'aos/dist/aos.css'

const StrategyT = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

  return (
    <div className="strategyT section">
        <div className="sectionContainer grid">
            <div data-aos='fade-up' data-aos-duration='2500' className="textDiv grid">
                <div className="text">
                    <h2>All-in-One Marketing Solutions</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Proin cursus mi sit amet
                        diam facilisis, sed tempor ligula suscipit.
                        Integer at eros sed lorem placerat molestie.
                        Etiam mauris neque, laoreet in dolor vel,
                        auctor scelerisque elit. Nunc sit amet metus
                        iaculis, congue risus et, faucibus est. Nunc
                        et facilisis lectus.
                    </p>
                </div>

                <div className="text">
                    <h2>Strategy and Analytics Consulting</h2>
                    <ul>
                        <li className='listItem'>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Proin cursus mi sit amet
                            diam facilisis, sed tempor ligula suscipit
                            Integer at eros sed lorem placerat molestie.
                        </li>
                        <li className='listItem'>
                            Orci varius natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus
                            mus. Vestibulum vel lorem a eros tempus
                            euismod.
                        </li>
                    </ul>
                </div>
                
            </div>
            <div data-aos='fade-down' data-aos-duration='2500'>
                <StrategicC />
            </div>
        </div>
    </div>
  )
}

export default StrategyT
