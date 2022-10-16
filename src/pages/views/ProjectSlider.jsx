import React, { memo } from "react";
import storageprojects from "../../storage-projects";
import Slider from "react-slick";
import ProjectItem from "../../components/items/Project-item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SamplePrevArrow from "../../components/ui/SamplePrevArrow";
import SampleNextArrow from "../../components/ui/SampleNextArrow";
const ProjectSlider = memo(() => {
  const responsive = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>
   
  };


  return (
    <div className="pt-4 ">
      <Slider
        responsive={responsive}
        className="mr-auto ml-auto "
        {...settings}
      >
        {storageprojects
          .map((item, index) => {
            return (
     
                <ProjectItem item={item} />
             
            );
          })}
      </Slider>
    </div>
  );
});

export default ProjectSlider;
