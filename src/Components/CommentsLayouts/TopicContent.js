import "./TopicContent.css";
import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



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
    };

    useEffect ( () => {
        getApi();
    }, []) 
    

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);




    const sendData = async () => {
        await axios.post("http://localhost:3077/tasks", {task})
        setTaskList([...taskList, {task}]);
        setTask('');
    };





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

                                <p className="this-paragraph">E-commerce and the rise of online shopping have driven the demand for faster and more reliable deliveries, leading to the adoption of new delivery methods, such as drone and autonomous vehicle deliveries, last-mile innovations, and same-day or even one-hour delivery services. These changes have pushed logistics providers to develop more agile and flexible delivery networks to meet customer demands.</p>

                                <ul className="commentList">
                                    {taskList.map((task) => (
                                    <li >{task.task}</li>
                                        ))}
                                </ul>

                                <div>
                                        

                                        <input className="input1" value={task} type="text" placeholder="'Type your comment here'" onChange={(event) => setTask(event.target.value)}/> 
                                        
                                        <button className="btn7-light" onClick={() => sendData()} disabled={task === '' || !task}>Comment</button>
                                </div>                      
                            </div>

                                                    
                     
                       


                                     <div>
                                        <div>
                                            <p><Link to="/Comments" className="btn1"> <FaBell size={15} style={{color: "#000", marginRight: "1px"}}/> Follow Category</Link></p>
                                            <button className="btn1-light">Comment</button>
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