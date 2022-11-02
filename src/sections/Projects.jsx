import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectSlider from '../../src/components/items/Slider';


 const Projects=(props)=> {
  const navigate=useNavigate()
  return (
    <section className='w-[90%] py-20  mr-auto ml-auto '>
        <div className='w-[100%]'>
            <div className='flex  justify-between items-center px-2'>
                <h1 className='font-[700] text-[32px]'>Projects</h1>
                <span className='cursor-pointer text-[#143068]' onClick={()=>navigate('/projects')}>See all→</span>
            </div>
            <ProjectSlider items={props.Item}/>
        </div>
    </section> 
  )
}


export default Projects;