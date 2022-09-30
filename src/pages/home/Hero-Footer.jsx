import React from "react";
import { ReactComponent as AzerCosmos } from "../../assets/icons/iconazercosmos.svg";
import { ReactComponent as P } from "../../assets/icons/p.svg";
import { ReactComponent as UfazIcon } from "../../assets/icons/ufaz.svg";
import { ReactComponent as Walk } from "../../assets/icons/2walk.svg";
import { ReactComponent as Javachip } from "../../assets/icons/javachip.svg";
import { ReactComponent as Agbank } from "../../assets/icons/agbank.svg";

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
      {/* <div className="lg:mb-8">
        <AzerCosmos />
      </div>
      <div className="lg:mb-8">
        <P />
      </div>
      <div className="lg:mb-8">
        <UfazIcon />
      </div>
      <div className="lg:mb-8">
        <Walk />
      </div>
      <div className="lg:mb-8">
        <Javachip />
      </div>
      <div className="lg:mb-8">
        <Agbank />
      </div> */}

      {iconData.map((item) => {
        return (
          <div className="lg:mb-8" key={item.id}>
            <item.icon />
          </div>
        );
      })}
    </section>
  );
};

export default HeroFooter;
