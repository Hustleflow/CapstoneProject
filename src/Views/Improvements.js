import React from "react";
import Header from "../Components/ForumLayouts/Header";
import ImprovementsComment from "../Components/CommentsLayouts/ImprovementsComment";
import Footer from "../Layouts/Footer";
import ImprovementsCard from "../Components/CommentsLayouts/ImprovementsCard";

const Improvements = () => {
    return (
        <div>
            <Header />
            <ImprovementsComment />
            <ImprovementsCard />
            <Footer />
            
        </div>
    );
}

export default Improvements;