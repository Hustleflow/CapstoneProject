import "./Forum.css";
import React from "react";
import Header from "../Components/ForumLayouts/Header";
import Intro from "../Components/ForumLayouts/Intro";
import Card from "../Components/ForumLayouts/Card";
import Card1 from "../Components/ForumLayouts/Card1";
import Card2 from "../Components/ForumLayouts/Card2";
import Card3 from "../Components/ForumLayouts/Card3";
import Footer from "../Layouts/Footer";

const Forum = () => {
    return (
        <div>
            <Header />
            <Intro />
            <Card />
            <Card1 />
            <Card2 />
            <Card3 />
            <Footer />
            
        </div>
    );
}

export default Forum;