import React from "react";
import Hero from "../views/Hero";
import HomeCourses from "../views/HomeCourses";
import Services from "../views/Services";
import AboutMe from "../views/AboutMe";
import storageprojects from "../../storage-projects";
import Projects from "../views/Projects";
import ProjectItem from "../../components/items/Project-item";
import CourseItem from "../../components/items/Course-Item";
import BlogPosts from "../views/BlogPosts";
import storageCourses from "../../storage-courses";
import storagearticles from "../../storage-articles";
import Articles from "../views/Articles";
import ArticleItem from "../../components/items/Article-item";
const Home = (props) => {
  const Item = storageprojects.map((item, index) => {
    return <ProjectItem item={item} />;
  });

  const articleItem = storagearticles.map((item, index) => {
    return <ArticleItem item={item}/>;
  });
  return (
    <div className=" ">
      <Hero />
      <AboutMe />
      <Projects Item={Item} />
      <Services />
      <HomeCourses />
      <Articles articleItem={articleItem}/>
      <BlogPosts />
    </div>
  );
};

export default Home;
