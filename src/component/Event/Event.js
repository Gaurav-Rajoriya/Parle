import React from 'react'
import './Event.css';

const Event = () => {
  return (
    <div className='event-container'>
        <div className='event'>
            <h2>Our Events</h2>
            <div className='event-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button>All Event</button>
            </div>

            <div className='event-box'>
                <div className='event-card'><h4>PARTY</h4></div>
                <div className='event-card'><h4>PARTY</h4></div>
                <div className='event-card'><h4>PARTY</h4></div>
                <div className='event-card'><h4>PARTY</h4></div>
            </div>
        </div>
    </div>
  )
}

export default Event