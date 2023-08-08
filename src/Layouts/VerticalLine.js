import "./VerticalLine.css";

import React from "react";

const VerticalLine = () => {
  window.addEventListener('scroll', () => {
    reveal();
  });

  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    for(let i =0; i < reveals.length; i++) {

      const windowheight = window.innerHeight;
      const revealtop = reveals[i].getBoundingClientRect().top;
      const revealpoint = 250;

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
      <div className="vertical reveal"></div>
    </div>
  );
}


export default VerticalLine;   