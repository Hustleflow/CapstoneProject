import './CommentContent.css';
import React from "react";
import Improvements from "../../Assets/Improvements.jpg";


const ImprovementsComment = () => {
    return (
        <div className="OneContainer">
                <div>      
                <div className="image-container">
                    <img className="logistics-img" src={Improvements} alt="IntroImg"/>
                </div>
                <div className="content1">
                    <h1 className="logistics-header">IMPROVEMENTS</h1>
                    <p className="logistics-description">Continuous Improvement: Advancing Excellence through Iterative Enhancements and Progress.</p>
                </div>
                </div>

                <div>

                </div>
     
        </div>
    );
}

export default ImprovementsComment;