import React from "react";
import './Navbar.css';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="toppart">
                <h1 className="logo"><Link to="/">Our Community </Link> </h1>
            </div>
            <ul className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/Forum">Forum</Link>
                </li>
                <li>
                    <Link to="/InsideBlog">Blog</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link t="/LogIn">Log In</Link>
                </li>
                
                

            </ul>
        </div>
    );
}

export default Navbar;