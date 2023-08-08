import './CommentContent.css';
import React from "react";
import Challenges from "../../Assets/Challenges.jpg";


const ChallengesComment = () => {
    return (
        <div className="OneContainer">
                <div>      
                <div className="image-container">
                    <img className="logistics-img" src={Challenges} alt="IntroImg"/>
                </div>
                <div className="content1">
                    <h1 className="logistics-header">CHALLENGES</h1>
                    <p className="logistics-description">Understanding Challenges: Identifying Obstacles and Opportunities in the Pursuit of Success.</p>
                </div>
                </div>

                <div>

                </div>
     
        </div>
    );
}

export default ChallengesComment;