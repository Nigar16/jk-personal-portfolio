import React, { memo, useState, useEffect } from "react";
import Card from "../components/items/Card";
import storageblogs from "../storage-blogs";





export default function BlogPostsPage(){
    const categories=["Education",'Technology','Programming',"Tutorials","Blog type1","Blog type2"]
    const [storage, setStorage] = useState(storageblogs);
    const [Active, setActive] = useState(null);
    const getValue = (e) => {
        const currentValue = e.target.value;
        const filteredStorage = storageblogs.filter((item) => {
            return item.category === currentValue;
        });
        setStorage(filteredStorage);
        setActive(filteredStorage[0].category);
    };
    const renderedItems=categories.map((category,index)=>{
        const active=category===Active?'bg-[#fff]':'';
        return (
            <button
                id={index}
                onClick={getValue}
                className={`hover:bg-[#fff] mx-4 hover:text-[#1E4F99] lg:hover:bg-[#F2FAFF] px-4 py-2 rounded-[6px]  lg:bg-[#338FE8] lg:text-[#fff] ${active}`}
                value={category}>
                {category}
            </button>)
    });

    return(
        <section className="pt-24">
            <div className="w-[90%] mr-auto ml-auto flex flex-col ">
                <h1 className="text-[2rem] pb-4 font-[700]">Blog posts</h1>
            </div>

            <div className="lg:w-full w-[90%]  container   mt-12 py-2 px-4 bg-[#F2FAFF] mr-auto  ml-auto flex items-center whitespace-nowrap   lg:bg-white justify-between ">
                <div className="scroll w-[100%] container mr-auto ml-auto lg:overflow-x-auto ml-auto mr-auto flex justify-between">
                    {renderedItems}
                </div>
            </div>
            <div className="grid mt-16 place-items-center w-[95%] mr-auto ml-auto gap-y-8 gap-x-4 grid-cols-2 xl:grid-cols-2 lg:flex flex-col">
                {storage.map((item) => {
                    return <Card item={item} />;
                })}
            </div>
        </section>

    )
}