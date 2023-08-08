import "./Contributors.css";
import React from "react";
import { Link } from "react-router-dom";
import Abstract1 from "../../src/Assets/Abstract1.jpg";

const Contributors = () => {
  window.addEventListener('scroll', () => {
    reveal();
  });

  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    for(let i =0; i < reveals.length; i++) {

      const windowheight = window.innerHeight;
      const revealtop = reveals[i].getBoundingClientRect().top;
      const revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      }
      else {
        reveals[i].classList.remove('active');
      }
    }
  }
  return (
    <div>
      <div className="contributor-container reveal">
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
