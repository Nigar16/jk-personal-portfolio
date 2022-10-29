import React from "react";
import storagearticles from "../storage-articles";
import "../assets/css/slider.css"
import ArticleItem from "../components/items/Article-item";

const Articles = () => {

  return (
    <section className='pt-24 flex items-center flex-col w-[100%] mr-auto ml-auto'>
      <h1 className="text-[32px] mb-8 font-[700]  w-[90%]  ">Scientifics Articles</h1>
      <div className="container-grid place-items-center grid-flow-row w-[90%] mr-auto ml-auto grid grid-cols-3 gap-y-8 gap-x-0 xl:grid-cols-2 lg2:grid-cols-1">
        {storagearticles.map((item) => {
          return <div><ArticleItem item={item} /></div>;
        })}
      </div>  
    </section>
  );
};

export default Articles;
