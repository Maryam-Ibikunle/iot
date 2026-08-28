import React from 'react'
import {  ResponsiveContainer, LineChart, Line } from 'recharts'

const Sparkline = ({data}) => {
  return (
    <div className="w-full h-12">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <Line
                type="monotone"
                dataKey="value"
                stroke="currentColor"
                strokeWidth={2}
                dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Sparkline