import Navbar from '@/components/Navbar'
import Sidebar from '@/components/SideBar'
import React from 'react'

function Page() {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>

        </div>
    </div>
  )
}

export default Page