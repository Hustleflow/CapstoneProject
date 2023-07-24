import "./Topic.css";
import React from "react";
import Header from "../Components/ForumLayouts/Header";
import TopicContent from "../Components/CommentsLayouts/TopicContent";
import Footer from "../Layouts/Footer";

const Topic = () => {
    return (
        <div>
            <Header />
            <TopicContent/>
            <Footer />
        </div>
    );
}

export default Topic;