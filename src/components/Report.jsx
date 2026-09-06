import React from 'react'
import { Wifi } from 'lucide-react'
import { report } from '../constants'

const Report = ({title, figure, analysis, color, icon}) => {
  return (
    
        <div className='bg-gray-800 w-full aspect-7/5 rounded-2xl flex flex-col justify-between p-3 sm:p-6 hover:bg-gray-900 duration-300 ease-in-out'>
            <div className='inline-flex justify-between'>
                <span className='uppercase text-[12px] sm:text-1xl font-sans tracking-[0.08rem] font-semibold'>{title}</span>
                <Wifi className={`${icon}`}/>
            </div>
            <div>
                <p className={`font-semibold ${icon} text-3xl`}>{figure}</p>
                <div className='font-sans inline-flex gap-5'>
                    <span>{analysis[0]}</span>
                    <span>{analysis[1]}</span>
                    </div>
            </div>
        </div>
    
  )
}

export default Report