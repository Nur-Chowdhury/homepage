import React, {useState} from 'react';

import logo from "../../assets/logo.png"
import { CgMenuGridO } from 'react-icons/cg';


function Navbar() {

  const [noBg, addBg] = useState('navBar');

  const addBgColor = ()=>{
    if(window.scrollY >=10){
      addBg('navBar navbar_With_Bg');
    }else{
      addBg('navBar');
    }
  }

  window.addEventListener('scroll', addBgColor);

  const [active, setActive] = useState('navBarMenu');

  const showNavBar = ()=>{
    if(active==='navBarMenu'){
      setActive('navBarMenu showNavBar');
    }
    else{
      setActive('navBarMenu');
    }
  }

  const removeNavBar = ()=>{
    setActive('navBarMenu');
  }


  return (
    <div className='nav flex'>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className='logo' />
        </div>

        <div className={active}>
          <ul className='menu flex' >
            <a href="/"><li onClick={removeNavBar} className='listItem'>Home</li></a>
            <a href="#about"><li onClick={removeNavBar} className='listItem'>About</li></a>
            <a href="#features"><li onClick={removeNavBar} className='listItem'>Features</li></a>
            <li onClick={removeNavBar} className='listItem'>Pricing</li>
            <a href="#faq"><li onClick={removeNavBar} className='listItem'>FAQ</li></a>
          </ul>
          <div className="buttons flex">
            <button className='btn flex btnOne' >Login</button>
            <button className='btn flex btnTwo' >SignUp</button>
          </div>
        </div>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
