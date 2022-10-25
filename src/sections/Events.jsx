import React, { memo, useEffect } from "react";
import courseimg from "../assets/images/CourseIMg.png";
import getTillNumbers from "../helpers/helper";
import helpers from "../helpers/helper";
import storageCourses from "../storage-courses";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../assets/css/homeCourses.css";
import SeeAll from "../components/ui/SeeAll";
import EventItem from "../components/items/Event-Item";
const Events = memo(({ amount = 5 }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const gridContainer=document.getElementsByClassName('grid-container')
  //   gridContainer.classList.add("contact-page");
  //   return () => {
  //     gridContainer.classList.remove("contact-page");
  //   };
  // }, []);

  const pathName = window.location.pathname;
 console.log(window.innerWidth)
  return (
    <section className="pt-24 w-[90%] mr-auto ml-auto">
      <div className=" mb-4 items-center mr-auto ml-auto flex justify-between ">
        <h1 className="font-[700] text-[32px]">Events</h1>
        <SeeAll navigation="courses" />
      </div>
      <div className={` gap-y-2 gap-x-2 grid grid-cols-3 lg:flex lg:flex-col`}>
        {/* {getTillNumbers(amount).map((num) => {
             return  <div><CourseItem /></div>
          })} */}
        {storageCourses
          .filter((item, index) => index < 5)
          .map((item) => {
            return <div className={window.innerWidth>=1220 && pathName=="/" && `grid-container`}><EventItem item={item} /></div>;
          })}
      </div>
    </section>
  );
});
export default Events;
