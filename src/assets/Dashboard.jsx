import React from 'react'
import {useNavigate} from "react-router-dom"

function Dashboard() {
    const navigate=useNavigate() ;

    
    const handleLogout=()=>{
        localStorage.clear()
        navigate("/")

    }
  return (
    <div>
      <button  className="text-amber-50" onClick={()=>navigate("/products")}>view products</button>
      <button className="text-amber-50" onClick={handleLogout()} >logout</button>
    </div>
  )
}

export default Dashboard
