import "./SignUp.css";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="signuphead">
            <h2>Sign up now to receive our</h2>
            <h2>weekly newsletter.</h2>
            <p className="this-paragraph3">"Don't miss out on the latest updates and exclusive content! Sign up now to receive our weekly newsletter and stay informed with curated articles, valuable insights, and exciting offers delivered straight to your inbox."</p>
            <div>
                <input className="inputsubscribe" type="text" placeholder="Enter your email here*"/>
                <Link className="signup-button"  to="/">Subscribe Now</Link>
            </div>
        </div>
    );
}

export default SignUp;