'use client'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/SideBar'
import axios from 'axios'
import { LocateFixed, Edit3, Trash2, PlusCircle, X, Sparkles } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CenterInter {
    id: number,
    name: string,
    phone: string,
    status: string,
    description: string
}

function Center() {
    const [centerss, setCenters] = useState<CenterInter[]>([])
    const [filcenterss, setFilCenters] = useState<CenterInter[]>([])
    const [showModal, setShowModal] = useState(false)
    const [fordelete, setDeletedId] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        logo: '',
        phone: '',
        status: 'PRIVATE',
        description: '',
        subdomain: ''
    })

    useEffect(() => {
        axios.get('https://educoin-b2b-dev.educoinapp.uz/api/v1/centers/all', {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSQURNSU4iLCJpYXQiOjE3NjE0ODQ3NDUsImV4cCI6MTc2ODY4NDc0NX0.S5bUXkj3pPIPOI6Yok8eH64xpwCl6gomE5bell9v-bI`,
            },
        })
            .then(res => { setCenters(res.data.data), setFilCenters(res.data.data) })
            .catch(err => console.error('Xatolik:', err))
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        axios.post('https://educoin-b2b-dev.educoinapp.uz/api/v1/centers/',
            formData,
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSQURNSU4iLCJpYXQiOjE3NjE0ODQ3NDUsImV4cCI6MTc2ODY4NDc0NX0.S5bUXkj3pPIPOI6Yok8eH64xpwCl6gomE5bell9v-bI`,
                },
            },

        )
        setShowModal(false)
    }

    async function delete_one(id: number) {
        try {
            const res = await axios.delete(
                `https://educoin-b2b-dev.educoinapp.uz/api/v1/centers/${id}`,
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlNVUEVSQURNSU4iLCJpYXQiOjE3NjE0ODQ3NDUsImV4cCI6MTc2ODY4NDc0NX0.S5bUXkj3pPIPOI6Yok8eH64xpwCl6gomE5bell9v-bI`,
                    },
                }
            )

            console.log('O‘chirildi:', res.data)
            setCenters(prev => prev.filter(item => item.id !== id)) 
        } catch (error: any) {
            console.log('Xatolik:', error.message)
        }
    }


    return (
        <div>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <section className='p-10 w-full'>
                    <div className='flex justify-between items-center p-5 rounded-2xl shadow-sm'>
                        <div className='flex gap-3 items-center'>
                            <Sparkles size={40} className='text-[#9900dd]' />
                            <h1 className='text-4xl font-semibold'>Creators</h1>
                        </div>
                        <button
                            onClick={() => setShowModal(true)}
                            className='p-3 border hover:bg-[#9400dd] hover:text-white transition-all duration-200 border-[#9400dd] font-bold text-[#9900dd] cursor-pointer rounded-2xl px-4 flex items-center gap-2'
                        >
                            <PlusCircle size={20} />
                            Creator Qo'shish
                        </button>
                    </div>

                    <div className='mt-8 bg-white shadow-md rounded-2xl overflow-hidden '>
                        <table className='w-full text-left'>
                            <thead className='bg-[#f8f5ff] text-[#6600aa] uppercase text-sm'>
                                <tr>
                                    <th className='py-4 px-6'>#</th>
                                    <th className='py-4 px-6'>Markaz nomi</th>
                                    <th className='py-4 px-6'>Telefon</th>
                                    <th className='py-4 px-6'>Rahbar</th>
                                    <th className='py-4 px-6 text-center'>O‘quvchilar</th>
                                    <th className='py-4 px-6 text-center'>Amallar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filcenterss.map((center, index) => (
                                    <tr key={center.id} className='hover:bg-[#faf7ff] transition-all duration-150'>
                                        <td className='py-4 px-6 font-medium text-gray-700'>{index + 1}</td>
                                        <td className='py-4 px-6 font-semibold'>{center.name}</td>
                                        <td className='py-4 px-6'>{center.phone}</td>
                                        <td className={`py-4 px-6 ${center.status == 'CENTER' ? 'text-green-600' : center.status == 'PRIVATE' ? 'text-red-600' : 'text-yellow-400'}`}>{center.status}</td>
                                        <td className='py-4 px-6 text-center font-bold text-[#9900dd]'>{center.description}</td>
                                        <td className='py-4 px-6 text-center'>
                                            <div className='flex justify-center gap-3'>
                                                <button className='p-2 rounded-xl hover:bg-[#e5d4ff] transition-all'>
                                                    <Edit3 size={18} className='text-[#9400dd]' />
                                                </button>
                                                <button onClick={() => delete_one(center.id)} className='p-2 rounded-xl hover:bg-[#ffe5f0] transition-all'>
                                                    <Trash2 size={18} className='text-red-500' />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <AnimatePresence>
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
                                        <h2 className='text-2xl font-semibold text-[#9900dd]'>Center Qo‘shish</h2>
                                        <button onClick={() => setShowModal(false)} className='p-2 rounded-xl hover:bg-gray-100'>
                                            <X />
                                        </button>
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <input name='name' value={formData.name} onChange={handleChange} placeholder='Markaz nomi' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <input name='logo' value={formData.logo} onChange={handleChange} placeholder='Logo URL' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <input name='phone' value={formData.phone} onChange={handleChange} placeholder='Telefon raqam' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <select name='status' value={formData.status} onChange={handleChange} className='border p-3 rounded-xl focus:outline-[#9900dd]'>
                                            <option value='PRIVATE'>PRIVATE</option>
                                            <option value='CENTER'>CENTER</option>
                                        </select>
                                        <textarea name='description' value={formData.description} onChange={handleChange} placeholder='Izoh...' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <input name='subdomain' value={formData.subdomain} onChange={handleChange} placeholder='Subdomain' className='border p-3 rounded-xl focus:outline-[#9900dd]' />
                                        <button onClick={handleSubmit} className='bg-[#9900dd] text-white py-3 rounded-xl mt-3 font-semibold hover:bg-[#7c00b6] transition-all'>
                                            Saqlash
                                        </button>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </section>
            </div>
        </div>
    )
}

export default Center
