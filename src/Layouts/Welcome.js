import "./Welcome.css";
import React from "react";

const Welcome = () => {

    window.addEventListener('scroll', () => {
        reveal();
      });
    
      const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
    
        for(let i =0; i < reveals.length; i++) {
    
          const windowheight = window.innerHeight;
          const revealtop = reveals[i].getBoundingClientRect().top;
          const revealpoint = 100;
    
          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
          }
          else {
            reveals[i].classList.remove('active');
          }
        }
      }
    return (
        <div className="welcome reveal">
             <p className="textstyle">WELCOME  TO  THE</p>
                <p className="textstyle">TALK COMMUNITY</p>
        </div>
    );
}

export default Welcome;