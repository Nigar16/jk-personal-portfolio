import React,{memo} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Calendar} from "../../assets/icons/iconcalendar.svg";


const Card=memo(({ item })=>{
    return (
        <div className={` flex bg-[#F5F8FA] justify-between  rounded-[6px] p-6  `}>
            <div className="w-[40%] ">
                <img className="object-cover h-[100%] rounded-[6px]" src={item.image} />
            </div>
            <div className="ml-2 flex flex-col">
                <div className=' flex items-center'>
                    <Calendar className='mr-1 text-[#848D96]'/>
                    <span className='mr-1 text-[#848D96] text-sm'>{item.date}</span>
                    <span className='p-1 rounded-[6px] text-xs' style={{ background: `${item.lightcolor}`,color:`${item.darkcolor}` }}>{item.category}</span>
                </div>
                <h1 className="font-[700] text-[16px]">{item.title}</h1>
                <p className="mt-2  text-[16px]">
                    {item.content.substring(0, 50) + "..."}
                </p>
                <span  className="mt-5 cursor-pointer text-[#338FE8]"><Link to={`/blog-posts/${item.id}`}>Read more →</Link></span>
            </div>
        </div>
    );
})

export default Card;