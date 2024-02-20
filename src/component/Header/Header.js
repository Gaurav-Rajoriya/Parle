import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";


const Header = () => {
    const [mobileOpen,setmobileOpen] = useState(false)
    const onchangehandle = ()=>{
        setmobileOpen(!mobileOpen)
      }

      const onhandleclose = ()=>{
        setmobileOpen(false)
      }
    
  return (
    <div className='header-container'>
        <header>
            <div className='logo'>
                <h1><span>P</span>Planner</h1>
                
            </div>
            <nav className={`${mobileOpen ? 'come': ''}`}>
                <ul>
                    <li><Link onClick={onhandleclose} to="/">Home</Link></li>
                    <li><Link onClick={onhandleclose} to="/about">Service</Link></li>
                    <li><Link onClick={onhandleclose} to="/about">Gallery</Link></li>
                    <li><Link onClick={onhandleclose} to="/about">Team</Link></li>
                    <li><Link onClick={onhandleclose} to="/about">Testimonial</Link></li>
                </ul>
            </nav>

            <div className='btn-1'>
                <button>Contact</button>
            </div>

            <div className='responsive'>
            <div className='menu' onClick={onchangehandle}><IoMenu /></div>
            <div className='close'><IoCloseCircle /></div>
        </div>
        </header>
        
    </div>
  )
}

export default Header