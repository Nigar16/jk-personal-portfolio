import React from "react";
import {NavLink,Link} from "react-router-dom"
export default function NavbarItems() {
  return (
    <>
       <li className="navlinkDesk lg:navlinkMobile"><NavLink to='/projects' className="lg:navlinkMobile navlinkDesk">Projects</NavLink></li> 
       <li className="navlinkDesk lg:navlinkMobile"><NavLink to='/courses' className="lg:navlinkMobile navlinkDesk">Events</NavLink></li> 
       <li className="navlinkDesk lg:navlinkMobile"><NavLink to='/articles' className="lg:navlinkMobile navlinkDesk">Scientifics articles</NavLink></li> 
       <li className="navlinkDesk lg:navlinkMobile"><NavLink to='/blogs' className="lg:navlinkMobile navlinkDesk">Blog posts</NavLink></li> 
       <li className="navlinkDesk lg:navlinkMobile"><NavLink to='/gallery' className="lg:navlinkMobile navlinkDesk">Gallery</NavLink></li> 
    </>
  );
}
