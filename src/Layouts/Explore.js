import "./Explore.css";
import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
    return (
        <div className="forumhead1">
            <h1>EXPLORE THE</h1>
            <h1>FORUM</h1>
            <p>Join our discussions about topics that directly relate to your Career with us.</p>
            <Link className="explore-button" to="/Forum">Enter Now</Link>
        </div>
    );
}

export default Explore;