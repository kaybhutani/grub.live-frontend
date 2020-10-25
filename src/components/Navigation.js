import React from 'react'
import { Link } from '@reach/router'
import logo from '../assets/images/grub.live-logo.svg'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active' : ''
      }
    }}
  />
)

const Navigation = () => {
  return (
    <header className='flex-wrap-sm'>
      <Link to='/'>
        <div className='brand'>
          <img className='logo' src={logo} alt='' />
        </div>
      </Link>
      <nav className='padding-top-xs'>
        <NavLink to='/how-it-works'><div className='hyperlink'>How it works?</div></NavLink>
        <NavLink to='/create'>
          <button className='black-yellow'>
            Create Menu
          </button>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navigation
