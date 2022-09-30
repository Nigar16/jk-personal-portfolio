import React from 'react'
import Skills from '../../components/Skills';
import postgre from "../../assets/images/postgresql.png";
import nosql from '../../assets/images/nosql.png';
import node from '../../assets/images/node.png';
import rabbit from '../../assets/images/rabbit.png';
import sentry from '../../assets/images/sentry.png';
import nest from '../../assets/images/nest.png';
import microservices from '../../assets/images/microservices.png';
import redis from '../../assets/images/redis.png';
import mongodb from '../../assets/images/mongodb.png'
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
    <div className=' w-[90%] ml-auto mr-auto  mt-28'>
        <h2 className='text-[32px] font-openSans font-bold leading-12'>About Me & Skills</h2>
        <div className='flex justify-between mt-4 lg:flex-col '>
            <div className='w-1/2 lg:w-full'>
                <p className='font-openSans text-[15px] lg:mb-16 leading-6'>I'm an enthusiastic and highly motivated Software Engineer experienced in developing reliable and user-friendly web-based solutions in different domains, especially experience in the FinTech and Healthcare domains. I love the challenge of diving head first into complex development and engineering challenges and revolving them into a solution that adds real value to the customers' business processes. I am a quick learner and experienced at problem-solving and highly motivated to discover the latest technologies.</p>
            </div>
            <div>
                <Skills items={items}/>
            </div>
        </div>
   </div>
  );
}
