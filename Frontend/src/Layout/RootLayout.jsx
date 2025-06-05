import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollMemory from '../Util/ScrollMemory'

const RootLayout = () => {
  return (
    <div>
      <ScrollMemory/>
      <Outlet />
    </div>
  )
}

export default RootLayout