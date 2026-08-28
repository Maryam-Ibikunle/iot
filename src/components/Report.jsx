import React from 'react'
import { Wifi } from 'lucide-react'
import { report } from '../constants'

const Report = ({title, figure, analysis, color, icon}) => {
  return (
    <div className={`relative  w-full  aspect-7/5 rounded-2xl p-0.5 bg-linear-to-r ${color}  to-black-500 flex flex-row justify-center items-center animate-gradient bg-size-[200%_200%]`}>
        <div className='bg-gray-800 w-full aspect-7/5 rounded-2xl flex flex-col justify-between p-3 sm:p-6 hover:bg-gray-900 duration-300 ease-in-out'>
            <div className='inline-flex justify-between'>
                <span className='uppercase text-[12px] sm:text-1xl text-[#6a9b8b] font-sans tracking-[0.08rem] font-semibold'>{title}</span>
                <Wifi className={`${icon}`}/>
            </div>
            <div>
                <p className={`font-semibold ${icon} text-3xl`}>{figure}</p>
                <div className='text-[#6a9b8b] font-sans inline-flex gap-5'>
                    <span>{analysis[0]}</span>
                    <span>{analysis[1]}</span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Report