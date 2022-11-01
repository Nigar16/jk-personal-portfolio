import React, { useState } from "react";
import ProjectStatistics from "../components/items/ProjectStatistics";
import ProjectItem from "../components/items/Project-item";
import storageprojects from "../storage-projects";
import Filter from "../components/ui/Filter";
import "../assets/css/sliderarrow.css";
import "../index.css";
import { useContext } from "react";

export default function Projects() {
  const categories = [
    "Ecommerce",
    "Portfolio",
    "Blog",
    "type3",
    "type4",
    "type5",
    "type6",
  ];
  const [storage, setStorage] = useState(storageprojects);
  const handleCallback = (data) => {
    setStorage(data);
  };
  const [isActive, setIsActive] = useState(null);

  return (
    <section className="pt-24">
      <div className="w-[90%] mr-auto ml-auto flex flex-col ">
        <h1 className="text-[2rem] pb-4 font-[700]">My Projects</h1>
        <p className="text-[#414448]">
          I'm an enthusiastic and highly motivated Software Engineer experienced
          in developing reliable and user-friendly web-based solutions in
          different domains, especially experience in the FinTech and Healthcare
          domains. I love the challenge of diving head first into complex
          development and engineering challenges and revolving them into a
          solution that adds real value to the customers' business processes. I
          am a quick learner and experienced at problem-solving.
        </p>
      </div>
      <div className="bg-[#1E4F99] relative my-12">
      <div className="services-section    flex justify-between  lg:grid lg:grid-cols-2 place-items-center  sm:flex-col  py-8 w-[90%] mr-auto ml-auto overflow-hidden    my-4">
        <div className="rounded-[50%] border-[#338FE8] absolute left-0 translate-x-[-105px]  border-[1px] sm:translate-y-[-70px] w-[150px] h-[150px]  ">
          <div className="rounded-[50%] ml-auto mr-auto border-[#338FE8] mt-[15%] border-[1px] w-[100px] h-[100px]"></div>
        </div>
        <ProjectStatistics/>
        <div className="rounded-[50%] border-[#338FE8] absolute right-0 translate-x-[105px]  border-[1px] w-[150px] h-[150px] sm:translate-y-[70px]  ">
          <div className="rounded-[50%] ml-auto mr-auto border-[#338FE8] mt-[15%] border-[1px] w-[100px] h-[100px]"></div>
        </div>
        <img className="one" src={require("../assets/images/Vector.png")} />
        <img className="two" src={require("../assets/images/Vector.png")} />
        <img className="three" src={require("../assets/images/Vector.png")} />
        <img className="four" src={require("../assets/images/Vector.png")} />
        <img className="five" src={require("../assets/images/Vector.png")} />
      </div>
      </div>
      <div className="lg:w-full w-[90%] relative  container  mt-12 py-2  bg-[#F2FAFF] mr-auto  ml-auto flex items-center whitespace-nowrap   lg:bg-white justify-between">
        <div className="scroll  overflow-auto px-4 w-[100%] container  mr-auto ml-auto lg:overflow-x-auto ml-auto mr-auto flex justify-between">
          <Filter
            categories={categories}
            parentCallback={handleCallback}
            localStorage={storageprojects}
          />
        </div>
      </div>
      <div className="grid grid-flow-auto mt-16 justify-items-stretch  place-items-center w-[90%]  mr-auto ml-auto gap-y-8 gap-x-6 grid-cols-3 xl:grid-cols-2 lg:flex flex-col">
        {storage.map((item,index) => {
          return <ProjectItem key={index} item={item} />;
        })}
      </div>
    </section>
  );
}
