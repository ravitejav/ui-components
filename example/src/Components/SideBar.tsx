import React from 'react'
import { Link } from 'react-router-dom'
import { AVAILABLE_COMPONENTS } from '../helpers/Constants/constants'
import { ComponentRouter } from '../Models/ConstantModels'

export const SideBar = () => {
  return (
    <aside className='text-white' >
      <Link to={'/'} className="flex justify-center mb-4 mt-3 outline-none">
        <h1 className='p-2 text-yellow-500 text-3xl'>Ui-Components</h1>
      </Link>
      <div className='font-bold flex justify-center text-xl'>
        Components
      </div>
      <ul className='grid grid-flow-col gap-1 mt-4'>
        {AVAILABLE_COMPONENTS.map(
          (componentRoute: ComponentRouter, index: number) => (
            <li key={index} className=' cursor-pointer'>
              <Link className='block hover:bg-slate-700 p-0.5 pl-2 rounded-md text-lg outline-none' to={componentRoute.url}>
                {componentRoute.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </aside>
  )
}
