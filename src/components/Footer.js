import React from 'react'
import { Link } from "react-router-dom"

import yellowLogo from '../assets/images/grub.live-logo-yellow.svg'
const Footer = () => {


  return (
    <footer>
        <div>
          <img src={yellowLogo} alt='Grub.live logo' className='logo'></img>
          <div>Rejuvenating the dining experience.</div>
        </div>
        <div className='footer-links'>
          <Link to='/contact'><div className='footer-item hyperlink-invert'>Contact Us</div></Link>
          <Link to='/how-it-works'><div className='footer-item hyperlink-invert'>How it works</div></Link>
          <Link to='/about'><div className='footer-item hyperlink-invert'>About Us</div></Link>
        </div>
        <br></br>
        <br></br>
      <span>Made with ❤ in India</span><br></br>
      <span>© 2020 Grub.live</span>
    </footer>
  )
}

export default Footer