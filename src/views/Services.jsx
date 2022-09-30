import React from 'react'
import ServicesCardList  from '../components/ServicesCardList'
import code from '../assets/iconsServices/code.png'
import executive from '../assets/iconsServices/executive.png'
import group from '../assets/iconsServices/group.png'
import network from '../assets/iconsServices/network.png'
export default function Services() {
    const items=[
        {
            icon:group,
            cardname:'CTO as a Service',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            lightColor:"#aacdf4",
            darkcolor:'#66a5ec',
        },
        {
            icon:code,
            cardname:'Front-End Development',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            lightcolor:"#f7b0c0",
            darkcolor:'#66A5EC',
        },
        {
            icon:executive,
            cardname:'Software Project Management',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            lightcolor:"#f9de6f",
            darkcolor:'#66A5EC',
        } ,
        {
            icon:'',
            cardname:'Service title',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            lightcolor:"#8098ed",
            darkcolor:'#66A5EC',
        },

        {
            icon:network,
            cardname:'Back-End Development',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            lightcolor:"#bbefef",
            darkcolor:'#66A5EC',
        },
        {
            icon:'',
            cardname:'Service title',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            lightcolor:"#e8afe7",
            darkcolor:'#66A5EC',
        },
    ]
  return (
    <div className='bg-ink-blue'>
        <div className='m-30'>
            <h2 className='text-[32px] text-light-gray font-openSans font-bold leading-12'>Services</h2>
            <p className='text-[14px] text-light-gray font-openSans  leading-5 w-1/2 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
            <div>
                <ServicesCardList items={items}/>
            </div>
       </div>

    </div>
  )
}
