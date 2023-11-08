import React from 'react'
import Navbar from '../Navbar/navbar'
import Navmenu from '../Navmenu/Navmenu'
import Footer from '../Footer'

export default function layout({children}) {
  return (
    <div className=' m-0 p-0 capitalize tracking-widest font-serif bg-gray-50'>
      <Navbar/> 
      {children}
      <Footer/>
            
    </div>
  )
}
