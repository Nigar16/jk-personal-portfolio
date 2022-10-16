import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import storagearticles from "../../storage-articles";

const InlineArticle = () => {
  const { articleid } = useParams();
  const [article, setArticle] = useState({});

  const getCurrentArticle = () => {
    const newArticle = storagearticles.find(
      (item) => item.id === parseInt(articleid)
    );
    setArticle(newArticle);
    console.log(article)
  };

  useEffect(()=>{
    getCurrentArticle()
  })

  return (
    <section className="pt-36">
      <div className="flex  w-[90%] mr-auto ml-auto justify-around lg:flex-col">
        <div className="w-[100%] mr-auto ml-auto">
          <img
            className="w-[600px] ml-auto mr-auto lg:w-[100%]"
            src={article.image}
          />
        </div>
        <div className="w-[100%] pl-2 lg:pt-16">
          <h1 className="text-16 pb-2 font-[600]">{article.title}</h1>
          <p className="text-8">{article.content}</p>
        </div>
      </div>
    </section>
  );
};

export default InlineArticle;
