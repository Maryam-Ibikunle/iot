import React from 'react'
import { Bell, Search} from 'lucide-react'
import me from '../assets/me.jpg'

const Searchbar = () => {
  return (
    <div className=' flex flex-row justify-between items-center'>
        <div className=' inline-flex items-center border border-gray-500 bg-gray-900 rounded-2xl py-1 px-3 sm:px-5 h-12 w-50 md:w-full md:mr-10'>
            <Search className='text-gray-500'/>
            <input 
                type="text" 
                className='w-full border-none outline-none focus:border-none focus:outline-none pl-2 text-[#00f0ff]' 
                placeholder='Search devices, logs, or metrics...'/>
        </div>
        <div className='inline-flex items-center text-white font-semibold '>
            <Bell className='md:mx-6'/>
            <div className='flex flex-row border-l border-l-gray-100 pl-4 gap-4'>
                <div className='hidden sm:block'>
                    <p>M. Ibikunle</p>
                    <p>Admin Role</p>
                </div>
                <div className='w-12.5 aspect-1 rounded-full'>
                    <img src={me} alt="" className='rounded-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbar