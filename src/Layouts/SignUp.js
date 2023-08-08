import "./SignUp.css";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
        <div className="signuphead">
            <div className="reveal">
                <h2>Sign up now to receive our</h2>
                <h2>weekly newsletter.</h2>
                <p className="this-paragraph3">"Don't miss out on the latest updates and exclusive content! Sign up now to receive our weekly newsletter and stay informed with curated articles, valuable insights, and exciting offers delivered straight to your inbox."</p>
                <div>
                    <input className="inputsubscribe" type="text" placeholder="Enter your email here*"/>
                    <Link className="signup-button"  to="/">Subscribe Now</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;