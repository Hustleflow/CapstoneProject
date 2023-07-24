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
    return (
        <div className="first-container">
        <div className="card-container">
            <Link to="/Comments"><img className="logisticsImage" src={Improvements} alt="Delivery"/></Link>
           <div className="level">
            <p>IMPROVEMENTS</p>
            <p> <Link to="/Comments">Follow</Link></p>
            </div> 
            <div>
            
            <p><FaEye size={20} style={{color: "#000", marginRight: "2rem"}}/>
            <FaComment size={20} style={{color: "#000", marginRight: "2rem"}}/>7</p>
            
            </div>
            <p className="card-text">Logistics discussions provide opportunities for the team to disclose intricate details and challenges of their tasks.</p>
        </div>
        <div className="card-container">
            <Link to="/Comments"><img className="logisticsImage" src={EmployeeHealth} alt="Delivery"/></Link>
           <div className="level">
            <p>EMPLOYEE HEALTH</p>
            <p> <Link to="/Comments">Follow</Link></p>
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