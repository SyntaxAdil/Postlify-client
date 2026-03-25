import React from "react";
import Navbar from "./../components/Navbar";
import PostCreate from './../components/PostCreate';
import Posty from "../components/Posty";

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
