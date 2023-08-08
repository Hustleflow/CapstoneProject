import "./Card.css";
import React from "react";
import Logistics from "../../Assets/Logistics.jpg";
import StaffUpdates from "../../Assets/StaffUpdates.png";
import { Link } from "react-router-dom";

import {
 FaEye,
 FaComment,
} from "react-icons/fa";

const Card = () => {
    return (
        <div className="first-container">
        <div className="card-container">
            <Link to="/Comments"><img className="logisticsImage" src={Logistics} alt="Delivery"/></Link>
           <div className="level">
            <p>LOGISTICS</p>
            <p> <Link to="/Comments">Follow</Link></p>
            </div> 
            <div>
            
            <p><FaEye size={20} style={{color: "#000", marginRight: "2rem"}}/>
            <FaComment size={20} style={{color: "#000", marginRight: "2rem"}}/>7</p>
            
            </div>
            <p className="card-text">Logistics discussions provide opportunities for the team to disclose intricate details and challenges of their tasks.</p>
        </div>
        
        <div className="card-container">
            <Link to="/StaffUpdates"><img className="logisticsImage" src={StaffUpdates} alt="Delivery"/></Link>
           <div className="level">
            <p>STAFF UPDATES</p>
            <p> <Link to="/StaffUpdates">Follow</Link></p>
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


export default Card;