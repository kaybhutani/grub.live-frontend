import React from 'react'
import yellowLogo from '../assets/images/grub.live-logo-yellow.svg'
const Footer = () => {


  return (
    <footer>
        <div>
          <img src={yellowLogo} className='logo'></img>
        </div>
        <div classNam='footer-links'>
          <div className='footer-item hyperlink-invert'>Contact Us</div>
          <div className='footer-item hyperlink-invert'>Feedback</div>
          <div className='footer-item hyperlink-invert'>About Us</div>
        </div>
        <br></br>
      
      <span>Made with ❤ in India</span><br></br>
      <span>© 2020 Grub.live</span>
    </footer>
  )
}

export default Footer