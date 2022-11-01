import React from "react";
import storagearticles from "../storage-articles";
import "../assets/css/slider.css"
import ArticleItem from "../components/items/Article-item";

const Articles = () => {

  return (
    <section className='pt-24 flex items-center flex-col w-[100%] mr-auto ml-auto'>
      <h1 className="text-[32px] mb-8 font-[700] mr-auto ml-auto w-[90%]  ">Scientifics Articles</h1>
      <div className=" grid grid-flow-auto mt-4 justify-items-stretch  place-items-center w-[90%]  mr-auto ml-auto gap-y-8 gap-x-6 grid-cols-3 xl:grid-cols-2 lg:flex flex-col">
        {storagearticles.map((item,index) => {
          return <div key={index}><ArticleItem item={item} /></div>;
        })}
      </div>  
    </section>
  );
};

export default Articles;
