import React from 'react'
import { Link } from 'react-router-dom'
import { AVAILABLE_COMPONENTS } from '../helpers/contants'
import { ComponentRouter } from '../Models/ConstantModels'

export const SideBar = () => {
  return (
    <nav className='flex-item'>
      <ul>
        {AVAILABLE_COMPONENTS.map(
          (componentRoute: ComponentRouter, index: number) => (
            <li key={index}>
              <Link to={componentRoute.url}>{componentRoute.name}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
