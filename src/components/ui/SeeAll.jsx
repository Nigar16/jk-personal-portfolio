import { useNavigate } from "react-router-dom";
import React from "react";

const SeeAll=(props)=>{
    const navigate=useNavigate()
    return(
        <span className={`cursor-pointer ${props.color}`} onClick={()=>{navigate(`/${props.navigation}`)}}>See all→</span>
    );
}

export default SeeAll;