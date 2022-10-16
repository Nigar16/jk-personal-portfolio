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
                <div className="flex justify-between lg:flex-col">
                    <div className="w-[49%] lg:w-[100%]">  <PrimaryCard item={storageBlogs[0]}/></div>
                    <div className="w-[49%] flex flex-col justify-between lg:w-[100%] lg:mt-4">
                        <div>
                            <Card item={storageBlogs[1]}/>
                        </div>
                        <div className="lg:mt-4">
                            <Card item={storageBlogs[2]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default BlogPosts;