import React from 'react'
import { recent } from '../constants'

const Recent = () => {
    
  return (
    <div className='p-8  min-h-fit md:h-120 text-white w-80 h-auto bg-gray-800 rounded-2xl mt-10'>
        <h2 className='font-semibold text-3xl'>Recent Activity</h2>
        <ul>
            {recent.map(r=>(
                <li key={r.id}>
                    <div className=' flex flex-col border-t my-6'>
                        <h3 className='font-semibold'>{r.title}</h3>
                        <div className='text-[10px]'>{r.device} . {r.time}</div>
                    </div>
                </li>
               
            ))}
        </ul>
        <button className='w-full h-10 rounded bg-gray-900 text-[#00f0ff] text-sm tracking-wider'>View logs</button>

    </div>
  )
}

export default Recent