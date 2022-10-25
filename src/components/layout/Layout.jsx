import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './Footer'


 const LayOut=({children}) =>{
  return (
    <div>
    <Navbar/>
    <main id='main' className=''>
        <div>
            {children}
        </div>
    </main>
    <Footer/>
    </div>
  )
}
export default LayOut;