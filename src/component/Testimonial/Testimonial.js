import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
            <h2>Testimonial</h2>
        <div className='testimonial'>
            <div className='test'>
                <div className='test-img'>
                    <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/testimonials2.png' alt='img' />
                </div>

                <h4>Amanda Doe</h4>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
            <div className='test'>
                <div className='test-img'>
                    <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/testimonials1.png' alt='img' />
                </div>

                <h4>Jenny Smith</h4>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial