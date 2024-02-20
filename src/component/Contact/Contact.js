import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact'>
            <div className='con-img'>
                <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/cta-img-1.jpg' alt='img'/>
            </div>

            <div className='con-text'>
                <h4>
                    It's Time To Get In Touch
                </h4>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <button className='con-btn'>Call: 1234567</button>
            </div>
        </div>
    </div>
  )
}

export default Contact