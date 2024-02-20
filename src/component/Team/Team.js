import React from 'react'
import './Team.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Team = () => {
  return (
    <div className='team-container'>
        <div className='team'>
            <h2>Meet Our Team</h2>
            <div  className="team-pack">
            <div className='team-box'>
                <div className='team-img'>
                    <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/team2-370x370-1.jpg' alt='img'/>
                </div>    
                    <h4>Sofie Gilmor</h4>
                    <p>job title</p>
                    <div  className='social-icons'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                    </div>
               </div>
                <div className='team-box'>
                <div className='team-img'>
                    <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/team1-370x370-1.jpg' alt='img'/>
                </div>    
                    <h4>Sofie Gilmor</h4>
                    <p>job title</p>
                    <div  className='social-icons'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                    </div>
               </div>
                <div className='team-box'>
                    <div className='team-img'>
                    <img src='https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/team3-370x370-1.jpg' alt='img'/>
                    </div>
                    <h4>Sofie Gilmor</h4>
                    <p>job title</p>
                    <div  className='social-icons'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}
// https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/team2-370x370-1.jpg
// https://websitedemos.net/party-planner-02/wp-content/uploads/sites/991/2021/11/team3-370x370-1.jpg
export default Team