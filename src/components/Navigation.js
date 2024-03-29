import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/images/grub.live-logo.svg'
import Dropdown from './Dropdown/Dropdown'


const Navigation = () => {
  
  return (
    <div>
  
      <nav className="navbar">
      <Link to='/' className='nav-item'>
        <div>
          <img className='logo' src={logo} alt='Grub.live logo'  />
        </div>
      </Link>
      <div className='nav-item' style={{margin: '16px 16px 0px 0px'}}>
        
        <Dropdown text="Restaurants"> 
          <Link to='/register/restaurant'><div className='hyperlink nav-item'>Register Restaurant</div></Link>
          <Link to='/create'><div className='hyperlink nav-item'>Create Menu</div></Link>
          <Link to='/how-it-works'><div className='hyperlink nav-item'>How it works?</div></Link>
        </Dropdown>
        <Dropdown text="Partners"> 
          <Link to='/register/partner'><div className='hyperlink nav-item'>Sign Up</div></Link>
          <Link to='/register/restaurant'><div className='hyperlink nav-item'>Register Restaurant</div></Link>
          <Link to='/track'><div className='hyperlink nav-item'>Track Deals</div></Link>
        </Dropdown>
        
        {/* <Link to='/create'>
          <button className='black-yellow nav-item'>
            Create Menu
          </button>
        </Link> */}
      </div>
      </nav>
    </div>
  )
}

export default React.memo(Navigation)
