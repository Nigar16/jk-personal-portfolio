import React, { memo, useState, useEffect } from "react";
import img from "../../assets/images/CourseIMg.png";
import ProjectItem from "../../components/items/Project-item";
import { useParams } from "react-router-dom";
import storageprojects from "../../storage-projects";

const InnerProjects = () => {
  const [project, setProject] = useState({});
  const { projectid } = useParams();

  const getCourses = () => {
    const newProduct = storageprojects.find(
      (item) => item.id === parseInt(projectid)
    );
    setProject(newProduct);
    console.log(project);
  };
  useEffect(() => {
    getCourses();
  });
  return (
    <section className="pt-28">
      <div className="flex  w-[90%] mr-auto ml-auto justify-around lg:flex-col">
        <div className="w-[100%] mr-auto ml-auto">
          <img className="w-[600px] ml-auto mr-auto lg:w-[100%]" src={project.image} />
        </div>
        <div className="w-[100%] pl-2 lg:pt-16">
          <h1 className="text-16 pb-2 font-[600]">{project.title}</h1>
          <p className="text-8">
           {project.content}
          </p>
        </div>
      </div>
        <div className="grid-container pt-32 grid grid-rows-2 mr-auto ml-auto w-[90%]  xl:grid-rows-3 xl:grid-cols-2 lg2:flex lg2:flex-col grid-flow-col place-items-center grid-cols-3 gap-2 ">
          {storageprojects
            .filter((item, index) => index < 5)
            .map((item) => {
              return <div className="pt-4 mx-4"><ProjectItem item={item} /></div> ;
            })}
        </div>
    </section>
  );
};

export default InnerProjects;
