import React from "react";
import Hero from "./Hero";
import HomeCourses from "./HomeCourses";
import Services from "../views/Services";
import AboutMe from "../views/AboutMe";
const Home = () => {
  return (
    <div className=" ">
      <Hero /> 
      <AboutMe />
      <HomeCourses />
      <Services />
    </div>
  );
};

export default Home;
