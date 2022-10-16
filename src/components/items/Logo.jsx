import React from "react";
import logo from "../../assets/images/Logo.png"
import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
  <div>
    <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
  </div>
  );
};

export default Logo;
