import React from 'react'
import { Routes, Route } from 'react-router-dom'


export const DashboardRoutes = () => {
  return (
    <>
    <div className='container mt-2'>
      <Routes>
        <Route path='/ejemplo' element={'componente ejemplo'} />
      </Routes>
    </div>
    </>
  )
}
