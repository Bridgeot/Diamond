import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

// import Logo from '../../assets/'
// import HeaderImg from '../../assets/header.png'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      px='20px'
    >
      <Link>
        <img src='' alt='logoSoon' style={{ width: '48px', height: '48px', margin: '0 20px' }}/>
      </Link>
      <Stack
        direction='row'
        alignItems='flex-end'
        gap='40px'
        fontSize='16px'
        textTransform='uppercase'
      >
        <Link to='/' style={{ textDecoration: 'none', color: '#98867b'  }}>Home</Link>
        <a href='#About' style={{ textDecoration: 'none', color: '#98867b' }}>About</a>
        <a href='#Talent' style={{ textDecoration: 'none', color: '#98867b' }}>Talent</a>
        <a href='#Ranking' style={{ textDecoration: 'none', color: '#98867b' }}>Ranking</a>
        <a href='#Reviews' style={{ textDecoration: 'none', color: '#98867b' }}>Reviews</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
