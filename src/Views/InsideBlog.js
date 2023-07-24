import "./InsideBlog.css";
import React from "react";
import Article from "../Components/BlogLayouts/Article";
import Header from "../Components/ForumLayouts/Header";
import Footer from "../Layouts/Footer";

const InsideBlog = () => {
    return (
        <div>
            
            <Header />
            <Article />
            <Footer />
        </div>
    );
}

export default InsideBlog;