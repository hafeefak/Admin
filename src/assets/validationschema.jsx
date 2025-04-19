import *  as yup from "yup"


import React from 'react'

export const validationschema=()=>yup.object({
    email:yup.string().required("email is needed"),
  
    password:yup.string()
    
    .required("paswword is required")
})


export const productvalidationschema=()=>yup.object({
    name:yup.string().required("name is needed"),
    description:yup.string().required("description is needed"),
    quantity:yup.string().required("quantity is needed"),
    price:yup.string().required("price is needed"),
    category:yup.string().required("category is needed")
})