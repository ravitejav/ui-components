/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SideBar } from './Components/SideBar'
import { HomePage } from './Components/HomePage'
import { TimerWrapper } from './Components/TimerWrapper'

import 'ui-components/dist/index.css'
import './styles/main.css'
import './styles/App.css'
import { NavBar } from './Components/NavBar'
import { Title } from './Components/Title'

const App = () => {
  return (
    <BrowserRouter>
      <main className='flex '>
        <div className='sidebarWrapper bg-slate-900'>
          <SideBar />
        </div>
        <div className='mainBlock flex flex-col'>
          <NavBar />
          <div className='p-5 bg-slate-400 h-full'>
            <Title />
            <Routes>
              <Route path='/ui-components' element={<HomePage />} />
              <Route path='/ui-components/timer' element={<TimerWrapper />} />
              <Route path='*' element={<Navigate to={'/ui-components'} />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
