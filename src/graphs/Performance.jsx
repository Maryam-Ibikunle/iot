import React from 'react'
import { CartesianGrid, ResponsiveContainer, XAxis, YAxis, Line } from 'recharts'
// import data from '../constants/index.js'
import { LineChart } from 'recharts'

const Performance = () => {
    const data = [
        { time: "10:00", cpu: 42, memory: 55, network: 30 },
        { time: "11:00", cpu: 58, memory: 61, network: 45 },
        { time: "12:00", cpu: 48, memory: 57, network: 38 },
        { time: "13:00", cpu: 72, memory: 68, network: 52 },
        { time: "14:00", cpu: 65, memory: 70, network: 48 },
        { time: "15:00", cpu: 80, memory: 76, network: 60 },
      ]
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="5 5"/>
            <XAxis dataKey="time"/>
            <YAxis domain={[0,100]} tickFormatter={(value=>`${value}%`)}/>
            <Line type="monotone" dataKey="cpu" name="CPU" stroke="#06b6d4" strokeWidth={2} dot={false}/>
            <Line type="monotone" dataKey="memory" name="MEMORY" stroke="#32c09c " strokeWidth={2} dot={false}/>
            <Line type="monotone" dataKey="network" name="NETWORK" stroke="#f09876" strokeWidth={2} dot={false}/>
            
        </LineChart>
    </ResponsiveContainer>

  )
}

export default Performance