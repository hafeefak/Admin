import React from 'react'
import {Routes,Route} from "react-router-dom"
import Dashboard from './assets/Dashboard'
import Login from './assets/Login'
import Products from './assets/products'
import AllProducts from './assets/AllProducts'
import FetchProducts from './assets/Context/FetchProducts'


function App() {
  return (
 <>
  <FetchProducts>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/dashboard"  element={<Dashboard/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/allproducts" element={<AllProducts/>}/>
      </Routes>
      </FetchProducts>
  
    
      </>
  
  )
}

export default App
