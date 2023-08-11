import "./CommentCard.css";
import React from "react";

import { Link } from "react-router-dom";

import {
 FaEye,
 FaComment,
 FaBell,
 FaUserCircle,
 FaEllipsisV,
 FaThumbtack,
 FaSmile,
} from "react-icons/fa";

const ChallengesCard = () => {
    return (
        <div className="variant-container">
                 
        <div>
                    <div className="degree">
                            <h4 className="h4style">CHALLENGES | Sort by: <button>Recent Activity</button></h4>
                        

                            <div className="degree">
                                <p><Link to="/Challenges" className="btn"> <FaBell size={15} style={{color: "#000", marginRight: "1px"}}/> Follow Category</Link></p>
                                <p><Link to="/Challenges" className="btn-light">Create New Post</Link></p>
                            </div>
                            


                    </div> 

                    <div className="horizontal-line"></div>
                    
        </div>
        <div>

            <div className="degree">
                    <p className="thisparagraph">What obstacles hinder progress?<FaThumbtack size={20} style={{color: "transparent", marginRight: "1px"}}/></p>
                            

                    <div className="degree">
                        <p className="imagedistance"><FaComment size={15} style={{color: "#000", marginRight: "0"}}/></p>
                        <p className="imagedistance"><FaSmile size={15} style={{color: "#000", marginRight: "0"}}/></p>
                        <p className="imagedistance"><FaEye size={15} style={{color: "#000", marginRight: "0"}}/></p>
                    </div>
                    
                    <div>
                    <h5><Link to="/Comments">Recent Activity</Link></h5>
                    </div>
                    <div>
                    <p><Link to="/Comments"> <FaEllipsisV size={20} style={{color: "transparent", marginRight: "1px"}}/> </Link></p>
                    </div>
            </div>

            <div className="horizontal-line"></div>

        </div>


         
                
            <div>
                <div className="degree">
                        <p className="h4style"><Link to="/Topic2" className="link-nostyle">What obstacles hinder progress?</Link><FaThumbtack size={20} style={{color: "#000", marginRight: "1px"}}/></p>
                                

                        <div className="degree">
                            <p className="digitdistance">0</p>
                            <p className="digitdistance">0</p>
                            <p className="digitdistance">12</p>
                        </div>
                        
                        <div>
                        <p><Link to="/Topic" className="link-nostyle"> <FaUserCircle size={20} style={{color: "#000", marginRight: "1px"}}/> Jul 1</Link></p>
                        </div>
                        <div>
                        <p><Link to="/Topic" className="link-nostyle"> <FaEllipsisV size={20} style={{color: "#000", marginRight: "1px"}}/> </Link></p>
                        </div>

                        
                     </div> 
                     <div className="horizontal-line"></div>
            </div>


            <div>
                <div className="degree">
                        <p className="h4style"><Link to="/Topic2" className="link-nostyle">How can we conquer our limits?</Link><FaThumbtack size={20} style={{color: "transparent", marginRight: "1px"}}/></p>
                                

                        <div className="degree">
                            <p className="digitdistance">0</p>
                            <p className="digitdistance">0</p>
                            <p className="digitdistance">38</p>
                        </div>
                        
                        <div>
                        <p><Link to="/Topic" className="link-nostyle"> <FaUserCircle size={20} style={{color: "#000", marginRight: "1px"}}/> Jul 1</Link></p>
                        </div>
                        <div>
                        <p><Link to="/Topic" className="link-nostyle"> <FaEllipsisV size={20} style={{color: "#000", marginRight: "1px"}}/> </Link></p>
                        </div>

                        
                     </div> 
                     <div className="horizontal-line"></div>
                     <div>
                <div className="degree">
                        <p className="h4style"><Link to="/Topic2" className="link-nostyle">Chances arising from hardships?</Link><FaThumbtack size={20} style={{color: "transparent", marginRight: "1px"}}/></p>
                                

                        <div className="degree">
                            <p className="digitdistance">0</p>
                            <p className="digitdistance">0</p>
                            <p className="digitdistance">12</p>
                        </div>
                        
                        <div>
                        <p><Link to="/Topic" className="link-nostyle"> <FaUserCircle size={20} style={{color: "#000", marginRight: "1px"}}/> Jul 1</Link></p>
                        </div>
                        <div>
                        <p><Link to="/Topic" className="link-nostyle"> <FaEllipsisV size={20} style={{color: "#000", marginRight: "1px"}}/> </Link></p>
                        </div>

                        
                     </div> 
                     <div className="horizontal-line"></div>
            </div>

            <div className="degree">
                        <p className="h4style"><Link to="/Topic2" className="link-nostyle">Better process for collaboration?</Link><FaThumbtack size={20} style={{color: "transparent", marginRight: "1px"}}/></p>
                                

                        <div className="degree">
                            <p className="digitdistance">0</p>
                            <p className="digitdistance">0</p>
                            <p className="digitdistance">38</p>
                        </div>
                        
                        <div>
                        <p><Link to="/Topic" className="link-nostyle"> <FaUserCircle size={20} style={{color: "#000", marginRight: "1px"}}/> Jul 1</Link></p>
                        </div>
                        <div>
                        <p><Link to="/Topic" className="link-nostyle"> <FaEllipsisV size={20} style={{color: "#000", marginRight: "1px"}}/> </Link></p>
                        </div>

                        
                     </div> 
                     
                     <div>
                        
                     </div>

            

            </div>




  



            </div>
    );
}


export default ChallengesCard;