export const navlinks = [
    {id:"overview", title:"overview", path:"/overview", type:"page"},
    {id:"devices", title:"devices", path:"/devices", type:"page"},
    {id:"realtime", title:"Real-Time Data", path:"/realtime", type:"page"},
    {id:"alerts", title:"Alerts", path:"/alerts", type:"page"}
]

export const report = [
    {id:"totaldevices", title:"total devices", figure:1248, analysis:["1203 Active", "45 Offline"], color:"from-white", icon:"text-white"},
    {id:"activedevice", title:"active device", figure:"12", analysis:["4 from last hour"], color:"from-orange-300", icon:"text-orange-300"},
    {id:"systemuptime", title:"system uptime", figure:"99.98%", analysis:["+0.02% this week"], color:"from-green-100", icon:"text-green-300"},
    {id:"networkload", title:"network load", figure:"45 TB", analysis:["Data Processed(24h)"], color:"from-orange-300", icon:"text-orange-300"},
]

export const deviceReport = [
    {id:"totalactive", title:"total active", figure:"1204", analysis:["12% from last week"], color:"from-white", icon:"text-white"},
    {id:"disconnected", title:"disconnected", figure:"42", analysis:["Requires attention"], color:"from-orange-300", icon:"text-orange-300"},
    {id:"lowbattery", title:"low battery", figure:"18", analysis:["< 15% remaining"], color:"from-green-100", icon:"text-[#00f0ff]"},
    {id:"networkload", title:"network load", figure:"45 TB", analysis:["Data Processed(24h)"], color:"from-orange-300", icon:"text-orange-300"},
]

export const data = [
        { time: "10:00", cpu: 42, memory: 55, network: 30 },
        { time: "11:00", cpu: 58, memory: 61, network: 45 },
        { time: "12:00", cpu: 48, memory: 57, network: 38 },
        { time: "13:00", cpu: 72, memory: 68, network: 52 },
        { time: "14:00", cpu: 65, memory: 70, network: 48 },
        { time: "15:00", cpu: 80, memory: 76, network: 60 },
      ]

export const recent = [
    {id:1, title:"Firmware v2.4 applied successfully", device:"Edge Gateway", time:"12 mins ago"},
    {id:2, title:"New admin session initiated", device:"User: M. Ibikunle", time:"1 hr ago"},
    {id:3, title:"Thermal threshold exceeded", device:"serval rack", time:"15 mins ago"},
    {id:4, title:"Sheduled data backup completed", device:"system", time:"12 hrs ago"},
]