import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import storageCourses from "../../storage-courses";
import EventItem from "../../components/items/Event-Item";

const InnerEvent = () => {
  const [course, setCourse] = useState({});
  const { courseid } = useParams();

  const getCourses = () => {
    const newProduct = storageCourses.find(
      (item) => item.id === parseInt(courseid)
    );
    setCourse(newProduct);
    console.log(course);
  };
  useEffect(() => {
    getCourses();
  });
  return (
    <section className="pt-28">
      <div className="flex  w-[90%] mr-auto ml-auto justify-around lg:flex-col">
        <div className="w-[100%] mr-auto ml-auto">
          <img className="w-[600px] ml-auto mr-auto lg:w-[100%]" alt="courseImg" src={course.image} />
        </div>
        <div className="w-[100%] pl-2 lg:pt-16">
          <h1 className="text-16 pb-2 font-[600]">{course.title}</h1>
          <p className="text-8">
           {course.content}
          </p>
        </div>
      </div>


        <div className="grid-container pt-24 grid grid-rows-2 mr-auto ml-auto w-[90%]  lg:flex flex-col grid-flow-col place-items-center grid-cols-3 gap-2 ">
          {storageCourses
            .filter((item, index) => index < 5)
            .map((item) => {
              return <EventItem item={item} />;
            })}
        </div>
    </section>
  );
};

export default InnerEvent;
