import React from "react";
import Hero from "../views/Hero";
import HomeCourses from "../views/HomeCourses";
import Services from "../views/Services";
import AboutMe from "../views/AboutMe";

import Projects from "../views/Projects";

import BlogPosts from "../views/BlogPosts";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <AboutMe />
      <Projects />
      <Services />
      <HomeCourses />
      <BlogPosts />
    </div>
  );
};

export default Home;
