import React from "react";
import Header from "../Components/ForumLayouts/Header";
import ChallengesComment from "../Components/CommentsLayouts/ChallengesComment";
import Footer from "../Layouts/Footer";
import ChallengesCard from "../Components/CommentsLayouts/ChallengesCard";

const Challenges = () => {
    return (
        <div>
            <Header />
            <ChallengesComment />
            <ChallengesCard />
            <Footer />
            
        </div>
    );
}

export default Challenges;