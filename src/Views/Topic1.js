import "./Topic.css";
import React from "react";
import Header from "../Components/ForumLayouts/Header";
import TopicContent1 from "../Components/CommentsLayouts/TopicContent1";
import Footer from "../Layouts/Footer";


const Topic1 = () => {
    return (
        <div>
            <Header />
            <TopicContent1/>
         
            <Footer />
        </div>
    );
}

export default Topic1;