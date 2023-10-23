import React from 'react'
import { FormInput, SubmitBtn } from '../components/index'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import { loginUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'


export const action = (store) => async ({request}) => {

  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const res = await customFetch.post('/auth/local', data)
    store.dispatch(loginUser(res.data))
    toast.success("User login successfully")
    return redirect("/")
    // return null
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong")
    return null
  } 
}


const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method="POST" className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>
          Login
        </h4>
        <FormInput 
        label={"Email"} 
        type={"email"} 
        name={"identifier"} 
        placeholder={"john@doe.com"}
        />
        <FormInput 
        label={"Password"} 
        type={"password"} 
        name={"password"} 
        placeholder={"XXXXXXXXXX"}
        />
        <div className="mt-4">
          <SubmitBtn text={"Login"} />
          
        </div> 
        {/* <button type='button' className='btn btn-secondary btn-block '>Guest user</button> */}
          <p className="text-center">not a member? 
          <Link to="/register" className='ml-2 link link-hover link-primary capitalize'>
            Register
          </Link>
          
          </p>
      </Form>

    </section>
  )
}

export default Login