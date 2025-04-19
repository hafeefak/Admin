import react from "react"
import { Formik,Field,ErrorMessage,Form } from "formik"
import { validationschema } from "./validationschema"
import axios from "axios"
import { useNavigate } from "react-router-dom"



function Login() {
    const navigate=useNavigate()
    const initialvalues={
        email:"",
        password:""
    }
    const onSubmit=async(values) =>{
           const response=await axios.get("http://localhost:5001/users")
           console.log(values)
           const user=response.data.find((u)=>u.email==values.email && u.password==values.password)

           if(user){
            localStorage.setItem("user",user.email)
            localStorage.setItem("password",user.password)
            navigate("/dashboard")
           }
    }


  return (
    <div>

    <Formik  initialValues={initialvalues}
        validationSchema={validationschema}
        onSubmit={onSubmit}>
         
        <Form>
            <label>email</label>
            <Field type="email" name="email"/>
            <ErrorMessage name="email" component="div"/>
            <label>password</label>
            <Field type="password" name="password"/>
            <ErrorMessage name="password" component="div"/>

            <button type="submit" class="text-amber-50">Submit</button>
        </Form>
        </Formik>
    </div>
  )
}

export default Login
