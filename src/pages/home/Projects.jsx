import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectSlider from '../projects/ProjectSlider';
 const Projects=()=> {

  const navigate=useNavigate()
  return (
    <section className='w-[90%] py-20   mr-auto ml-auto'>
        <div>
            <div className='flex justify-between items-center px-4'>
                <h1 className='font-[700] text-[32px]'>Projects</h1>
                <span className='cursor-pointer text-[#143068]' onClick={()=>navigate('/projects')}>See all→</span>
            </div>
            <div><ProjectSlider/></div>
        </div>
    </section>
  )
}


export default Projects;