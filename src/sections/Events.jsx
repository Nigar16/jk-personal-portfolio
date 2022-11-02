import React, { memo } from "react";
import storageCourses from "../storage-courses";
import "../assets/css/homeCourses.css";
import SeeAll from "../components/ui/SeeAll";
import EventItem from "../components/items/Event-Item";
const Events = memo(({ amount = 5 }) => {

  const pathName = window.location.pathname;
  return (
    <section className="pt-24 w-[90%] mr-auto ml-auto">
      <div className=" mb-4 items-center mr-auto ml-auto flex justify-between ">
        <h1 className="font-[700] text-[32px]">Events</h1>
        <SeeAll navigation="courses" />
      </div>
      <div className={` gap-y-2 gap-x-2 grid grid-cols-3 lg:flex lg:flex-col`}>
        {storageCourses
          .filter((item, index) => index < 5)
          .map((item,index) => {
            return <div key={index} className={window.innerWidth>=1220 && pathName==="/" && `grid-container`}><EventItem item={item} /></div>;
          })}
      </div>
    </section>
  );
});
export default Events;
