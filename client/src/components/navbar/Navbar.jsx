import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

import Logo from '../../assets/diamond-logo.png'

const linkStyle = {
  color: 'var(--secondary-color)',
  fontFamily: 'var(--gilda-display)',
  fontSize: '1.25rem',
  lineHeight: '1.25rem',
  textTransform: 'uppercase',
}

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
          <img src={Logo} alt='diamond logo' />
      </div>

      <div className='navbar-menu'>
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/about' style={linkStyle}>About</Link>
          <Link to='#talent' style={linkStyle}>Talent</Link>
          <Link to='#ranking' style={linkStyle}>Ranking</Link>
          <Link to='#reviews' style={linkStyle}>Reviews</Link>
      </div>
    </div>
  )
}

export default Navbar
