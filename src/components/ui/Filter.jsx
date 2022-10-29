import React, { useState } from "react";

const Filter=({categories,parentCallback,localStorage})=>{
    console.log(categories)
    console.log(localStorage)

    const [Active, setActive] = useState(null);
    const getValue = (e) => {
       
        const currentValue = e.target.value;
        const filteredStorage = localStorage.filter((item) => {
            return item.category === currentValue;
        });
        console.log(filteredStorage)

        parentCallback(filteredStorage);
        setActive(filteredStorage[0].category);
    };
 
    const renderedItems=categories.map((category,index)=>{
        const active=category===Active?'bg-[#fff] text-[#1E4F99] border-none rounded-[6px] ':'';
        return (
            <button
                id={index}
                onClick={getValue}
                className={`filter-button   hover:text-[#1E4F99] lg:hover:bg-[#F2FAFF] px-12 py-2  lg:bg-[#338FE8] lg:text-[#fff] ${active}`}
                value={category}>
                {category}
            </button>)
    });

    return(
        <div className='scroll w-full container mr-auto ml-auto lg:overflow-x-auto ml-auto mr-auto flex justify-between'>
            {renderedItems}
        </div>
    )
}

export default Filter;
