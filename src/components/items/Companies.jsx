import React from "react";
import AzerCosmos from "../../assets/icons/iconazercosmos.svg";
import P from "../../assets/icons/p.svg";
import UfazIcon from "../../assets/icons/ufaz.svg";
import Walk from "../../assets/icons/2walk.svg";
import Javachip from "../../assets/icons/javachip.svg";
import Agbank from "../../assets/icons/agbank.svg";
import Slider from "react-slick";
// import { ReactComponent as Agbank } from "../../assets/icons/agbank.svg";

const Companies = () => {
  const iconData = [
    { id: 2, icon: AzerCosmos },
    { id: 3, icon: Walk },
    { id: 4, icon: Javachip },
    { id: 5, icon: Agbank },
    { id: 6, icon: UfazIcon },
    { id: 7, icon: P },
    { id: 8, icon: AzerCosmos },
    { id: 9, icon: Walk },
    { id: 10, icon: Javachip },
    { id: 11, icon: Agbank },
    { id: 12, icon: P },
  ];

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
  return (
    <section className="flex flex-col  bg-[#143068] w-[90%] mr-auto ml-auto">
      <h1 className="pt-6  text-[#338FE8] ">/ Cooperated companies</h1>
      <div className=" w-full  mr-auto ml-auto ">
        <div className="text-center ">
          <Slider arrows={false} {...settings} responsive={responsive}>
            {iconData.map((item, index) => {
              return (
                <div key={item.id} className=" pb-4 pt-8 text-center align-center">
                  <img alt="company" src={item.icon} className=" " />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Companies;
