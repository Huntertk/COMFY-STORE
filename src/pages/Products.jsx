import React from 'react'
import { Filters, PaginationContainer, ProductsContainer } from '../components/index';
import { customFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';

const url = '/products'

export const loader = async (data) => {
  const {request} = data
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]) 
  // const search = params.get('search')
  console.log(params);
  // console.log(search);
  
  const res = await customFetch.get(url, {params}) 
    return {products: res.data.data, meta: res.data.meta, params}
}

const Products = () => {
  const data = useLoaderData()
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products