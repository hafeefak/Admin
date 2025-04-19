import React from 'react'
import { createContext } from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const Fetch=createContext()

function FetchProducts({children}) {
    const[productList,setProductList]=useState([])

    const products=async()=>{
        const response=await axios.get("http://localhost:5001/products")
            setProductList(response.data)
            console.log(productList)
    }
    products();

  return (
    <div>
      <Fetch.Provider value={{productList,setProductList}}>
        {children}
      </Fetch.Provider>
    </div>
  )
}

export default FetchProducts
