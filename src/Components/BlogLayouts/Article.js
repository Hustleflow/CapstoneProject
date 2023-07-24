import "./Article.css";
import React from "react";
import Whatscoding from "../../Assets/whats-coding.jpg";

import { Link } from "react-router-dom";

import {
 FaEye,
 FaComment,
 FaBell,
 FaUserCircle,
 FaEllipsisV,
 FaThumbtack,
 FaSmile,
 FaCrown,
 FaFacebook,
 FaTwitter,
 FaLinkedin,
 FaLinkedinIn,
 FaClipboard,
 FaPaperclip,
 FaHeart,
} from "react-icons/fa";

import { IoHeartOutline } from 'react-icons/io5';

const Article = () => {
    return (
        <div className="variant2-container">
                 
                    
                        
                        <div className="degree7">
                                                        
                            <p><FaUserCircle  size={20} style={{color: "#000", marginRight: "1px"}}/>Admin<FaCrown size={17} style={{color: "#000", marginRight: "1px"}}/></p>
                                                        

                                                    
                            <p><FaEllipsisV  size={15} style={{color: "#000", marginRight: "0px"}}/></p>
                                                                            
                        </div>

        <div>
                                    
            <h1>What Is Coding and How Does It Work?</h1>

                <p className="this-paragraph1">As vaccination rates climb and case numbers drop in many parts of the world, companies are preparing for life after the pandemic.</p>

                <img className="monkey-codes" src={Whatscoding} alt="codingimage"/>

                <h4 className="design"> Design with Ease</h4>

                <p className="this-paragraph2">“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”</p>

                <h4 className="design"> Stun Your Readers </h4>
                
                <p className="this-paragraph2">“Be original, show off your style, and tell your story.”</p>

                <h4 className="design"> Get Inspired </h4>

                <p className="this-paragraph2">Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.</p>

          



            <div className="horizontal-line1"></div>

            <p><FaFacebook className="icons" size={20} style={{color: "#000", marginRight: "1px"}}/><FaFacebook  size={20} className="icons" style={{color: "transparent", marginRight: "1px"}}/><FaTwitter className="icons"  size={20} style={{color: "#000", marginRight: "1px"}}/><FaTwitter className="icons" size={20} style={{color: "transparent", marginRight: "1px"}}/> <FaLinkedinIn className="icons" size={20} style={{color: "#000", marginRight: "1px"}}/><FaLinkedinIn className="icons" size={20} style={{color: "transparent", marginRight: "1px"}}/><FaPaperclip className="icons" size={20} style={{color: "#000", marginRight: "1px"}}/></p>

            <div className="horizontal-line1"></div>

                         <div className="forviews">
                            <h5 className="weighted">0 views</h5>
                            <h5 className="distanced">0 comments</h5>
                            <p> <IoHeartOutline className="bottom-icon" size={18} style={{color: "000", marginRight: "1px"}}/></p>
                         </div>

        </div>           

                    
                            
               
    
        </div>
    );
}


export default Article;