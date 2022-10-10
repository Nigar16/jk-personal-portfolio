import React from "react";
import icon from "../../assets/icons/iconmac.svg";
const ProjectServices = () => {
  return (
    <>

  <div className="flex w-full lg:flex-col justify-end lg:items-center overflow-hidden">
    <div className="flex px-8">
      <img src={icon} />
      <div className="pl-4 text-[#fff] "> 
        <h1 className="text-[32px] font-[700]">500+</h1>
        <p className="text-[16px] font-[400]">Completed projects</p>
      </div>
    </div>

    <div className="flex px-8 ">
      <img src={icon} />
      <div className="pl-4 text-[#fff] ">
        <h1 className="text-[32px] font-[700]">500+</h1>
        <p className="text-[16px] font-[400]">Completed projects</p>
      </div>
    </div>
</div>
    <div className="flex w-full lg:flex-col overflow-hidden justify-start lg:items-center">
    <div className="flex px-8">
      <img src={icon} />
      <div className="pl-4 text-[#fff] ">
        <h1 className="text-[32px] font-[700]">500+</h1>
        <p className="text-[16px] font-[400]">Completed projects</p>
      </div>
    </div>
    <div className="flex px-8">
      <img src={icon} />
      <div className="pl-4 text-[#fff] ">
        <h1 className="text-[32px] font-[700]">500+</h1>
        <p className="text-[16px] font-[400]">Completed projects</p>
      </div>
      </div>
    </div>
   
    </>
  );
};

export default ProjectServices;
