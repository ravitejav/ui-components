import React from 'react'
import { Link } from 'react-router-dom'
import { AVAILABLE_COMPONENTS } from '../helpers/contants'
import { ComponentRouter } from '../Models/ConstantModels'

export const SideBar = () => {
  return (
    <nav className='text-white'>
      <Link to={'/'}>
        <h1 className='p-2 text-yellow-500 text-2xl'>Ui-Components</h1>
      </Link>
      <ul className='grid grid-flow-col gap-1'>
        {AVAILABLE_COMPONENTS.map(
          (componentRoute: ComponentRouter, index: number) => (
            <li key={index} className='hover:bg-slate-700 cursor-pointer'>
              <Link className='block' to={componentRoute.url}>
                {componentRoute.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
