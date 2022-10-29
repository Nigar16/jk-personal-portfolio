import React,{memo} from "react";
import {Link} from "react-router-dom";


export default function RelatedBlog({data}){
  const renderedItems=data.filter(data=>data.id<5).map((item)=>{
      return(
          <div className='flex items-center mt-3 mb-3 border-b pb-3 border-[#D3DBE3] last:border-none'>
              <div className='w-[30%] mr-4'><img className='w-full h-24 rounded-[6px]' src={item.image}/></div>
              <div><p>{item.title}</p></div>
          </div>
      )
  })
    return(
<div>
    {renderedItems}
</div>
    )
}

