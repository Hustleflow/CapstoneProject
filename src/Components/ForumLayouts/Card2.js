import "./Card.css";
import React from "react";
import Improvements from "../../Assets/Improvements.jpg";
import EmployeeHealth from "../../Assets/EmployeeHealth.jpg";
import { Link } from "react-router-dom";

import {
 FaEye,
 FaComment,
} from "react-icons/fa";

const Card2 = () => {
    window.addEventListener('scroll', () => {
        reveal();
      });
    
      const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
    
        for(let i =0; i < reveals.length; i++) {
    
          const windowheight = window.innerHeight;
          const revealtop = reveals[i].getBoundingClientRect().top;
          const revealpoint = 150;
    
          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
          }
          else {
            reveals[i].classList.remove('active');
          }
        }
      }

    return (
        <div className="first-container reveal">
        <div className="card-container">
            <Link to="/Improvements"><img className="logisticsImage" src={Improvements} alt="Delivery"/></Link>
           <div className="level">
            <p>IMPROVEMENTS</p>
            <p> <Link to="/Improvements">Follow</Link></p>
            </div> 
            <div>
            
            <p><FaEye size={20} style={{color: "#000", marginRight: "2rem"}}/>
            <FaComment size={20} style={{color: "#000", marginRight: "2rem"}}/>7</p>
            
            </div>
            <p className="card-text">Logistics discussions provide opportunities for the team to disclose intricate details and challenges of their tasks.</p>
        </div>
        <div className="card-container">
            <Link to="/EmployeeHealth"><img className="logisticsImage" src={EmployeeHealth} alt="Delivery"/></Link>
           <div className="level">
            <p>EMPLOYEE HEALTH</p>
            <p> <Link to="/EmployeeHealth">Follow</Link></p>
            </div> 
            <div>
            
            <p><FaEye size={20} style={{color: "#000", marginRight: "2rem"}}/>
            <FaComment size={20} style={{color: "#000", marginRight: "2rem"}}/>12</p>
            
            </div>
            <p className="card-text">Staff update meeting agendas may be about or include changes to a company's personnel and can be an oppotunity to offer congratulations.</p>
        </div>






        </div>
    );
}


export default Card2;