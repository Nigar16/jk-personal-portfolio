import React, { useState } from "react";
import ProjectServices from "./ProjectServices";
import ProjectItem from "./Project-item";
import storageprojects from "../../storage-projects";
import ProjectFilter from "./ProjectFilter";
import { useContext } from "react";

export default function ProjectsPage() {
  const [storage, setStorage] = useState(storageprojects);
  const [isActive, setIsActive] = useState("");

  const getValue = (e) => {
    const currentValue = e.target.value;
    const filteredStorage = storageprojects.filter((item) => {
      return item.type === currentValue;
    });
    setIsActive(active);
    setStorage(filteredStorage);
  };
  const active = "bg-[#fff]";
  return (
    <section className="pt-24">
      <div className="w-[90%] mr-auto ml-auto flex flex-col ">
        <h1 className="text-[2rem] pb-4 font-[700]">My Projects</h1>
        <p>
          I'm an enthusiastic and highly motivated Software Engineer experienced
          in developing reliable and user-friendly web-based solutions in
          different domains, especially experience in the FinTech and Healthcare
          domains. I love the challenge of diving head first into complex
          development and engineering challenges and revolving them into a
          solution that adds real value to the customers' business processes. I
          am a quick learner and experienced at problem-solving.
        </p>
      </div>
      <div className="flex justify-center sm:flex-col  py-8 w-full bg-[#1E4F99]   my-24">
        <ProjectServices />
      </div>
      {/* <ProjectFilter   projectTypes ={projectTypes} /> */}
      <div className="lg:w-full w-[90%]  container   mt-12 py-2 px-4 bg-[#F2FAFF] mr-auto  ml-auto flex items-center whitespace-nowrap   lg:bg-white justify-between">
        <div className="scroll w-[100%] container mr-auto ml-auto lg:overflow-x-auto ml-auto mr-auto flex justify-between">
          <button
            id="1"
            onClick={getValue}
            className={`hover:bg-[#fff] mx-4 hover:text-[#1E4F99] lg:hover:bg-[#F2FAFF] px-4 py-2 rounded-[6px]  lg:bg-[#338FE8] lg:text-[#fff]`}
            value={"Ecommerce"}
          >
            Ecommerce
          </button>
          <button
            id="2"
            onClick={getValue}
            className={`hover:bg-[#fff] mx-4 hover:text-[#1E4F99] lg:hover:bg-[#F2FAFF] px-4 py-2 rounded-[6px] lg:bg-[#338FE8] lg:text-[#fff]`}
            value={"Portfolio"}
          >
            Portfolio
          </button>
          <button
            id="3"
            onClick={getValue}
            className="hover:bg-[#fff] mx-4 hover:text-[#1E4F99] px-4 py-2 lg:hover:bg-[#F2FAFF] rounded-[6px] lg:bg-[#338FE8] lg:text-[#fff]"
            value={"Blog"}
          >
            Blog
          </button>

          <button
            id="4"
            onClick={getValue}
            className="hover:bg-[#fff] mx-4 hover:text-[#1E4F99] px-4 py-2 rounded-[6px] lg:bg-[#338FE8] lg:hover:bg-[#F2FAFF] lg:text-[#fff]"
            value={"Portfolio"}
          >
            Portfolio
          </button>
          <button
            id="5"
            onClick={getValue}
            className="hover:bg-[#fff] mx-4 hover:text-[#1E4F99] px-4 py-2 rounded-[6px] lg:bg-[#338FE8] lg:hover:bg-[#F2FAFF] lg:text-[#fff]"
            value={"Blog"}
          >
            Portfolio
          </button>
          <button
            id="6"
            onClick={getValue}
            className="hover:bg-[#fff] mx-4 hover:text-[#1E4F99] lg:hover:bg-[#F2FAFF] px-4 py-2 rounded-[6px] lg:bg-[#338FE8] lg:text-[#fff]"
            value={"Ecommerce"}
          >
            Ecommerce
          </button>
        </div>
      </div>
      <div className="grid mt-16 place-items-center w-[95%] mr-auto ml-auto gap-y-8 gap-x-4 grid-cols-3 xl:grid-cols-2 lg:flex flex-col">
        {storage.map((item) => {
          return <ProjectItem item={item} />;
        })}
      </div>
    </section>
  );
}
