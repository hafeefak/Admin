import React, { useEffect, useState } from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import { productvalidationschema } from './validationschema' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { Fetch } from './Context/FetchProducts'


function Products() {
    // const[productList,setProductList]=useState([])
    const navigate=useNavigate()
    // const {productList}=useContext(Fetch)
    // console.log(productList)
    const initialvalues={
        name:"",
        description:"",
        quantity:"",
        price:"",
        category:""
}




const onSubmit=async(values)=>{
    await axios.post("http://localhost:5001/products",values)
}
  return (
    <div>
        <Formik   initialValues={initialvalues}
        validationSchema={productvalidationschema}
        onSubmit={onSubmit}>
            <Form>
                <label>name</label>
                <Field type="text" name="name"/>
                <ErrorMessage name="name" component="div"/>
                <label>description</label>
                <Field type="text" name="description"/>
                <ErrorMessage name="description" component="div"/>
                <label>quantity</label>
                <Field type="text" name="quantity"/>
                <ErrorMessage name="quantity" component="div"/>
                <label>price</label>
                <Field type="text" name="price"/>
                <ErrorMessage name="price" component="div"/>
                <label>category</label>
                <Field type="text" name="category"/>
                <ErrorMessage name="category" component="div"/>

                <button className='text-amber-50' type="submit">Add</button>
                <button  className="text-amber-50 w-20 h-10"onClick={()=>navigate("/allproducts")}>All</button>
            </Form>
        </Formik>
     
    </div>
  )
}

export default Products
