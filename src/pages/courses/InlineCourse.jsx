import React, { memo, useState, useEffect } from "react";
import img from "../../assets/images/CourseIMg.png";
import CourseItem from "./Course-Item";

import { useParams } from "react-router-dom";
import storageCourses from "../../storage-courses";

const InlineCourse = () => {
  const [product, setProduct] = useState({});
  const { courseid } = useParams();

  const getCourses = () => {
    const newProduct = storageCourses.find(
      (item) => item.id === parseInt(courseid)
    );
    setProduct(newProduct);
    console.log(product);
  };
  useEffect(() => {
    getCourses();
  });
  return (
    <section className="pt-28">
      <div className="flex  w-[90%] mr-auto ml-auto justify-around lg:flex-col">
        <div className="w-[100%] mr-auto ml-auto">
          <img className="w-[600px] ml-auto mr-auto lg:w-[100%]" src={product.image} />
        </div>
        <div className="w-[100%] pl-2 lg:pt-16">
          <h1 className="text-16 pb-2 font-[600]">{product.title}</h1>
          <p className="text-8">
           {product.content}
          </p>
        </div>
      </div>


        <div className="grid-container pt-24 grid grid-rows-2 mr-auto ml-auto w-[90%]  lg:flex flex-col grid-flow-col place-items-center grid-cols-3 gap-2 ">
          {/* {getTillNumbers(amount).map((num) => {
             return  <div><CourseItem /></div>
          })} */}
          {storageCourses
            .filter((item, index) => index < 5)
            .map((item) => {
              return <CourseItem item={item} />;
            })}
        </div>
    </section>
  );
};

export default InlineCourse;
