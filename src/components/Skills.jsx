import React from 'react'

export default function Skills({items}) {
    const renderedItems=items.map((item,index)=>{
        return (<div key={index}>
            <div className='p-5 bg-[#edf4fa] rounded-md'>
                 <img src={item.source} alt={item.title} />
            </div>
        </div>)
    })
  return (
    <div className='grid grid-rows-3  grid-flow-col gap-4'>
        {renderedItems}
    </div>
  )
}
