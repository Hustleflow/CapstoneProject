import React from "react";
import Header from "../Components/ForumLayouts/Header";
import LeadershipComment from "../Components/CommentsLayouts/LeadershipComment";
import Footer from "../Layouts/Footer";
import LeadershipCard from "../Components/CommentsLayouts/LeadershipCard";

const LeadershipRoles = () => {

    return (
        <div>
            <Header />
            <LeadershipComment />
            <LeadershipCard />
            <Footer />
            
        </div>
    );
}

export default LeadershipRoles;