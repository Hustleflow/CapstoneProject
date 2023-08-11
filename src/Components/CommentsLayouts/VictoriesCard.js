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

const VictoriesCard = () => {
    return (
        <div className="variant-container">
                 
        <div>
                    <div className="degree">
                            <h4 className="h4style">VICTORIES | Sort by: <button>Recent Activity</button></h4>
                        

                            <div className="degree">
                                <p><Link to="/Victories" className="btn"> <FaBell size={15} style={{color: "#000", marginRight: "1px"}}/> Follow Category</Link></p>
                                <p><Link to="/Victories" className="btn-light">Create New Post</Link></p>
                            </div>
                            


                    </div> 

                    <div className="horizontal-line"></div>
                    
        </div>
        <div>

            <div className="degree">
                    <p className="thisparagraph">A well-deserved celebration for all.<FaThumbtack size={20} style={{color: "transparent", marginRight: "1px"}}/></p>
                            

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
                        <p className="h4style"><Link to="/Topic3" className="link-nostyle">A well-deserved celebration for all.</Link><FaThumbtack size={20} style={{color: "#000", marginRight: "1px"}}/></p>
                                

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
                        <p className="h4style"><Link to="/Topic3" className="link-nostyle">Cheers to our finance department!</Link><FaThumbtack size={20} style={{color: "transparent", marginRight: "1px"}}/></p>
                                

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
                        <p className="h4style"><Link to="/Topic3" className="link-nostyle">Winner for the raffle ticket goes to!</Link><FaThumbtack size={20} style={{color: "transparent", marginRight: "1px"}}/></p>
                                

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
                        <p className="h4style"><Link to="/Topic3" className="link-nostyle">Gifts of Appreciation to employees</Link><FaThumbtack size={20} style={{color: "transparent", marginRight: "1px"}}/></p>
                                

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


export default VictoriesCard;