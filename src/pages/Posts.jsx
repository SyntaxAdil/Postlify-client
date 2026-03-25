import React from "react";
import Navbar from "./../components/Navbar";
import FeedPosts from "../components/FeedPosts";

const Posts = () => {
  return (
    <>
      <Navbar />
      <main className="my-20 max-w-6xl mx-auto">
        <FeedPosts />
        {/* <Posty/> */}
      </main>
    </>
  );
};

export default Posts;
