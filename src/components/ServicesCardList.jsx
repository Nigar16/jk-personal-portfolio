import React from "react";

export default function ServicesCardList({ items }) {
  const renderedItems = items.map((item, index) => {
    console.log(item.lightcolor);

    return (
      <div className="w-[100%] " key={index}>
      
        <div
          style={{ background: `${item.lightcolor}` }}
          className={`p-6  rounded-lg`}
        >
           <img src={item.icon} alt="" /> 
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold ">{item.cardname}</h5>
          </a>
          <p className="mb-3 font-normal text-black-700">{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-rows-2 lg:grid-rows-6  grid-flow-col gap-4">{renderedItems}</div>
  );
}
