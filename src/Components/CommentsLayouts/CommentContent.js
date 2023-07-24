import './CommentContent.css';
import React from "react";
import Logistics from "../../Assets/Logistics.jpg";


const CommentContent = () => {
    return (
        <div className="OneContainer">
                <div>      
                <div className="image-container">
                    <img className="logistics-img" src={Logistics} alt="IntroImg"/>
                </div>
                <div className="content1">
                    <h1 className="logistics-header">LOGISTICS</h1>
                    <p className="logistics-description">Logistics discussions provide opportunities for the team to disclose intricate details and challenges of their tasks.</p>
                </div>
                </div>

                <div>

                </div>
     
        </div>
    );
}

export default CommentContent;