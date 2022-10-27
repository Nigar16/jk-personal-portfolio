// import React from "react";
import Hero from "../../sections/Hero"
import Events from "../../sections/Events";
// import HomeCourses from "../../"
import Services from "../../sections/Services"
import AboutMe from "../../sections/AboutMe"
import storageprojects from "../../storage-projects";
import Projects from "../../sections/Projects";
import ProjectItem from "../../components/items/Project-item";
import BlogPosts from "../../sections/BlogPosts";
import storagearticles from "../../storage-articles";
import Articles from "../../sections/Articles";
import ArticleItem from "../../components/items/Article-item";
const Home = (props) => {
  
  const Item = storageprojects.map((item, index) => {
    return <ProjectItem key={index} item={item} />;
  });
  const articleItem = storagearticles.map((item, index) => {
    return <ArticleItem key={index} item={item}/>;
  });
 
  return (
    <div className=" ">
      <Hero />
      <AboutMe />
      <Projects Item={Item} />
      <Services />
      <Events />
      <Articles articleItem={articleItem}/>
      <BlogPosts />
    </div>
  );
};

export default Home;
