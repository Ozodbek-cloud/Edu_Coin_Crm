import Navbar from '@/components/Navbar'
import React from 'react'
import Auth from './auth/page'
import SideBar from '@/components/SideBar'

function page() {
  return (
    <div className=' '>
      <Navbar/>
      <section className='flex '>
        <SideBar/>
      </section>
    </div>
  )
}

export default page