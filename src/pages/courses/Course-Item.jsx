import React, { memo, useState, useEffect } from "react";
import courseimg from "../../assets/images/CourseIMg.png";
import "../../css/courseItem.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CourseItem = memo(({ item }) => {



  return (
    <div
      className={`course-item flex bg-[#F5F8FA] justify-between  rounded-[6px] px-4   h-[100%] py-8  `}
    >
      <div className="">

        <img className="object-cover h-[100px ] w-[250px]" src={item.image} />
      </div>
      <div className="ml-2 flex flex-col">
        <h1 className="font-[700] text-[16px]">{item.title}</h1>
        <p className="mt-2  text-[16px]">
          {item.content.substring(0, 50) + "..."}
        </p>
        <span  className="mt-5 cursor-pointer text-[#338FE8]"><Link to={`/inline-courses/${item.id}`}>Details →</Link></span>
      </div>
    </div>
  );
});
export default CourseItem;
