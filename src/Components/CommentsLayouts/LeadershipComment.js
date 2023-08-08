import './CommentContent.css';
import React from "react";
import LeadershipRoles from "../../Assets/LeadershipRoles.jpg";


const LeadershipComment = () => {
    return (
        <div className="OneContainer">
                <div>      
                <div className="image-container">
                    <img className="logistics-img" src={LeadershipRoles} alt="IntroImg"/>
                </div>
                <div className="content1">
                    <h1 className="logistics-header">LEADERSHIP ROLES</h1>
                    <p className="logistics-description">Guiding the Way: Embracing Responsibility and Inspiring Others as Effective Leaders.</p>
                </div>
                </div>

                <div>

                </div>
     
        </div>
    );
}

export default LeadershipComment;