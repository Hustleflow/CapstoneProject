import "./ImageTwo.css";
import React from "react";
import BrainStorm from "../../src/Assets/brainstorming.png";
import PaintMind from "../../src/Assets/Paintthemind.jpg";

const ImageTwo = () => {
  return (
    <div>
      <div className="tocontain">
        <img className="image1" src={BrainStorm} alt="Brain" />
        <img className="image2" src={PaintMind} alt="Paint" />
      </div>
    </div>
  );
};

export default ImageTwo;
