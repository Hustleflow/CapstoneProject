import './CommentContent.css';
import React from "react";
import EmployeeHealth from "../../Assets/EmployeeHealth.jpg";


const HealthComment = () => {
    return (
        <div className="OneContainer">
                <div>      
                <div className="image-container">
                    <img className="logistics-img" src={EmployeeHealth} alt="IntroImg"/>
                </div>
                <div className="content1">
                    <h1 className="logistics-header">EMPLOYEE HEALTH</h1>
                    <p className="logistics-description">Prioritizing Employee Health: Nurturing a Thriving Workforce through Wellness and Support.</p>
                </div>
                </div>

                <div>

                </div>
     
        </div>
    );
}

export default HealthComment;