import React from 'react'
import Content from '../../components/content/Content'
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <div className='about-heading'>
        <h2 className='gradient-color'>About This Service</h2>
      </div>

      <div className='about-content-container'>
        <div className='about-content'>
          <Content title='What is Diamond?' />
        </div>
        <div className='about-content'>
          <Content text="Sometime last year, a dear friend was looking for a solution to their problem: they wanted to date someone, but didn't have the time or energy to dedicate towards being in a real relationship. This was a terrible situation for anyone to be in, so we drafted up an idea for a website that would allow for them to have a 'girlfriend' capable of operating on their time." />
          <Content text="Fast forward to four years, and Diamond has indisputably become the number one solution not just for that one friend, but for many other people residing in Tokyo, Japan. Our service allows indivisuals to rent one of several talents to act as their girlfriend for a set amount of time and at a location of their choosing for an affordable cost." />
        </div>
      </div>
    </div>
  )
}

export default About
