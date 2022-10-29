import React from 'react'
import ServicesCardList from '../components/items/ServicesCardList';
import items from '../storage-services';

const Services=()=> {
   
  return (
    <div className=' mt-24 bg-[#143068] relative'>
        <div className='w-[90%] ml-auto mr-auto  mt-20 mb-20'>
            <img draggable="false" className="z-0 absolute scale-75 top-5 left-10 " src={require("../assets/images/Vector.png")} alt='' />
            <img draggable="false" className="z-0 absolute rotate-[250deg] scale-150 top-30 left-2/4 " src={require("../assets/images/Vector.png")} alt=''/>
            <img draggable="false" className="z-0 absolute scale-[2] top-10 right-10 " src={require("../assets/images/Vector.png")} alt=''/>
            <img draggable="false" className="z-0 absolute rotate-[250deg] scale-150 bottom-2/4 right-5 " src={require("../assets/images/Vector.png")} alt='' />
            <img draggable="false" className="z-0 absolute rotate-[270deg] scale-150 bottom-5 left-5 s" src={require("../assets/images/Vector.png")} alt=''/>
            <img draggable="false" className="z-0 absolute scale-150 bottom-5 right-1/4 " src={require("../assets/images/Vector.png")} alt=''/>

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
