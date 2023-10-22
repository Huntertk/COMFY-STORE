import React from 'react'
import { FeaturedProduct, Hero } from '../components/index'
import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'

const url = '/products?featured=true'

export const loader = async() => {
  const {data} = await customFetch.get(url)
  
  return {products: data.data}
}


const Landing = () => {

  return (
    <>
    <Hero/>
    <FeaturedProduct />
    </>
  )
}

export default Landing