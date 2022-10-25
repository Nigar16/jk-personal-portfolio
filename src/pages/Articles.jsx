import React from "react";
import storagearticles from "../storage-articles";
import ArticleItem from "../components/items/Article-item";

const Articles = () => {
  return (
    <section className="pt-36 flex flex-col w-[90%] mr-auto ml-auto">
      <h1 className="text-[32px] mb-8 font-[700] ml-[2%] ">Scientifics Articles</h1>
      <div className="place-items-center grid grid-cols-3 gap-y-8 gap-x-0 xl:grid-cols-2 lg2:grid-cols-1">
        {storagearticles.map((item) => {
          return <ArticleItem item={item} />;
        })}
      </div>  
    </section>
  );
};

export default Articles;
