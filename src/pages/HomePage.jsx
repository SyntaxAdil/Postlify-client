import React from "react";
import Navbar from "./../components/Navbar";
import PostCreate from './../components/PostCreate';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="my-20 max-w-6xl mx-auto">
        <PostCreate/>
        {/* <Posty/> */}
      </main>
    </>
  );
};

export default HomePage;
