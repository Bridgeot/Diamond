import React from 'react'
import './home.css'

import HomeImg from '../../assets/home-img.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-image'>
        <img src={HomeImg} alt='cute girl with long brown hair smiling back at you' />
      </div>

      <div className='home-content'>
        <div className='home-content-info'>
          <h1 className='gradient-color'>A Diamond <br /> in the Rough</h1>
          <p>We're Japan's largest "rental girlfriend" service located in the heart <br /> of Tokyo. To get started, please schedule your first date down below.</p>

          <div className='home-content-btns'>
            <button className='home-content-btn1' type='button'>Rent Now</button>
            <button className='home-content-btn2' type='button'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
