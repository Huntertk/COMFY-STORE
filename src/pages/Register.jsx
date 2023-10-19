import React from 'react'
import { FormInput, SubmitBtn } from '../components/index'
import { Form, Link } from 'react-router-dom'


const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method="POST" className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>
          Register
        </h4>
        <FormInput 
        label={"Username"} 
        type={"text"} 
        name={"username"} 
        placeholder={"username"}
        />
        <FormInput 
        label={"Email"} 
        type={"email"} 
        name={"email"} 
        placeholder={"john@doe.com"}
        />
        <FormInput 
        label={"Password"} 
        type={"password"} 
        name={"password"} 
        placeholder={"XXXXXXXXXX"}
        />
        <div className="mt-4">
          <SubmitBtn text={"Register"} />
        </div> 
        <button type='button' className='btn btn-secondary btn-block '>Guest user</button>
          <p className="text-center">Already a member? 
          <Link to="/login" className='ml-2 link link-hover link-primary capitalize'>
            Login
          </Link>
          </p>
      </Form>

    </section>
  )
}

export default Register