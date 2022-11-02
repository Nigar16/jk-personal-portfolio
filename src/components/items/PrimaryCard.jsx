import React,{memo} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Calendar} from "../../assets/icons/iconcalendar.svg";

const PrimaryCard=memo(({ item })=> {
    return (
        <div className="">
            <div className="rounded-[6px]  bg-[#F5F8FA]  ">
                <div className="mt-6 ml-6 mb-3  rounded-[6px] h-60 w-[92%] bg-cover" style={{ backgroundImage:`url(${item.image})` }}>
                    {/*<img className="pt-6 pr-6 pl-6 pb-3  rounded-[6px] max-h-64 w-full" src={item.image} alt=''/>*/}
                </div>
                <div className='pl-6 flex items-center'>
                    <Calendar className='mr-1 text-[#848D96]'/>
                    <span className='mr-2 text-[#848D96] text-sm'>{item.date}</span>
                    <span className='p-1 rounded-[6px] text-xs' style={{ background: `${item.lightcolor}`,color:`${item.darkcolor}` }}>{item.category}</span>
                </div>
                <div className="pb-6 pr-6 pl-6 pt-3">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 text-[#0A0A0A]">{item.title}</h5>
                    <p className="text-gray-700 text-base mb-4 text-[#0A0A0A]">
                        {item.content.substring(0, 70) + "..."}
                    </p>
                    <span  className="mt-5 cursor-pointer text-[#338FE8]"><Link to={`/blog-posts/${item.id}`}>Read more →</Link></span>
                </div>
            </div>
        </div>
    )
})

export  default PrimaryCard;