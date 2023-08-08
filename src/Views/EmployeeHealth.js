import React from "react";
import Header from "../Components/ForumLayouts/Header";
import HealthComment from "../Components/CommentsLayouts/HealthComment";
import Footer from "../Layouts/Footer";
import HealthCard from "../Components/CommentsLayouts/HealthCard";

const EmployeeHealth = () => {
    return (
        <div>
            <Header />
            <HealthComment />
            <HealthCard />
            <Footer />
            
        </div>
    );
}

export default EmployeeHealth;