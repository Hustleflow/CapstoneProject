import "./Contact.css";
import React from "react";
import Header from "../Components/ForumLayouts/Header";
import ContactDesign from "../Components/ContactLayouts/ContactDesign";
import Footer from "../Layouts/Footer";

const Contact = () => {
    return (
        <div>
            <Header />
            <ContactDesign />
            <Footer />
        </div>
    );
}

export default Contact;