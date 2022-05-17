import React from 'react'

import { Timer } from 'ui-components'
import 'ui-components/dist/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SideBar } from './Components/SideBar'
import "./styles/main.css"
import "./styles/App.css"

const App = () => {
  return (
    <BrowserRouter>
      <main className='flex'>
        <div className='sidebarWrapper bg-slate-900'>
          <SideBar />
        </div>
        <div className='mainBlock'>
          <Routes>
            <Route path='/' element={<Timer seconds={400} />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
