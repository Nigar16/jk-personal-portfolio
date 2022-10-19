import React, { useState } from "react";
import ProjectServices from "../views/ProjectServices";
import ProjectItem from "../../components/items/Project-item";
import storageprojects from "../../storage-projects";
import "../../assets/css/index.css";
import { useContext } from "react";

export default function ProjectsPage() {
  const [storage, setStorage] = useState(storageprojects);
  const [isActive, setIsActive] = useState(null);
  const categories = [
    "Ecommerce",
    "Portfolio",
    "Blog",
    "type3",
    "type4",
    "type5",
    "type6"
  ];

  const getValue = (e) => {
    const currentValue = e.target.value;
    const filteredStorage = storageprojects.filter((item) => {
      return item.type === currentValue;
    });
    setIsActive(filteredStorage[0].type);
    setStorage(filteredStorage);
  };
  console.log(isActive)
  
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
      <div className="services-section grid relative grid-cols-4 lg:grid-cols-2 place-items-center  sm:flex-col  py-8 w-full bg-[#1E4F99] overflow-hidden    my-24">
        <div className="rounded-[50%] border-[#338FE8] absolute left-0 translate-x-[-105px]  border-[1px] sm:translate-y-[-70px] w-[150px] h-[150px]  ">
          <div className="rounded-[50%] ml-auto mr-auto border-[#338FE8] mt-[15%] border-[1px] w-[100px] h-[100px]"></div>
        </div>
        <ProjectServices />
        <div className="rounded-[50%] border-[#338FE8] absolute right-0 translate-x-[105px]  border-[1px] w-[150px] h-[150px] sm:translate-y-[70px]  ">
          <div className="rounded-[50%] ml-auto mr-auto border-[#338FE8] mt-[15%] border-[1px] w-[100px] h-[100px]"></div>
        </div>
        <img className="one" src={require("../../assets/images/Vector.png")} />
        <img className="two" src={require("../../assets/images/Vector.png")} />
        <img
          className="three"
          src={require("../../assets/images/Vector.png")}
        />
        <img className="four" src={require("../../assets/images/Vector.png")} />
        <img className="five" src={require("../../assets/images/Vector.png")} />
      </div>
      <div className="lg:w-full w-[88%] relative  container  mt-12 py-2 px-2 bg-[#F2FAFF] mr-auto  ml-auto flex items-center whitespace-nowrap   lg:bg-white justify-between">
        <div className="scroll overflow-auto px-4 w-[100%] container  mr-auto ml-auto lg:overflow-x-auto ml-auto mr-auto flex justify-between">
          
          {categories.map((type, index) => {
            const active=type===isActive?'bg-[#fff] text-[#1E4F99] border-none rounded-[6px] ':'';
            return (
              <>
              <button
                id={index}
                onClick={getValue}
                value={type}
                className={`filter-button   hover:text-[#1E4F99] lg:hover:bg-[#F2FAFF] px-12 py-2  lg:bg-[#338FE8] lg:text-[#fff] ${active}`}
              >
                {type}
              </button>
              
              </>
            );
          })}

          {/* <button
            id="1"
            onClick={getValue}
            className={`${isActive} hover:bg-[#fff] mx-4 hover:text-[#1E4F99] lg:hover:bg-[#F2FAFF] px-4 py-2 rounded-[6px]  lg:bg-[#338FE8] lg:text-[#fff]`}
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
          </button> */}
        </div>
      </div>
      <div className="grid mt-16 place-items-center w-[90%]  mr-auto ml-auto gap-y-8 gap-x-4 grid-cols-3 xl:grid-cols-2 lg:flex flex-col">
        {storage.map((item) => {
          return <ProjectItem item={item} />;
        })}
      </div>
    </section>
  );
}
