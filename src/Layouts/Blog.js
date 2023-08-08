import "./Blog.css";
import React from "react";
import { Link } from "react-router-dom";
import Abstract from "../../src/Assets/Abstract.jpg";

const Blog = () => {
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
            <div className="blog-container reveal">
                <div className="blog-content">
                <h2> Check out our new blog</h2>
                <p className="blog-paragraph">"Introducing our new blog - an exciting collection of fresh and engaging content that will captivate your interests. Check it out now and embark on a journey of knowledge and inspiration."</p>
                <Link className="blog-button" to="/InsideBlog">Enter Now</Link>
                </div>
           
                    <img className="blog-image" src={Abstract} alt="abstract"/>
        

            </div>

        </div>
    );
}

export default Blog;