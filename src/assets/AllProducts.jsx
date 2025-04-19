import React,{useContext} from 'react'
import axios from 'axios'
import Products from './Prd'
import { Fetch } from './Context/FetchProducts'
import { useNavigate } from 'react-router-dom'

function AllProducts() {
    const navigate=useNavigate()
    const{productList}=useContext(Fetch)






  return (
    <div>
      
      <table>
        <tr>
            <th>name</th>
            <th>description</th>
            <th>quantity</th>
            <th>price</th>
            <th>category</th>
        </tr>
        {productList.map((product)=>(
        <tr>
           
            <>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>

            
            </>
           
        </tr>
        ))}
      </table>

      <button  className= "text-amber-50"onClick={()=>navigate("/products")}>back</button>
    </div>
  )
}

export default AllProducts
