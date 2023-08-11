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

const TopicContent2 = () => {
    
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

                                <p>What obstacles hinder progress?</p>
                                <Link>in Challenges </Link>    

                                <p className="this-paragraph">Progress can be hindered by various obstacles that require strategic navigation. These challenges include communication breakdowns, resource limitations, and technical issues. Overcoming these hurdles through effective management, clear communication, and adaptive strategies is essential to maintain steady progress.</p>

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
                                            <p><Link to="/Challenges" className="btn1"> <FaBell size={15} style={{color: "#000", marginRight: "1px"}}/> Follow Category</Link></p>
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


export default TopicContent2;