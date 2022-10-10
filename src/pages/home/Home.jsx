import React from "react";
import Hero from "./Hero";
import HomeCourses from "./HomeCourses";
import Services from "../views/Services";
import AboutMe from "../views/AboutMe";

import Projects from "./Projects";

import BlogPosts from "../views/BlogPosts";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <AboutMe />
      <Projects />
      <Services />

      <HomeCourses />

        <BlogPosts/>

    </div>
  );
};

export default Home;
