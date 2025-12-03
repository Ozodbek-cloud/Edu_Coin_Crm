'use client'
import { UsersRound, GraduationCap, Settings2, LocateFixed, UserCog, ShieldCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Sidebar() {
  const navigate = useRouter()
  return (
    <div className=''>
      <section className='mt-4'>
        <div className='md:flex hidden flex-col  w-[300px] justify-between h-[calc(99vh-100px)] shadow-md'>
          <div className='flex flex-col gap-2'>
            <div onClick={() => navigate.push('/centers')} className='flex border rounded-2xl items-center gap-3 px-4 py-3  cursor-pointer border-white hover:bg-[#9400dd] hover:text-white transition-all duration-200'>
              <LocateFixed size={28} />
              <h1 className='text-[18px] font-medium'>Centers</h1>
            </div>
            <div onClick={() => navigate.push('/creator')} className='flex items-center gap-3 px-4 py-3  cursor-pointer border-white hover:bg-[#9400dd] hover:text-white rounded-2xl transition-all duration-200'>
              <UserCog size={28} />
              <h1 className='text-[18px] font-medium'>Creators</h1>
            </div>
            {/* <div onClick={() => navigate.push('/roles')} className='flex items-center gap-3 px-4 py-3  cursor-pointer border-white hover:bg-[#9400dd] hover:text-white rounded-2xl transition-all duration-200'>
              <ShieldCheck size={28} />
              <h1 className='text-[18px] font-medium'>Roles</h1>
            </div>
            <div onClick={() => navigate.push('/teachers')} className='flex items-center gap-3 px-4 py-3  cursor-pointer border-white hover:bg-[#9400dd] hover:text-white rounded-2xl transition-all duration-200'>
              <GraduationCap size={28} />
              <h1 className='text-[18px] font-medium'>O‘qituvchilar</h1>
            </div> */}
          </div>

          <div onClick={() => navigate.push('')} className='flex items-center gap-3 px-4 py-3 border-t border-gray-100 cursor-pointer hover:bg-[#9400dd] hover:text-white rounded-2xl transition-all duration-200'>
            <Settings2 size={28} />
            <h1 className='text-[18px] font-medium'>Sozlamalar</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sidebar
