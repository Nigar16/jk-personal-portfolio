import React from 'react'
// import SeeAll from "../../components/layout/SeeAll";
import PrimaryCard from "../../components/items/PrimaryCard";
import storageBlogs from "../../storage-blogs";
import SeeAll from "../../components/ui/SeeAll";
import Card from "../../components/items/Card";

const BlogPosts=()=>{
    return(
        <div className=' mt-24' >
            <div className='w-[90%] ml-auto mr-auto '>
                <div className='flex justify-between items-end mb-8'>
                    <h2 className='text-[32px]  font-bold leading-12'>Blog posts</h2>
                    <SeeAll navigation='blogs'/>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className="row-span-2">  <PrimaryCard item={storageBlogs[0]}/></div>
                    <div className=""><Card item={storageBlogs[1]}/></div>
                    <div className=" self-end"><Card item={storageBlogs[2]}/></div>
                </div>
            </div>
        </div>


    )
}
export default BlogPosts;