import React from "react";

export default function ServicesCardList({ items }) {
  const renderedItems = items.map((item, index) => {
  
    return (
      <div className="w-[100%] z-[5]" key={index}>
      
        <div
          style={{ background: `${item.lightcolor}` }}
          className='p-8 rounded-md'>
           <img className='p-3 rounded-md' src={item.icon} alt="" style={{ background: `${item.darkcolor}` }} />

            <h5 className="mt-[16px] mb-[8px] text-[16px] font-bold leading-6">{item.cardname}</h5>
             <p className=" text-[14px] leading-5">{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-rows-2 lg:grid-rows-6  grid-flow-col gap-4">{renderedItems}</div>
  );
}
