import React from 'react'
import { useState } from 'react';
import Sparkline from '../graphs/Sparkline';
import { Plus } from 'lucide-react';

const Metrics = () => {
    const metrics = [
        {
            id: 1,
            title: "HVAC MAIN",
            value: "22.4°C",
            change: "↓ 1.2°",
            changeType: "positive",
            enabled: true,
            data: [
            { value: 20 },
            { value: 21 },
            { value: 20.5 },
            { value: 22 },
            { value: 21.5 },
            { value: 22.4 },
            ],
        },
        {
            id: 2,
            title: "FACILITY HUMIDITY",
            value: "45%",
            change: "− 0.0%",
            changeType: "neutral",
            enabled: false,
            data: [
            { value: 43 },
            { value: 44 },
            { value: 43.5 },
            { value: 45 },
            { value: 44.5 },
            { value: 45 },
            ],
        },
        {
            id: 3,
            title: "POWER DRAW",
            value: "142 kW",
            change: "↑ 4.5 kW",
            changeType: "negative",
            enabled: true,
            data: [
            { value: 120 },
            { value: 125 },
            { value: 130 },
            { value: 134 },
            { value: 139 },
            { value: 142 },
            ],
  },

      ];


      const [enabled, setEnabled] = useState(
        Object.fromEntries(
          metrics.map((metric) => [metric.id, metric.enabled])
        )
      );
      const toggleMetric = (id) => {
        setEnabled((prev) => ({
          ...prev,
          [id]: !prev[id]
        }))
      }

      return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-10 mb-15">
          {metrics.map((metric) => (
            <div key={metric.id} className='bg-gray-800 text-white w-full aspect-7/5 rounded-2xl flex flex-col justify-between p-6 hover:bg-gray-900 duration-300 ease-in-out'>
            <div className='inline-flex justify-between'>
                <h3 className="text-[11px] font-medium tracking-[0.15em] text-gray-300">{metric.title}</h3>
                <div className={`flex h-6 w-12 items-center rounded-full p-1 transition duration-400 ${ enabled[metric.id] ? "justify-end bg-cyan-400" : "justify-start bg-gray-700"}`} onClick={()=>toggleMetric(metric.id)}>
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                </div>
            </div>
            <div className="inline-flex items-center justify-between"> 
              <h3 className='text-2xl font-semibold tracking-tight text-slate-100'>{metric.value}</h3>
              <span className={`mb-1 text-sm ${ metric.changeType === "positive" ? "text-emerald-400" : metric.changeType === "negative" ? "text-red-300" : "text-gray-300" }`} >{metric.change}</span>
            </div>
    
              <Sparkline data={metric.data} />
            </div>
          ))}
            <button className='bg-gray-800 text-white w-full aspect-7/5 rounded-2xl flex flex-col justify-around p-6 hover:bg-gray-900 duration-300 ease-in-out items-center'>
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400">  
                <Plus/>
              </div>

          <span className="text-sm font-medium">
            Add Widget
          </span> 
        </button>
        </div>
  )
}

export default Metrics