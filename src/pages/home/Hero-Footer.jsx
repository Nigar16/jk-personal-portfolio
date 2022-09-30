import React from "react";
import  AzerCosmos  from "../../assets/icons/iconazercosmos.svg";
import  P  from "../../assets/icons/p.svg";
import  UfazIcon  from "../../assets/icons/ufaz.svg";
import  Walk  from "../../assets/icons/2walk.svg";
import  Javachip  from "../../assets/icons/javachip.svg";
import  Agbank  from "../../assets/icons/agbank.svg";


const HeroFooter = () => {

  
  const iconData = [
    { id: 1, icon: UfazIcon },
    { id: 2, icon: AzerCosmos },
    { id: 3, icon: Walk },
    { id: 4, icon: Javachip },
    { id: 5, icon: Agbank },
    { id: 6, icon: P },
  ];
  return (
    <section className="w-full  grid grid-cols-6 place-items-center lg:grid-cols-2  py-4 px-8 bg-[#143068]">
    

      {iconData.map((item,index) => {
        console.log(item)
        return (
          <div key={item.id} className="lg:mb-8" >
            <img src={item.icon}/>
          </div>
        );
      })}
    </section>
  );
};

export default HeroFooter;
