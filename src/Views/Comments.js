import React from "react";
import Header from "../Components/ForumLayouts/Header";
import CommentContent from "../Components/CommentsLayouts/CommentContent";
import CommentCard from "../Components/CommentsLayouts/CommentCard";
import Footer from "../Layouts/Footer";

const Comments = () => {
    return (
        <div>
            <Header />
            <CommentContent />
            <CommentCard />
            <Footer />
            
        </div>
    );
}

export default Comments;