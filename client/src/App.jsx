import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'

import { Navbar, Footer } from './components'
import { Home, About, Talent, Ranking, Reviews } from './pages'

const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' }}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Talent' element={<Talent />} />
        <Route path='/Ranking' element={<Ranking />} />
        <Route path='/Reviews' element={<Reviews />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
