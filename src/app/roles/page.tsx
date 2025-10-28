'use client'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/SideBar'
import axios from 'axios'
import { Edit3, Trash2, PlusCircle, X, Sparkles, UserCog, UserCog2, ShieldCheck } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RoleInter {
    id: number,
    name: string,
    category: string,
    role: string,
    actions: string,
    status: string,

}


function Roles() {
    const [roles, setRols] = useState<RoleInter[]>([])
    const [showModal, setShowModal] = useState(false)

    // const [centers, setCentors] = useState<RoleInter[]>([])
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     password: '',
    //     photo: '',
    //     birthDay: '',
    //     status: 'INACTIVE',
    // })
    useEffect(() => {
        axios.get(`https://educoin-b2b-dev.educoinapp.uz/api/v1/role-permissions/creator/${1}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSQURNSU4iLCJpYXQiOjE3NjE0ODQ3NDUsImV4cCI6MTc2ODY4NDc0NX0.S5bUXkj3pPIPOI6Yok8eH64xpwCl6gomE5bell9v-bI`,
            },
        })
            .then(res => { setRols(res.data.data) })
            .catch(err => console.error('Xatolik:', err))

    }, [])

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }

    // const handleSubmit = () => {
    //     axios.post('https://educoin-b2b-dev.educoinapp.uz/api/v1/centers/',
    //         formData,
    //         {
    //             headers: {
    //                 Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSQURNSU4iLCJpYXQiOjE3NjE0ODQ3NDUsImV4cCI6MTc2ODY4NDc0NX0.S5bUXkj3pPIPOI6Yok8eH64xpwCl6gomE5bell9v-bI`,
    //             },
    //         },

    //     )
    //     setShowModal(false)
    // }



    return (
        <div>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <section className='p-10 w-full'>
                    <div className='flex justify-between items-center p-5 rounded-2xl shadow-sm'>
                        <div className='flex gap-3 items-center'>
                            <ShieldCheck size={40} className='text-[#9900dd]' />
                            <h1 className='text-4xl font-semibold'>Roles Persmission</h1>
                        </div>
                        {/* <button
                            onClick={() => setShowModal(true)}
                            className='p-3 border hover:bg-[#9400dd] hover:text-white transition-all duration-200 border-[#9400dd] font-bold text-[#9900dd] cursor-pointer rounded-2xl px-4 flex items-center gap-2'
                        >
                            <PlusCircle size={20} />
                            Creator Qo'shish
                        </button> */}
                    </div>

                    <div className='mt-8 bg-white shadow-md rounded-2xl overflow-hidden '>
                        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#f8f5ff] text-[#6600aa] uppercase text-sm">
                                    <tr>
                                        <th className="py-4 px-6 ">#</th>
                                        <th className="py-4 px-6 ">Name</th>
                                        <th className="py-4 px-6">Role</th>
                                        <th className="py-4 px-6 ">Category</th>
                                        <th className="py-4 px-6 ">Actions</th>
                                        <th className="py-4 px-6 ">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {roles.map((role, index) => (
                                        <tr
                                            key={role.id}
                                            className="border-t border-gray-100 hover:bg-[#faf7ff] transition-all duration-150"
                                        >
                                            <td className="py-4 px-6 font-medium text-gray-700">{index + 1}</td>
                                            <td className="py-4 px-6 font-semibold">{role.name}</td>
                                            <td className="py-4 px-6">{role.role}</td>
                                            <td className="py-4 px-6  font-bold text-[#9900dd]">{role.category}</td>
                                            <td className="py-4 px-6 font-bold text-[#9900dd]">
                                                {Array.isArray(role.actions) ? role.actions.join('  •  ') : role.actions}
                                            </td>

                                            <td
                                                className={`py-4 px-6  font-semibold ${role.status === "ACTIVE"
                                                    ? "text-green-600"
                                                    : role.status === "INACTIVE"
                                                        ? "text-red-600"
                                                        : "text-yellow-400"
                                                    }`}
                                            >
                                                {role.status}
                                            </td>
                                        
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* <AnimatePresence>
                        {showModal && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className='fixed inset-0 bg-black/40 z-40'
                                    onClick={() => setShowModal(false)}
                                />
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                                    className='fixed top-0 right-0 h-full w-[400px] bg-white z-50 shadow-2xl p-6 overflow-y-auto'
                                >
                                    <div className='flex justify-between items-center mb-6'>
                                        <h2 className='text-2xl font-semibold text-[#9900dd]'>Creator Qo‘shish</h2>
                                        <button onClick={() => setShowModal(false)} className='p-2 rounded-xl hover:bg-gray-100'>
                                            <X />
                                        </button>
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Creator nomi' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <input type='phone' name='phone' value={formData.phone} onChange={handleChange} placeholder='Telefon raqam' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <input type='file' name='file' value={formData.photo} onChange={handleChange} placeholder='Photo ' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <input type='date' name='date' value={formData.birthDay} onChange={handleChange} placeholder='Birthday' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <select name="Roles" className='border p-3 rounded-xl focus:outline-[#9900dd]' id="1">
                                            {
                                                centers.map(el => (
                                                    <option key={el.id} value={el.name} onChange={() => handleChange}>
                                                        {el.name}
                                                    </option>
                                                ))
                                            }

                                        </select>
                                        <select name='status' value={formData.status} onChange={handleChange} className='border p-3 rounded-xl focus:outline-[#9900dd]'>
                                            <option value='ACTIVE'>Active</option>
                                            <option value='INACTIVE'>InActive</option>
                                        </select>
                                        <button onClick={handleSubmit2} className='bg-[#9900dd] text-white py-3 rounded-xl mt-3 font-semibold hover:bg-[#7c00b6] transition-all'>
                                            Saqlash
                                        </button>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence> */}
                </section>
            </div>
        </div>
    )
}

export default Roles
