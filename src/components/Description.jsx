import React, { useEffect } from 'react'
import wedglowImg from '../assets/img/wedglow.PNG'
const Description = ({ home }) => {
    return (
        <>
            <div ref={home} className='flex flex-col md:flex-row items-center min-h-screen md:h-screen container mx-auto p-5'>
                <div className='w-full mb-6 md:mb-0'>

                    <div className='text-gray-100 p-1'>
                        <div className='font-bold text-3xl md:text-5xl leading-tight'>
                            Welcome to The <span className='text-blue-400'>WedGlow Studio</span>
                        </div>
                        <div className='text-xl md:text-2xl text-gray-300 mt-2 font-medium'>
                            Where Photography Meets Beauty.
                        </div>
                        <div className='text-gray-200 text-lg md:text-xl mt-5 leading-relaxed max-w-3xl'>
                            The WedGlow Studio is a premium creative space born from the collaboration of The Wedex Studio, 
                            a photography brand, and The Glow by Nitika, a professional makeup artistry brand. Bringing together 
                            expertise in photography, makeup, and creative direction, The WedGlow Studio was created with one vision 
                            to bring photography and beauty under one roof and turn every vision into a beautiful reality.
                        </div>
                    </div>
                    <div className='p-1'>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold w-10'
                            onClick={() => { window.open('https://www.instagram.com/thewedglowstudio/', '_blank') }}>
                            <i className="fab fa-instagram fa-lg"></i></button>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold w-10 ml-5'
                            onClick={() => { window.open('mailto:thewedglowstudio@gmail.com', '_blank') }}>
                            <i className='fa fa-envelope'> </i></button>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold ml-5'
                            onClick={() => { window.open('https://share.google/35d5xLDs9Puy5Itaq', '_blank') }}>
                             <i className="fa-solid fa-location-dot fa-lg"></i>
                        </button>
                    </div>
                </div>
                <div className='w-full flex justify-center animate-pulse'>
                    <img src={wedglowImg} className="rounded-full w-64 h-64 md:w-[400px] md:h-[400px] object-cover" />
                </div>
            </div>
        </>
    )
}

export default Description