import React from 'react'
import Searchbar from '../components/Searchbar'
import Report from '../components/Report'
import Performance from '../components/Performance.jsx'
import { report } from '../constants'
import Recent from '../components/Recent.jsx'
const Overview = () => {
  return (
    <main className='bg-gray-950 max-w-7xl min-h-screen'>
        <div className='mx-10 pt-5 '>
            <Searchbar/>
        </div>
        <div id='body' className='mt-10 flex flex-col '>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mx-10'>
                {report.map(r=>(
                    <Report key={r.id} title={r.title} figure={r.figure} analysis={r.analysis} color={r.color} icon={r.icon}/>
                ))}
            </div>
            <div className='flex flex-col md:flex-row justify-between mx-10  '>
                <div className='max-w-full w- md:w-5/7 md:h-120 h-80 rounded-2xl text-white bg-gray-800 p-5 flex flex-col mt-10'>
                    <div className='mb-5'>
                        <h2 className='text-3xl font-bold tracking-[0.05em]'>System Performance</h2>
                        <span>Real time telemetry aggregate</span>
                    </div>  
                    <Performance/> 
                </div>
                <Recent/>
            </div>
            </div>
    </main>
  )
}

export default Overview