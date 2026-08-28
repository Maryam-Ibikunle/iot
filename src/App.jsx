import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Overview from './pages/Overview'
import Devices from './pages/Devices'
import Alerts from './pages/Alerts'
import Realtime from './pages/Realtime'

const App = () => {
  return (
      
      <BrowserRouter>  
      <div className='flex min-h-screen'>
        <Navbar/>   
          <main className='flex-1'>
            <Routes>
              <Route path='/' element={<Overview/>}/>
              <Route path='/devices' element={<Devices/>}/>
              <Route path='/realtime' element={<Realtime/>}/>
              <Route path='alerts' element={<Alerts/>}/>
              {/* <Route path='/setting' element={<Setting/>}/>  */}
            </Routes>
          </main>
          </div> 
      </BrowserRouter>

  )
}

export default App