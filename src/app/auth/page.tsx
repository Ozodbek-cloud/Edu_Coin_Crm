'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Euro } from 'lucide-react'
import Image from 'next/image'
import coin from "../../img/ecommerce.png"
function Auth() {
    const [coins, setCoins] = useState<number[]>([])

    useEffect(() => {
        const arr = Array.from({ length: 20 }, (_, i) => i)
        setCoins(arr)
    }, [])

    return (
        <div className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#fdfcff] to-[#e6d4ff]">
            <div className='cursor-pointer absolute top-7 right-7 flex items-center gap-2'>
                <Image src={coin} alt='' width={50} height={50}></Image>
                <h1 className="font-bold hover:scale-[1.2] transition-all duration-200  text-4xl">
                    Edu<span className="font-bold text-4xl text-[#9400dd]">Coin</span>
                </h1>
            </div>

            <AnimatePresence>
                {coins.map((coin, i) => (
                    <motion.div
                        key={coin}
                        initial={{
                            y: 700,
                            opacity: 0,
                            x: Math.random() * window.innerWidth - window.innerWidth / 2,
                            scale: 0.5 + Math.random() * 0.3,
                        }}
                        animate={{
                            y: Math.random() * -900 - 100,
                            opacity: 1,
                            rotate: Math.random() * 360,
                            x: Math.random() * window.innerWidth - window.innerWidth / 2,
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                        className="absolute bottom-0"
                    >
                        <motion.div
                            className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500 border-2 border-yellow-200 shadow-xl flex items-center justify-center text-white"
                            style={{
                                boxShadow: '0 0 25px rgba(255, 215, 0, 0.6)',
                            }}
                        >
                            <Euro className="w-6 h-6 text-white drop-shadow-lg" />
                        </motion.div>
                    </motion.div>
                ))}
            </AnimatePresence>

            <header className="relative z-10 -translate-y-10">
                <section>
                    <div className="flex flex-col items-center justify-center gap-8 p-10 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl w-[400px]">
                        <h1 className="text-4xl font-extrabold tracking-wide">Login</h1>

                        <form className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-gray-800 text-sm">
                                    Telefon yoki email*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your phone or email"
                                    className="border border-gray-300 bg-white px-4 py-2.5 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#9400dd] focus:border-[#9400dd] transition-all duration-200 text-gray-800 placeholder-gray-400"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-gray-800 text-sm">
                                    Parol*
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="border border-gray-300 bg-white px-4 py-2.5 rounded-lg w-full outline-none focus:ring-2 focus:ring-[#9400dd] focus:border-[#9400dd] transition-all duration-200 text-gray-800 placeholder-gray-400"
                                />
                                <p className="text-xs text-gray-600">
                                    Parol kamida 8 ta belgidan iborat bo‘lishi kerak
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="mt-3 bg-[#9400dd] text-white font-semibold py-2.5 rounded-lg hover:bg-[#7a00b7] hover:shadow-lg transition-all duration-300"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Auth
