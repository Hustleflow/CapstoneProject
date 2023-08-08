import React from "react";
import Header from "../Components/ForumLayouts/Header";
import ShortLongComment from "../Components/CommentsLayouts/ShortLongComment";
import Footer from "../Layouts/Footer";
import ShortLongCard from "../Components/CommentsLayouts/ShortLongCard";

const ShortLong = () => {

    return (
        <div>
            <Header />
            <ShortLongComment />
            <ShortLongCard />
            <Footer />
            
        </div>
    );
}

export default ShortLong;