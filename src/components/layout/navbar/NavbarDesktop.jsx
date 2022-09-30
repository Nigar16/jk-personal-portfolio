import React from "react";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";

import LanguageChanger from "./LanguageChanger";
import Button from "../../ui/Button";
const Navbar = (props) => {
  return (
    <nav className="flex justify-between items-center  py-2 w-[90%] mr-auto ml-auto pt-[20px]">
      <div className="flex items-center  justify-between">
        <Logo/>
        <ul className="flex ml-40 xl:ml-16 ">
         <NavbarItems/>
        </ul>
      </div>
      <div className="flex items-center h-[40px]">
       <LanguageChanger/>
      {props.ContactmeButton}
      </div>
    </nav>
  );
};

export default Navbar;
