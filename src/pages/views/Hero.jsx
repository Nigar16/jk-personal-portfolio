import React from "react";
import { Link } from "react-router-dom";
import JGimg from "../../assets/images/Jk.png";
import { ReactComponent as Facebook } from "../../assets/icons/facebookfooter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedinfooter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagramfooter.svg";
import HeroFooter from "./Hero-Footer";

const Hero = () => {
  return (
    <section className="pt-28 pb-4 lg:pt-24">
      <div className="grid items-center  place-items-center lg:grid-cols-1 grid-cols-2">
        <div className="pr-20"> 
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
              <a  href="#" className="cursor-pointer"><Facebook /></a> 
              <a  href="#"  className="cursor-pointer"><Linkedin /></a> 
              <a  href="#" className="cursor-pointer"><Instagram /></a> 
            </div>
          </div>
        </div>
        <div>
          <img src={JGimg} alt="myIMage" />
        </div>
      </div>
      <div className="">
        <HeroFooter />
      </div>
    </section>
  );
};

export default Hero;
