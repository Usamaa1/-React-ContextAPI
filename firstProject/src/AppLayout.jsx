import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router'
import MyNav from './nav/nav'

export default function AppLayout() {

    const location = useLocation();


    console.log(location)

    const showNavbar = location.pathname !== '/404' && location.pathname !== '/no-navbar'; 




  return (
  <>
  
  {showNavbar && <MyNav />}
  <Suspense fallback={<div>Loading....</div>}>

  <Outlet></Outlet>
  </Suspense>
  </>
    
  )
}
