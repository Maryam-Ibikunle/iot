import React from 'react'
import Searchbar from '../components/Searchbar'
import Report from '../components/Report'
import Performance from '../graphs/Performance.jsx'
import { report } from '../constants'
import Recent from '../components/Recent.jsx'
import Metrics from '../components/Metrics.jsx'
const Overview = () => {
  return (
    <main className="bg-gray-950 w-screen">
        <div className='mx-4 md:mx-10 pt-5'>
            <Searchbar/> 
        </div>
        <div id='body' className='mt-10 flex flex-col '>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-10 text-[#6a9b8b]'>
                {report.map(r=>(
                    <div className={`relative  w-full  aspect-7/5 rounded-2xl p-0.5 bg-linear-to-r ${r.color}  to-black-500 flex flex-row justify-center items-center animate-gradient bg-size-[200%_200%]`}>
                        <Report key={r.id} title={r.title} figure={r.figure} analysis={r.analysis} color={r.color} icon={r.icon}/>
                    </div>
                ))}
            </div>
            <div className='flex flex-col md:flex-row justify-between mx-10 items-center '>
                <div className='w-full w- md:w-5/7 md:h-120 h-80 rounded-2xl text-white bg-gray-800 p-5 flex flex-col mt-10 md:mr-2'>
                    <div className='mb-5'>
                        <h2 className='text-3xl font-bold tracking-wider'>System Performance</h2>
                        <span>Real time telemetry aggregate</span>
                    </div>  
                    <div className='w-full min-w-0 h-full'>
                    <Performance/> 
                    </div>
                </div>
                <Recent/>
            </div>
            <div className='mt-10 flex flex-col items-center'>
                <Metrics/>
            </div>

            </div>
    </main>
  )
}

export default Overview