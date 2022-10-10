import React,{useState} from "react";
import FilterButton from "./FilterButton";
const ProjectFilter = (props) => {

  return (
    <div className="flex w-[90%] mt-12 py-2 bg-[#F2FAFF] rounded-[8px] mr-auto ml-auto justify-around">
      {props.projectTypes.map((item) => {
        return <div key={item.id}><FilterButton  projectTypes={props.projectTypes}>{item.name}</FilterButton></div> 
      })}
    </div>
  );
};

export default ProjectFilter;
