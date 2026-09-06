import React from 'react'
import Searchbar from '../components/Searchbar'
import Report from '../components/Report'
import { deviceReport } from '../constants'
import { SearchIcon, Grid2X2, List } from 'lucide-react'
import Device from '../components/Device'

const Devices = () => {
  return (
    <main className="bg-gray-950 h-screen overflow-y-scroll font-sans text-[#c8fbff] w-screen">
      <div className='mx-4 md:mx-10 py-5'>
          <Searchbar/> 
      </div>

      <div className='flex flex-col lg:flex-row justify-between lg:items-center mx-4 md:mx-10 py-5'>
        <div>
          <h2 className='font-bold text-4xl text-[#bcd2ee]'>Device Fleet</h2>
          <p className='text-[13px] mt-5 lg:mt-0'>Manage, monitor and configure all connected hardware across your network infrastructure. Real time telemetry is currently active.</p>
        </div>
        <button className='mt-7 lg:mt-0 px-4 py-2 bg-[#c8fbff] text-gray-950 rounded w-40 max-h-11'>+ Add Device</button>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-10'>
        {deviceReport.map(r=>(
          <Report key={r.id} title={r.title} figure={r.figure} analysis={r.analysis} color={r.color} icon={r.icon}/>
        ))}
      </div>

      <div className=' mx-4 md:mx-10 my-10 p-4 flex flex-row justify-between bg-gray-900 rounded text-[12px] '>
        <div className='flex justify-between'>
          <button className='hover:bg-gray-800 hover:rounded active:bg-gray-800  active:text-white px-3'>All Devices</button>
          <button className='hover:bg-gray-800 hover:rounded active:bg-gray-800  active:text-white px-3'>Active</button>
          <button className='hover:bg-gray-800 hover:rounded active:bg-gray-800  active:text-white px-3'>Inactive</button>
          <button className='hover:bg-gray-800 hover:rounded active:bg-gray-800  active:text-white px-3'>Low Battery</button>
        </div>

        <div className='flex flex-row justify-between'>
          <div className='inline-flex items-center justify-between border border-gray-600 rounded p-1'>
            <SearchIcon/>
            <input type="text" placeholder="Filter by name..." className='focus:border-none focus:outline-0 mx-2 hidden md:block'/>
          </div>
          <div className='md:inline-flex items-center ml-2 hidden'>
            <Grid2X2 className='mr-1'/>
            <List/>
            {/* grid/flex */}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-10'>
        <Device/>
        {/* <Device/>
        <Device/>
        <Device/> */}
      </div>
    </main>
  )
}

export default Devices