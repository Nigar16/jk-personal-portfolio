import React from 'react'
import ServicesCardList from '../components/items/ServicesCardList';
import items from '../storage-services';

import SeeAll from "../components/ui/SeeAll";

import bg from "../assets/images/BgServices.png"
const Services=()=> {
   
  return (
    <div className=' mt-24' style={{ backgroundImage:`url(${bg})` }}>
        <div className='w-[90%] ml-auto mr-auto  mt-20 mb-20'>
            <h2 className='text-[32px] text-light-gray  font-bold leading-12'>Services</h2>
            <div className=' mb-8'>
                <p className='text-[14px] text-light-gray  leading-5  mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
            </div>
            <div>
                <ServicesCardList items={items}/>
            </div>
       </div>

    </div>
  )
}
export default Services;
