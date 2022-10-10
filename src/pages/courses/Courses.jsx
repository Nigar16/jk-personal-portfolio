import React from "react";
import CourseItem from "./Course-Item";
import storageCourses from "../../storage-courses";
const Course = () => {
  return (
    <section className="w-[90%] mr-auto ml-auto pt-24">
      <div className="w-[90%] mr-auto ml-auto">
        <h1 className="text-[32px] font-[700] pb-4">Courses</h1>
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

      <div className=" w-[90%] mr-auto ml-auto pt-16"> 
        
        <div className="grid-container grid grid-rows-2 mr-auto ml-auto lg:flex flex-col   grid-flow-col place-items-center grid-cols-3 gap-2 ">
          {/* {getTillNumbers(amount).map((num) => {
             return  <div><CourseItem /></div>
          })} */}

          {storageCourses
            .filter((item, index) => index < 5)
            .map((item) => {
              return <CourseItem item={item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Course;
