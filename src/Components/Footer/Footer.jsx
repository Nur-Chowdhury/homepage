import React from 'react'

import logo from '../../assets/logo.png';
import { RiCopyrightLine } from 'react-icons/ri';


const Footer = () => {
  return (
    <div className="footer">
        <div className="sectionContainer container grid">
            <div className="foot1 grid">
                <img src={logo} alt='logo' className='footerlogo' />
                <p className='footerdes'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="footMenu grid">
                <div className="foot">
                <ul >
                    <li className='fh listItem'>Company</li>
                    <li className='listItem'>About Us</li>
                    <li className='listItem'>Careers</li>
                    <li className='listItem'>Press & Media</li>
                    <li className='listItem'>Contact Us</li>
                </ul>
                </div>
                <div className="foot">
                <ul >
                    <li className='fh listItem'>Discover</li>
                    <li className='listItem'>Our Blog</li>
                    <li className='listItem'>Advertising</li>
                    <li className='listItem'>Plans & Pricing</li>
                    <li className='listItem'>Testimonials</li>
                </ul>
                </div>
                <div className="foot">
                <ul >
                    <li className='fh listItem'>Legal</li>
                    <li className='listItem'>Terms of Use</li>
                    <li className='listItem'>Privacy Policy</li>
                    <li className='listItem'>Cookie Policy</li>
                    <li className='listItem'>Site Map</li>
                </ul>
                </div>
                <div className="foot">
                <ul >
                    <li className='fh listItem'>Support</li>
                    <li className='listItem'>FAQs</li>
                    <li className='listItem'>Editor Help</li>
                    <li className='listItem'>Community</li>
                    <li className='listItem'>Live Chatting</li>
                </ul>
                </div>
            </div>
        </div>
        <hr className='divider' />
        <div className="foot6 flex">
            <div className="copyright">
                <RiCopyrightLine className='icn' />2024 Lorem.All Rights Reserved.
            </div>
            <div className="social">
                <ul className='social-ul flex'>
                    <li className='sl'>Facebook</li>
                    <li className='sl'>Twitter</li>
                    <li className='sl'>LinkedIn</li>
                    <li className='sl5'>Dribble</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
