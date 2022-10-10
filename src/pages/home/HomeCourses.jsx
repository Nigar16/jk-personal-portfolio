import React, { memo,useEffect} from "react";
import CourseItem from "../courses/Course-Item";
import courseimg from "../../assets/images/CourseIMg.png";
import getTillNumbers from "../../helpers";
import helpers from "../../helpers";
import storageCourses from "../../storage-courses";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SeeAll from '../../components/layout/SeeAll'
const HomeCourses = memo(({ amount = 5 }) => {
const navigate=useNavigate()


  // useEffect(() => {
  //   const gridContainer=document.getElementsByClassName('grid-container')
  //   gridContainer.classList.add("contact-page");
  //   return () => {
  //     gridContainer.classList.remove("contact-page");
  //   };
  // }, []);
  const gridContainer=document.getElementsByClassName('grid-container')

  console.log(storageCourses);
  return (
    <section className="pt-24 w-[90%] mr-auto ml-auto">
      <div>
        <div className=" mb-4 items-center mr-auto ml-auto flex justify-between">
          <h1 className="font-[700] text-[32px]">Courses</h1>
          <SeeAll navigation='courses' />
        </div>
        <div className="grid-container grid  mr-auto ml-auto grid-rows-2 lg:flex flex-col  grid-flow-col place-items-center grid-cols-3  gap-2 ">
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
});
export default HomeCourses;
