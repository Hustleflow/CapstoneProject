import "./Explore.css";
import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {

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
        <div className="forumhead1">
            <div className="reveal">
            <h1>EXPLORE THE</h1>
            <h1>FORUM</h1>
            <p>Join our discussions about topics that directly relate to your Career with us.</p>
            <Link className="explore-button" to="/Forum">Enter Now</Link>
            </div>
        </div>
    );
}

export default Explore;