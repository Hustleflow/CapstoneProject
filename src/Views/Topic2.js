import "./Topic.css";
import React from "react";
import Header from "../Components/ForumLayouts/Header";
import TopicContent2 from "../Components/CommentsLayouts/TopicContent2";
import Footer from "../Layouts/Footer";


const Topic2 = () => {
    return (
        <div>
            <Header />
            <TopicContent2/>
         
            <Footer />
        </div>
    );
}

export default Topic2;