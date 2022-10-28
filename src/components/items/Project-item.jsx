import React,{memo} from "react";
import { Link } from "react-router-dom";
const ProjectItem = memo(({item}) => {
  return (
    <div className="project-item flex  items-center flex-col  mx-4 w-[384px] lg:w-[100%]">
      <div>
        <img src={item.image} className="rounded-t-[6px]" alt="projectimage" />
      </div>
      <div className="p-4 rounded-b-[6px]  w-[384px]  bg-[#F5F8FA]">
        <span className="text-[#848D96] font-[400]">#bootstrap #react #css #html #javascript</span>
        <h1 className="font-[700] text-2 my-2"> {item.title}</h1>
        <p className="mb-4">{item.content}</p>
        <span className="text-[#338FE8]"><Link to={`/inline-project/${item.id}`}>Details→</Link></span>
      </div>
    </div>
  );
});

export default ProjectItem;
