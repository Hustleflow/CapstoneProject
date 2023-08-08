import React from "react";
import Header from "../Components/ForumLayouts/Header";
import StaffUpdatesComment from "../Components/CommentsLayouts/StaffUpdatesComment";
import Footer from "../Layouts/Footer";
import StaffUpdateCard from "../Components/CommentsLayouts/StaffUpdateCard";
const StaffUpdates = () => {
    return (
        <div>
            <Header />
            <StaffUpdatesComment />
            <StaffUpdateCard />
            <Footer />
            
        </div>
    );
}

export default StaffUpdates;