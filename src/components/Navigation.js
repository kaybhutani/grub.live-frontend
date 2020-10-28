import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/images/grub.live-logo.svg'
import NavLink from './NavLink'


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
        <NavLink to='/how-it-works'><div className='hyperlink nav-item'>How it works?</div></NavLink>
        <NavLink to='/create'>
          <button className='black-yellow nav-item'>
            Create Menu
          </button>
        </NavLink>
      </div>
      </nav>
    </div>
  )
}

export default Navigation
