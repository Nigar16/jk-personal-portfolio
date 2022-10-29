import React, { memo, useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import storageBlogs from "../../storage-blogs";
import {ReactComponent as Calendar} from "../../assets/icons/iconcalendar.svg";
// import towalk from "../../assets/images/2walk.png";
import RelatedBlog from "../../components/items/RelatedBlog";
import {ReactComponent as Facebook} from "../../assets/icons/facebookblue.svg";
import {ReactComponent as YouTube} from "../../assets/icons/youtubeblue.svg";
import {ReactComponent as Instagram} from "../../assets/icons/instagramblue.svg";
import Card from "../../components/items/Card";
const Blog = () => {
    const { blogid } = useParams();
    const [blog, setBlog]=useState('');
    const getBlogs = () => {
        const thisBlog = storageBlogs.find(
            (item) => item.id === parseInt(blogid)
        );
        setBlog(thisBlog);
    };
    useEffect(() => {
        getBlogs();
    });

    return(
        <section className='mt-24 w-[90%] mr-auto ml-auto'>
            <nav className="rounded-md w-full">
                <ol className="list-reset flex">
                    <li><Link to="/" className="text-[#414448] hover:text-blue-700">Homepage</Link></li>
                    <li><span className="text-gray-500 mx-2">/</span></li>
                    <li><Link to='/blogs' className="text-[#414448] hover:text-blue-700">Blog posts</Link></li>
                    <li><span className="text-gray-500 mx-2">/</span></li>
                    <li className="text-blue-500">{blog.title}</li>
                </ol>
            </nav>
            {/*<Breadcrumb />*/}
            <div className="flex flex-col mt-8">
                <h1 className="text-[2rem] pb-3 font-[700]">{blog.title}</h1>
            </div>
            <div className='flex items-center'>
                <Calendar className='mr-1 text-[#848D96]'/>
                <span className='mr-1 text-[#848D96] text-md'>{blog.date}</span>
            </div>
            <div>
                <img className="object-cover h-96 w-full rounded-[6px] mt-6" src={blog.image} alt=""/>
            </div>
            <div className='mt-10 flex lg:flex-col'>
                <div className='w-[75%] lg:w-full border-b pb-8 border-[#D3DBE3]'>
                    <h5 className='text-[##0A0A0A] font-[500] leading-6 text-[15px] '>"Qarabağ"ın evdə Polşa "Lex"inə qarşı keçirəcəyi UEFA Çempionlar Liqasının I təsnifat mərhələsinin cavab oyunu üçün "Bakı Metropoliteni" QSC-nin iş rejimində ehtiyat qatarlar hazır vəziyyətdə saxlanılacaq.</h5>
                    <p className='text-[##0A0A0A]  leading-6 text-[15px] mt-4'>Bu barədə "Report"a qurumun Mətbuat Xidmətindən məlumat verilib.</p>
                    <p className='text-[##0A0A0A]  leading-6 text-[15px] mt-4'> Bildirilib ki, iyulun 12-də Tofiq Bəhramov adına Respublika stadionunda gerçəkləşəcək oyuna tamaşaçı marağını nəzərə alaraq, Bakı metropoliteninin iş rejimində müvafiq dəyişiklik edilməsi nəzərdə tutulub.</p>

                    <p className='text-[##0A0A0A]  leading-6 text-[15px] mt-4'> Metropolitenin əvvəlcədən elan edilmiş istirahət günü qrafikinə baxmayaraq, sərnişinlərin təhlükəsiz və rahat daşınması məqsədilə Respublika stadionunda keçirilən kütləvi tədbirlər zamanı metropolitenin müvafiq əməliyyat planı əsasında bir sıra tədbirlər görüləcək.</p>

                    <p className='text-[##0A0A0A]  leading-6 text-[15px] mt-4'> Görüşün oynanılacağı mərkəzi arenanın yaxınlığında yerləşən “Gənclik” stansiyası oyunun başlanma saatı ərəfəsində gücləndirilmiş iş rejimi şəraitində çalışacaq. Bu xüsusda əlavə işçi qüvvəsi ayrılmaqla növbətçilik cədvəli tərtib olunacaq, nəzarət mexanizmləri gücləndiriləcək. Həmçinin “Nəriman Nərimanov” və “28 May” stansiyalarında müvafiq ehtiyat tədbirlər nəzərə alınacaq.</p>

                    <p className='text-[##0A0A0A]  leading-6 text-[15px] mt-4'> Xəttə buraxılmaq üçün nəzərdə tutulmuş ehtiyat qatarlar hazır vəziyyətdə saxlanılacaq.</p>

                    <p className='text-[##0A0A0A]  leading-6 text-[15px] mt-4'>Qeyd edək ki, qarşılaşma saat 20:00-da başlayacaq. Poznandakı ilk oyunda Ağdam təmsilçisi rəqibinə minimal hesabla uduzub - 0:1.</p>

                </div>
                <div className='w-[25%] ml-10 lg:w-full'>
                    <h4 className='text-[##0A0A0A] font-bold leading-7 text-[18px]  '>Related Blogs</h4>
                    <RelatedBlog data={storageBlogs}/>
                </div>
            </div>
            <div  className='mt-10 flex items-center  '>
                <span className='text-[14px] text-[#0A0A0A] font-[600] mr-5'>Xəbər paylaşın</span>
                <div className="flex w-[124px] justify-between items-center">
                    <a href="src/sections/Hero#" className="cursor-pointer  p-2 bg-[#F5F7FA] rounded-[6px]"><Facebook/></a>
                    <a href="src/sections/Hero#" className="cursor-pointer  p-2 bg-[#F5F7FA] rounded-[6px]"><Instagram /></a>
                    <a href="src/sections/Hero#" className="cursor-pointer  p-2 bg-[#F5F7FA] rounded-[6px]"><YouTube /></a>
                </div>
            </div>
            <div className='mt-16'>
                <h4 className='text-[##0A0A0A] font-bold leading-7 text-[18px] mb-5 '>Other Blogs</h4>
                <div className="grid mt-8 place-items-center  gap-y-8 gap-x-4 grid-cols-2 xl:grid-cols-2 lg:flex flex-col">
                    <Card item={storageBlogs[0]} />
                    <Card item={storageBlogs[1]} />
                </div>
            </div>

        </section>
    )
}




export  default Blog;