import React from "react";
import NavbarMobile from "./Navbar-mobile";
import helpers from "../../../helpers/helper";
import Button from "../../ui/Button";
import NavbarDesktop from "../navbar/NavbarDesktop";
const Navbar = () => {

  const onArrowClick = () => {
    helpers.scrollBottom('smooth')
}

  const ContactmeButton= <Button onClick={onArrowClick}>Contact me</Button>
  return (
    <>
      <div className="fixed z-40 w-full bg-[#fff]">
        <div className="block lg:hidden ">
          <NavbarDesktop ContactmeButton={ContactmeButton}/>
        </div>
        <div className="hidden lg:block">
          <NavbarMobile ContactmeButton={ContactmeButton} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
