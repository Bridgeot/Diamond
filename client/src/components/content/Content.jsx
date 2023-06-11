import React from 'react'
import './content.css'

const Content = ({ title, text, image }) => (
  <div className='content-container'>
    <div className='content-container-title'>
      <h2>{title}</h2>
    </div>
    <div className='content-container-text'>
      <p>{text}</p>
    </div>
    <div className='content-container-image'>
      <p>{image}</p>
    </div>
  </div>
);

export default Content
