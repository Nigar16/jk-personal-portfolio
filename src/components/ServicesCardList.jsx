import React from 'react'

export default function ServicesCardList({items}) {
    const renderedItems=items.map((item,index)=>{
        return (<React.Fragment key={index}>
            <div className={`p-6 bg-[${item.lightcolor}] rounded-lg`}>
                <a href='#' >
                    <h5 className="mb-2 text-2xl font-bold ">{item.cardname}</h5>
                </a>
                <p className="mb-3 font-normal text-black-700">{item.content}</p>
            </div>

        </React.Fragment>)
    })
  return (
    <div className='grid grid-rows-2  grid-flow-col gap-4'>
        {renderedItems}
    </div>
  )
}
