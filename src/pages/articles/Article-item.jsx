import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/code.png"
import items from "../../storage-services";
import { memo } from "react";
const ArticleItem = memo(({item}) => {

  return (
    <div>
      <div className="flex  items-center flex-col  mx-4 w-[384px] lg:w-[100%]">
        <div>
          <img src={item.image} alt="projectimage" />
        </div>
        <div className="p-4  w-[384px]  bg-[#F5F8FA]">
          <span className="text-[#848D96] font-[400]">
            #bootstrap #react #css #html #javascript
          </span>
          <h1 className="font-[700] text-2 my-2">{item.title}</h1>
          <p className="mb-4">{item.content}</p>
          <span className="text-[#338FE8]">
            <Link to={`/inline-article/${item.id}`}>Details→</Link>
          </span>
        </div>
      </div>
    </div>
  );
});

export default ArticleItem;
