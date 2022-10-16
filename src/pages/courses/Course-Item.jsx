import React, { memo, useState, useEffect } from "react";
import courseimg from "../../assets/images/CourseIMg.png";
import "../../css/courseItem.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CourseItem = memo(({ item }) => {
  const [Class, setClass] = useState("");
  const pathName = window.location.pathname;

  // console.log(pathName);
  // const classHandler = () => {
  //   if (pathName === "/") {
  //     setClass("col-span-1 row-span-2");
  //   }
  // };
  // useEffect(() => {
  //   classHandler();
  // });


  // xl:w-[700px] lg2:w-[80%]  rounded-[6px] px-4   py-8  grid-item
  // xl:w-[200px] xl:h-[200px] lg2:w-[50vw] lg2:h-[20vw]  grid-img
  return (
    <section className="w-full">
      <div
        className={`grid-item flex bg-[#F5F8FA] px-4 py-8  w-[100%] `}
      >
        <div className=" ">
          <img
            className="grid-img object-cover w-[200px] h-[150px] "
            src={item.image}
          />
        </div>
        <div className="grid-content ml-4 flex flex-col">
          <h1 className="font-[700] text-[16px]">{item.title}</h1>
          <p className="mt-2  text-[16px]">
            {item.content.substring(0, 50) + "..."}
          </p>
          <span className="mt-5 cursor-pointer text-[#338FE8]">
            <Link to={`/inline-courses/${item.id}`}>Details →</Link>
          </span>
        </div>
      </div>
    </section>
  );
});
export default CourseItem;
