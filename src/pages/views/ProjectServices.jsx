import React from "react";
import icon from "../../assets/icons/iconmac.svg";
import iconsmile from "../../assets/icons/iconsmile.svg";
import iconclock from "../../assets/icons/iconclock.svg";
import icondrop from "../../assets/icons/icondrop.svg"
const ProjectServices = () => {
  return (
    <>
      <div className="z-10 flex px-8 sm:flex-col items-center sm:text-center sm:mb-4">
        <img className="w-[50px]" className="bg-[#338FE8] p-[14px] rounded-[6px]" src={icon} />
        <div className="pl-4 text-[#fff] ">
          <h1 className="text-[32px] font-[700]">500+</h1>
          <p className="text-[16px] font-[400]">Completed projects</p>
        </div>
      </div>

      <div className="z-10 flex px-8 sm:flex-col items-center sm:text-center sm:mb-4">
        <img src={iconsmile} className="bg-[#338FE8] p-[14px] rounded-[6px]" />
        <div className="pl-4 text-[#fff] ">
          <h1 className="text-[32px] font-[700]">500+</h1>
          <p className="text-[16px] font-[400]">Completed projects</p>
        </div>
      </div>

      <div className="z-10 flex px-8 sm:flex-col items-center sm:text-center">
        <img src={iconclock}  className="bg-[#338FE8] p-[14px] rounded-[6px]"/>
        <div className="pl-4 text-[#fff] ">
          <h1 className="text-[32px] font-[700]">1000+</h1>
          <p className="text-[16px] font-[400]">Completed projects</p>
        </div>
      </div>

      <div className="z-10 flex px-8 sm:flex-col items-center sm:text-center">
        <img src={icondrop} className="bg-[#338FE8] p-[14px] rounded-[6px]"/>
        <div className="pl-4 text-[#fff] ">
          <h1 className="text-[32px] font-[700]">350+</h1>
          <p className="text-[16px] font-[400]">Completed projects</p>
        </div>
      </div>
    </>
  );
};

export default ProjectServices;
