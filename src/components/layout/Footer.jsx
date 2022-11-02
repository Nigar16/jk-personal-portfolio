import React from "react";
import { ReactComponent as Facebook } from "../../assets/icons/facebookfooter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedinfooter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagramfooter.svg";
import { ReactComponent as Phone } from "../../assets/icons/iconphone.svg";
import { ReactComponent as Mail } from "../../assets/icons/iconmail.svg";
import Button from "../ui/Button";
const Footer = () => {
  return (
    <footer className=" w-full pt-28 bottom-0"> 
    <div className="px-4 pt-12 flex w-[90%] mr-auto ml-auto justify-between lg:flex-col">
      <div className="flex lg:mb-16  flex-col">
        <div>
          <span className="text-[16px] mb-8 text-[#338FE8] font-[600]">Contact me</span>
          <p className="text-[32px] pt-4 mb-2 font-[700]">
            👨🏻‍💻 Let’s build something together
          </p>
          <p className="text-[14px] mb-4 text-[#414448]" >Fill in the form or drop an email.</p>
        </div>
        <div className="mt-4">
          <div className="flex items-center border-[1px] rounded-[6px] w-fit border-[#D3DBE3]  py-4  pr-12 pl-4">
            <Phone />
            <span className="ml-4">+994 55 555 5555</span>
          </div>
          <div className="flex items-center border-[1px] rounded-[6px]  w-fit border-[#D3DBE3] py-4 pr-12 pl-4 mt-4">
            <Mail />
            <span className="ml-4">javidkhalilov@gmail.com</span>
          </div>

          <div className="flex border-[1px] border-[#D3DBE3] px-4 py-2 rounded-[6px]   w-[160px] mt-4 justify-between">
              <a  href="#facebook" className="cursor-pointer"><Facebook /></a> 
              <a  href="#linkedin"  className="cursor-pointer"><Linkedin /></a> 
              <a  href="#instagram" className="cursor-pointer"><Instagram /></a> 
          </div>
        </div>
      </div>
      <div>
        <form className="flex py-8 rounded-[8px] px-8 bg-[#F8FAFB] flex-col lg:w-[100%] w-[460px]">
          <input className="border-[1px]  border-[#E7EAF0] py-2 mb-2 px-4 rounded-[6px]"  placeholder="Name" type="text" />
          <input className="border-[1px] border-[#E7EAF0] py-2 mb-2 pl-4  rounded-[6px]"  placeholder="E-mail" type="email" />
          <input className="border-[1px] border-[#E7EAF0] py-2 mb-2 pl-4  rounded-[6px]"  placeholder="Subject" type="text" />
          <textarea className="border-[1px] border-[#E7EAF0] mb-8   pl-4  rounded-[6px]"  placeholder="Your message"	required  name="textbox" rows="4" cols="50"/> 
          <Button>
            <span className="px-5 mt-5">Send Messages</span>
          </Button>
        </form>
      </div>
    </div>
    <div className="bg-[#1E4F99] mt-36 relative bottom-0"><p className="text-white ml-[5%] py-2">© Bütün hüquqlar qorunur | 2022 | JavidKhalilov</p></div>
    </footer>
  );
};

export default Footer;
