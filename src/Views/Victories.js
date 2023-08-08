import React from "react";
import Header from "../Components/ForumLayouts/Header";
import VictoriesComment from "../Components/CommentsLayouts/VictoriesComment";
import Footer from "../Layouts/Footer";
import VictoriesCard from "../Components/CommentsLayouts/VictoriesCard";

const Victories = () => {
    return (
        <div>
            <Header />
            <VictoriesComment />
            <VictoriesCard />
            <Footer />
            
        </div>
    );
}

export default Victories;