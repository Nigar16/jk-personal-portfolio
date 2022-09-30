import React from 'react'
import ServicesCardList from '../../components/ServicesCardList';
import items from '../../storage-services';
export default function Services() {
   
  return (
    <div className='bg-ink-blue mt-24'>
        <div className='m-30'>
            <h2 className='text-[32px] text-light-gray font-openSans font-bold leading-12'>Services</h2>
            <p className='text-[14px] text-light-gray font-openSans mb-8  leading-5 w-1/2 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
            <div>
                <ServicesCardList items={items}/>
            </div>
       </div>

    </div>
  )
}
