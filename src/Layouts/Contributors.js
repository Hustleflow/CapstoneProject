import "./Contributors.css";
import React from "react";
import { Link } from "react-router-dom";
import Abstract1 from "../../src/Assets/Abstract1.jpg";

const Contributors = () => {
  return (
    <div>
      <div className="contributor-container">
            <img className="contributor-image" src={Abstract1} alt="abstract" />
             <div className="contributor-content">
                  <h2> Our Community talk are</h2>
                  <h2> looking for</h2>
                  <h2> contributors</h2>
                         <p className="contributor-paragraph">
                         "Our Community Talk is actively seeking contributors who are passionate about sharing their insights, experiences, and expertise. Join us in shaping meaningful discussions and making a positive impact within our vibrant community."
                        </p>
                        <Link className="contributors-button" to="/Contact">Find Out More</Link>
             </div>
      </div>
    </div>
  );
};

export default Contributors;
