import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <h1 className='text-4xl text-primary'>Navbar</h1>
      <Outlet />
    </>

  )
}

export default HomeLayout