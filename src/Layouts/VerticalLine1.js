import "./VerticalLine1.css";

import React from "react";

const VerticalLine1 = () => {
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
      <div className="vertical1 reveal"></div>
    </div>
  );
}


export default VerticalLine1;   