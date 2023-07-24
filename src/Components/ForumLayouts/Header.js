import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <div className="headername">
             <h1><Link to="/">Our Community </Link> </h1>
            </div>
            <div>
            <ul className="headerlist">
                <li className="list-style">Communitytalk</li>
                <li className="list-style"><Link to="/Log-In">Log In</Link></li>
            </ul>
            </div>
        </div>
    );
}

export default Header;