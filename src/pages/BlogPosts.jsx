import React, { memo, useState, useEffect } from "react";
import Card from "../components/items/Card";
import storageblogs from "../storage-blogs";
import Filter from "../components/ui/Filter";





export default function BlogPosts(){
    const categories=["Education",'Technology','Programming',"Tutorials","Blog type1","Blog type2"]
    const [storage, setStorage] = useState(storageblogs);
    const handleCallback = (data) =>{
        setStorage(data);
    }
    return(
        <section className="pt-24">
            <div className="w-[90%] mr-auto ml-auto flex flex-col ">
                <h1 className="text-[2rem] pb-4 font-[700]">Blog posts</h1>
            </div>

            <div className="lg:w-full w-[90%] relative  container  mt-12 py-2  bg-[#F2FAFF] mr-auto  ml-auto flex items-center whitespace-nowrap   lg:bg-white justify-between">
        <div className="scroll  overflow-auto px-4 w-[100%] container  mr-auto ml-auto lg:overflow-x-auto ml-auto mr-auto flex justify-between">
          <Filter
            categories={categories}
            parentCallback={handleCallback}
            localStorage={storageblogs}
          />
        </div>
      </div>
            <div className="grid mt-16 place-items-center w-[90%] mr-auto ml-auto gap-y-8 gap-x-4 grid-cols-2 xl:grid-cols-2 lg:flex flex-col">
                {storage.map((item,index) =>{
                    return <Card key={index} item={item} />;
                })}
            </div>
        </section>
    )
} 