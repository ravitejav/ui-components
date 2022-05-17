import React from 'react'

export const NavBar = () => {

  const [, setSearchText] = React.useState('');

  return (
    <div className='p-4 bg-slate-900 text-white text-2xl flex justify-end'>
      <input className='bg-transparent outline-none border-b p-0.5' type={"search"} placeholder={"Search"} onChange={(e) => setSearchText(e.target.value)} />
    </div>
  )
}
