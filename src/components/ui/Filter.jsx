import React, { useState } from "react";
import Slider from "react-slick";

const Filter = ({ categories, parentCallback, localStorage }) => {
const [Active, setActive] = useState(null);
  const getValue = (e) => {
    const currentValue = e.target.value;
    const filteredStorage = localStorage.filter((item) => {
      return item.category === currentValue;
    });
    console.log(filteredStorage);

    parentCallback(filteredStorage);
    setActive(filteredStorage[0].category);
  };

  const responsive = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  const renderedItems = categories.map((category, index) => {
    const active =
      category === Active
        ? "bg-[#fff] text-[#1E4F99] border-none rounded-[6px] "
        : "";
    return (
      <button
        id={index}
        key={index}
        onClick={getValue}
        className={`filter-button lg:mx-2   hover:text-[#1E4F99] lg:hover:bg-[#F2FAFF] px-12 lg:px-0  lg:w-[110px]    py-2  lg:bg-[#338FE8] lg:text-[#fff] ${active}`}
        value={category}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="scroll w-full container mr-auto ml-auto lg:overflow-x-auto ml-auto mr-auto flex justify-between">
      <div className="w-full flex justify-between">
        <div className="hidden lg:block w-full flex justify-between" >
        <Slider arrows={false} {...settings} responsive={responsive}>
          {renderedItems}
        </Slider>
        </div>

        <div className="block w-full flex justify-between lg:hidden ">{renderedItems}</div>
      </div>
    </div>
  );
};

export default Filter;
