import React from "react";
import ProjectSlider from '../../src/components/items/Slider';
import { useNavigate } from "react-router-dom";
const Articles = (props) => {
    const navigate=useNavigate();
  return (
    <section className="w-[90%] py-20  mt-4 mr-auto ml-auto">
      <div>
        <div className="flex justify-between items-center px-4">
          <h1 className="font-[700] text-[32px]">Articles</h1>
          <span
            className="cursor-pointer text-[#143068]"
            onClick={() => navigate("/articles")}
          >
            See all→
          </span>
        </div>
        <ProjectSlider items={props.articleItem} />
      </div>
    </section>
  );
};

export default Articles;
