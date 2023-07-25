import "./TopicContent.css";
import React from "react";
import axios from "axios";

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
} from "react-icons/fa";

const TopicContent = () => {

    const getApi = async () => {
        await axios.get("http://localhost:3077");
    }

    getApi();



    return (
        <div className="variant1-container">
                 
        <div>
                    <div className="degree4">
                    
                            <div>
                                <div className="degree1">
                                    <p><FaUserCircle  size={20} style={{color: "#000", marginRight: "1px"}}/>Admin<FaCrown size={17} style={{color: "#000", marginRight: "1px"}}/></p>
                                                         
                                </div>

                                <p>How has our logistics evolved?</p>
                                <Link>in Logistics </Link>    

                                <p className="this-paragraph">Lorem ipsum dolor sit amet. Est quasi fuga aut earum consequatur qui porro provident sed placeat explicabo ut molestiae autem. Rem sint architecto ut molestias odit cum natus aperiam ea sint ullam sit inventore dolorem non dolor totam. Qui doloremque odit qui alias nostrum est quibusdam excepturi eum odit quia et cupiditate praesentium nam architecto ipsa.</p>                        
                            </div>

                                                    
                     
                       


                                     <div>
                                        <div  className="degree2">
                                            <p><Link to="/Comments" className="btn1"> <FaBell size={15} style={{color: "#000", marginRight: "1px"}}/> Follow Category</Link></p>
                                            <p><Link to="/Comments" className="btn1-light">Comment</Link></p>
                                        </div>

                                            <p> <FaEye size={15} style={{color: "#000", marginRight: "0"}}/> 60 views</p>
                                            <p> <FaComment size={15} style={{color: "#000", marginRight: "0"}}/> 0 comments</p>
                                            <h5 className="Similar">Similar Posts</h5>
                                            <p className="example">Staff Updates</p>
                                            <p className="example">Work Challenges</p> 

                                    </div>
                                        
                    </div> 

              
                    
        </div>
        


         
                
  

           

      


  



            </div>
    );
}


export default TopicContent;