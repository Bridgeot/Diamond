import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Navbar, Footer } from './components'
import { Home, About, Talent, Ranking, Reviews } from './pages'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='#about' element={<About />} />
        <Route path='#talent' element={<Talent />} />
        <Route path='#ranking' element={<Ranking />} />
        <Route path='#reviews' element={<Reviews />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
