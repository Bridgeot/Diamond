import React from 'react'
import Content from '../../components/content/Content'
import './talent.css'

import ProfileImg1 from '../../assets/profile-img1.png'
import ProfileImg2 from '../../assets/profile-img2.png'
import ProfileImg3 from '../../assets/profile-img3.png'

const Talent = () => {
  return (
    <div className='talent'>
      <div className='talent-heading'>
        <h2 className='gradient-color'>Meet the Talent</h2>
      </div>

      <div className='talent-content'>
        <Content image={<img src={ProfileImg1} alt='talent profile image' />} />
        <Content image={<img src={ProfileImg3} alt='talent profile image' />} />
        <Content image={<img src={ProfileImg2} alt='talent profile image' />} />
      </div>

      <div className='talent-content'>
        <Content title='Maki Suzuki' text='Fashionable and trendy; she is the type of girl you would want to hold onto if you prefer the finer things in life.' />
        <Content title='Sara Boston' text='Cool, beautiful, and strong; she is the ideal girlfriend for those who prefer to not take the lead and enjoy the ride.' />
        <Content title='Layla Osaka' text='Sweet, kind, and wholesome; she is more than capable of soothing your soul. The perfect girl to bring home to your parents.' />
      </div>
    </div>
  )
}

export default Talent
