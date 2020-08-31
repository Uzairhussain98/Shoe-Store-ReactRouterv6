import React from 'react'
import {
  Outlet,
  } from 'react-router-dom';


const Store = () => {
  return (
    <div>
        This Is A Store
        <Outlet/>

      
    </div>
  )
}

export default Store
