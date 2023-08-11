import React, { useEffect } from "react";
import FirstImage from "../../src/Assets/1stImage.jpg";
import './DefineImageStyle.css';

const DefineImage = () => {

    return (
        <div>
            <div className="blend">
                <img className="intro-img" src={FirstImage} alt="IntroImg"/>
            </div>  
                <div className="content">
                    <p className="first">Our business Community</p>
                    <h1 className="how">We Make It!</h1>
                </div>
            
        </div>
    );
}

export default DefineImage;
