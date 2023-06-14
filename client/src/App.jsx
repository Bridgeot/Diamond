import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Home, About, Talent, Ranking, Reviews, Rent } from './pages'
import { Navbar, Footer } from './components'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/talent' element={<Talent />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/rent' element={<Rent />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
