import React from 'react'
import Content from '../../components/content/Content'
import './ranking.css'

const Ranking = () => {
  return (
    <div className='ranking'>
      <div className='ranking-heading'>
        <h2 className='gradient-color'>Ranking System</h2>
      </div>

      <div className='ranking-content-container'>
        <div className='ranking-content'>
          <Content title={ <span className='ranking-title'>This Week</span> } />
          <Content title={ <span className='ranking-gold'>01.</span> } text='Maki Suzuki' />
          <Content title={ <span className='ranking-silver'>02.</span> } text='Sara Boston' />
          <Content title={ <span className='ranking-bronze'>03.</span> } text='Layla Osaka' />
        </div>
        <div className='ranking-content'>
          <Content title={ <span className='ranking-title'>This Month</span> } />
          <Content title={ <span className='ranking-gold'>01.</span> } text='Sara Boston' />
          <Content title={ <span className='ranking-silver'>02.</span> } text='Layla Osaka' />
          <Content title={ <span className='ranking-bronze'>03.</span> } text='Maki Suzuki' />
        </div>
        <div className='ranking-content'>
          <Content title={ <span className='ranking-title'>This Year</span> } />
          <Content title={ <span className='ranking-gold'>01.</span> } text='Sara Boston' />
          <Content title={ <span className='ranking-silver'>02.</span> } text='Maki Suzuki' />
          <Content title={ <span className='ranking-bronze'>03.</span> } text='Layla Osaka' />
        </div>
      </div>
    </div>
  )
}

export default Ranking
