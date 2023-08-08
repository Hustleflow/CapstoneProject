import './CommentContent.css';
import React from "react";
import StaffUpdates from "../../Assets/StaffUpdates.png";


const StaffUpdatesComment = () => {
    return (
        <div className="OneContainer">
                <div>      
                <div className="image-container">
                    <img className="logistics-img" src={StaffUpdates} alt="IntroImg"/>
                </div>
                <div className="content1">
                    <h1 className="logistics-header">STAFF UPDATES</h1>
                    <p className="logistics-description">Keeping the Team Informed and Empowered with Timely Information and Progress Reports.</p>
                </div>
                </div>

                <div>

                </div>
     
        </div>
    );
}

export default StaffUpdatesComment;