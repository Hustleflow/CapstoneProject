import './CommentContent.css';
import React from "react";
import Victories from "../../Assets/Victories.jpg";


const VictoriesComment = () => {
    return (
        <div className="OneContainer">
                <div>      
                <div className="image-container">
                    <img className="logistics-img" src={Victories} alt="IntroImg"/>
                </div>
                <div className="content1">
                    <h1 className="logistics-header">VICTORIES</h1>
                    <p className="logistics-description">Embracing Victories: Celebrating Achievements and Milestones on the Journey to Success.</p>
                </div>
                </div>

                <div>

                </div>
     
        </div>
    );
}

export default VictoriesComment;