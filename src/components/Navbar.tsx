'use client'
import React from 'react'
import coin from "../img/ecommerce.png"
import mentor from "../img/istockphoto-1184016920-612x612.jpg"
import Image from 'next/image'
import { Bell, SearchCheck, SearchIcon, Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
function Navbar() {
    const navigate = useRouter()
  return (
    <div>
      <header>
        <section>
          <nav className=' shadow-sm flex items-center p-5 justify-between'>
            <div onClick={() => navigate.push('/')} className='flex gap-2 items-center cursor-pointer hover:scale-[1.1] transition-all duration-200'>
              <Image src={coin} alt='' width={50} height={50}></Image>
              <h1 className="font-bold   text-4xl">
                Edu<span className="font-bold text-4xl text-[#9400dd]">Coin</span>
              </h1>
            </div>
            <div className='md:flex hidden items-center  relative'>
              <input type="text" className='w-[400px]  px-5 py-2 rounded-4xl outline-none  border border-white focus:ring-2 focus:ring-[#9400dd] focus:border-[#9400dd] focus:text-[#9400dd] transition-all duration-200 text-gray-800 placeholder-gray-400' placeholder='Search something...' />
               <SearchIcon className='absolute right-3'></SearchIcon>
            </div>
            <div className='flex  items-center gap-3 '>
              <div>
                <button aria-label="Notifications" className="p-2 rounded-md hover:bg-gray-100">
                  <Bell size={20} />
                </button>
                <button aria-label="Notifications" className="p-2 rounded-md hover:bg-gray-100">
                  <Settings></Settings>
                </button>
              </div>
              <h1 className='font-semibold'>Abduhoshim Sultonqulov</h1>
              <div className="relative w-13 h-13 rounded-full overflow-hidden border">
                <Image src={mentor} alt="photo of user" fill className="object-cover" />
              </div>
            </div>
          </nav>
        </section>
      </header>
    </div>
  )
}

export default Navbar