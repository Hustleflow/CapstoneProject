import './CommentContent.css';
import React from "react";
import shortlongterm from "../../Assets/shortlongterm.jpg";


const ShortLongComment = () => {
    return (
        <div className="OneContainer">
                <div>      
                <div className="image-container">
                    <img className="logistics-img" src={shortlongterm} alt="IntroImg"/>
                </div>
                <div className="content1">
                    <h1 className="logistics-header">SHORT TERM/LONG TERM</h1>
                    <p className="logistics-description">Charting the Course: Balancing Short-Term Goals with Long-Term Vision for Sustainable Success.</p>
                </div>
                </div>

                <div>

                </div>
     
        </div>
    );
}

export default ShortLongComment;