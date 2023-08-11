import "./Topic.css";
import React from "react";
import Header from "../Components/ForumLayouts/Header";
import TopicContent3 from "../Components/CommentsLayouts/TopicContent3";
import Footer from "../Layouts/Footer";


const Topic3 = () => {
    return (
        <div>
            <Header />
            <TopicContent3/>
         
            <Footer />
        </div>
    );
}

export default Topic3;