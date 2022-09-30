import React from 'react'
import Skills from '../components/Skills'
import postgre from '../assets/iconsSkill/postgresql.png'
import nosql from '../assets/iconsSkill/nosql.png'
import node from '../assets/iconsSkill/node.png'
import rabbit from '../assets/iconsSkill/rabbit.png'
import sentry from '../assets/iconsSkill/sentry.png'
import nest from '../assets/iconsSkill/nest.png'
import microservices from '../assets/iconsSkill/microservices.png'
import redis from '../assets/iconsSkill/redis.png'
import mongodb from '../assets/iconsSkill/mongodb.png'


export default function AboutMe() {
    const items=[
        {
            source:postgre,
            title:'PostegreSQL'
        },
        {
            source:nosql,
            title:'NoSQL'
        },
        {
            source:node,
            title:'NodeJS'
        },
        {
            source:rabbit,
            title:'RabbitMQ'
        },
        {
            source:sentry,
            title:'SENTRY'
        },
        {
            source:nest,
            title:'NestJS'
        },
        {
            source:microservices,
            title:'Microservices'
        },
        {
            source:redis,
            title:'redis'
        },
        {
            source:mongodb,
            title:'mongoDB'
        },
    ]
  return (
    <div className=' w-[80%] ml-auto mr-auto  mt-28'>
        <h2 className='text-[32px] font-openSans font-bold leading-12'>About Me & Skills</h2>
        <div className='flex justify-between mt-4'>
            <div className='w-1/2'>
                <p className='font-openSans text-[15px] max-w-md leading-6'>I'm an enthusiastic and highly motivated Software Engineer experienced in developing reliable and user-friendly web-based solutions in different domains, especially experience in the FinTech and Healthcare domains. I love the challenge of diving head first into complex development and engineering challenges and revolving them into a solution that adds real value to the customers' business processes. I am a quick learner and experienced at problem-solving and highly motivated to discover the latest technologies.</p>
            </div>
            <div>
                <Skills items={items}/>
            </div>
        </div>
   </div>
  );
}
