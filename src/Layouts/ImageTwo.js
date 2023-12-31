import "./ImageTwo.css";
import React from "react";
import BrainStorm from "../../src/Assets/brainstorming.png";
import PaintMind from "../../src/Assets/Paintthemind.jpg";
import BuildingBlocks from "../../src/Assets/BuildingBlocks.jpg";
import KeyBlocks from "../../src/Assets/KeyBlocks.jpg";

const ImageTwo = () => {

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
      <div className="tocontain reveal">
        <img className="image1" src={BrainStorm} alt="Brain" />
        <img className="image2" src={PaintMind} alt="Paint" />
        <img className="image3" src={BuildingBlocks} alt="Paint" />
        <img className="image4" src={KeyBlocks} alt="Paint" />
      </div>
    </div>
  );
};

export default ImageTwo;
