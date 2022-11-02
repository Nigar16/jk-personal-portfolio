import React from "react";
import JGimg from "../assets/images/Jk.png";
import { ReactComponent as Facebook } from "../assets/icons/facebookfooter.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedinfooter.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagramfooter.svg";
import Companies from "../components/items/Companies";

const Hero = () => {
  return (
    <section className="pt-28 pb-8 lg:pt-24">
      <div className="w-[90%] mr-auto ml-auto grid items-center  lg:place-items-center lg:grid-cols-1 grid-cols-2">
        <div className=""> 
          <h1 className="font-[700] text-[2rem]">Hi, I’m</h1>
          <h1 className="text-[#338FE8] font-[700] text-[4rem]">
            / Javid Khalilov /
          </h1>
          <p className="font-[700] text-[#414448] text-[1.2rem]">
            👨🏻‍💻 {`< Senior Software Developer >`}{" "}
          </p>

          <div className="pr-20 mt-36 lg:hidden">
            <p className="mb-4">Follow me on</p>
            <div className="flex w-[124px] justify-between items-center">
              <a href="src/sections/Hero#" className="cursor-pointer"><Facebook /></a>
              <a href="src/sections/Hero#" className="cursor-pointer"><Linkedin /></a>
              <a href="src/sections/Hero#" className="cursor-pointer"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="pl-20 lg:pl-0">
          <img src={JGimg} alt="myIMage" />
        </div>
      </div>
      <div className="w-full  bg-[#143068]">
        <Companies />
      </div>
    </section>
  );
};

export default Hero;
