import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='gallery-container'>
          <h2>Our Gallary</h2>
      <div className='gallery'>
        <div className='gallery-box'>
          <div className='g-col1'>
            <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/gallery-11a-1024x461.jpg' alt='img'/>
          </div>
          <div className='gb-box'>
          <div className='g-col2'>
          <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/gallery-2.jpg' alt='img'/>
          </div>
          <div className='g-col2'>
          <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/gallery-3.jpg' alt='img'/>
          </div>
          </div>   
        </div>
        <div className='gallery-box row-f'>
          <div className='g-col1'>
            <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/gallery-4-1024x452.jpg' alt='img'/>
          </div>
          <div className='gb-box'>
          <div className='g-col2'>
          <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/gallery-5.jpg' alt='img'/>
          </div>
          <div className='g-col2'>
          <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/gallery-6.jpg' alt='img'/>
          </div>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default Gallery