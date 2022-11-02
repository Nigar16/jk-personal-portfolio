import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import arrow from "../../assets/icons/arrow.svg";
import "../../assets/css/sliderarrow.css";

const ProjectSlider = (props) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={arrow}  alt="prevArrow" {...props} />
  );
  const SampleNextArrow = ({ currentSlide, slideCount, ...props }) => (
    <img src={arrow}  alt="nextArrow" {...props} />
  );
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
    prevArrow: <SlickArrowLeft/>
   
  };


  return (
    <div className="card__container   pt-4">
      <Slider
        responsive={responsive}
        className="card__container__inner"
        {...settings}
      >
        {props.items}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
