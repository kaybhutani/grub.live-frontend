import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/images/grub.live-logo.svg'


const Navigation = () => {
  
  return (
    <div>
  
      <nav>
      <Link to='/' className='nav-item'>
        <div>
          <img className='logo' src={logo} alt='Grub.live logo'  />
        </div>
      </Link>
      <div className='nav-item-right'>
        <Link to='/how-it-works'><div className='hyperlink nav-item'>How it works?</div></Link>
        <Link to='/create'>
          <button className='black-yellow nav-item'>
            Create Menu
          </button>
        </Link>
      </div>
      </nav>
    </div>
  )
}

export default Navigation
