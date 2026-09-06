import React from 'react'
import { Columns3Cog, ColumnsSettingsIcon } from 'lucide-react'

const Device = () => {
  return (
    <div className='relative  w-full  aspect-7/5 rounded p-0.5 hover:bg-linear-to-r hover:from-yellow-100  hover:to-green-500 flex flex-row justify-center items-center animate-gradient bg-size-[200%_200%]'>
        <div className='bg-gray-800 p-2 mb-2 w-full aspect-7/5 rounded'>
            <div>
                <div className='flex flex-row justify-between'>
                    {/* <Icon/> */}
                    <div className='flex flex-col'>
                        <span>Name of Device</span>
                        <span className='text-[12px]'>SUBTITLE</span>
                    </div>
                    <ColumnsSettingsIcon color='white'/>
                </div>
                
            </div>

            <div className='bg-gray-700 rounded my-2 flex flex-row justify-between items-center text-[12px] p-2'>
                <span className='mx-2'>Status</span>
                <span className='uppercase text-green-500 bg-gray-800 border-[0.1px] border-green-500 rounded p-2'>. online</span>
            </div>

            <div className='bg-gray-700 rounded my-2 flex flex-row justify-between items-center text-[12px] p-2'>
                <span className='mx-2'>Status</span>
                <span className='uppercase text-green-500 bg-gray-800 border-[0.1px] border-green-500 rounded p-2'>. online</span>
    
            </div>
            
            <div className='h-2/3'>
                {/* graph */}
            </div>

        </div>
    </div>
  )
}

export default Device