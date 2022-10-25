import React from "react";
import Hero from "../sections/Hero";
import Events from "../sections/Events";
import Services from "../sections/Services";
import AboutMe from "../sections/AboutMe";

import Projects from "../sections/Projects";

import BlogPosts from "../sections/BlogPosts";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <AboutMe />
      <Projects />
      <Services />
      <Events />
      <BlogPosts />
    </div>
  );
};

export default Home;
