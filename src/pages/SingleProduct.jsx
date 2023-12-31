import React, {useState} from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice, customFetch, generateAmount} from '../utils/index'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

export const loader = async (data) => {
  const {id} = data.params
  const response = await customFetch.get(`/products/${id}`)
  return {product: response.data}
}

const SingleProduct = () => {
  const dispatch = useDispatch()

  const {product} = useLoaderData()
  const {image, title, price, description, colors, company} = product.data.attributes
  const dollarsaAmount = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  } 

  const cartProduct = {
    cartID: product.data.id + productColor,
    productID: product.data.id,
    image,
    title, 
    price,
    company,
    productColor,
    amount

  }
  const addToCart = () => {
    dispatch(addItem({product: cartProduct}))
  }


  return (
     <section>
        <div className="text-md breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/products">Products</Link></li> 
            <li className='uppercase'>{title}</li>
        </ul>
        </div>
        {/* Products*/}
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">

          {/* Image */}
          <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />

          {/* Product */}
          <div>
            <h1 className="capitalize text-3xl font-bold ">{title}</h1>
            <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
            <p className="mt-3 text-xl">{dollarsaAmount}</p>
            <p className="mt-6 leading-8">{description}</p>
            {/* Colors */}
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                colors
              </h4>
                <div className='mt-2'>
                  {colors.map((color) => {
                    return <button style={{backgroundColor:color}} key={color} className={`badge w-6 h-6 mr-2 duration-500 ${color === productColor && 'border-2 border-secondary scale-110'}`} type='button' 
                    onClick={() => setProductColor(color)}
                    ></button>
                  })}
                </div>
            </div>
            {/* Amount */}
              <div className="form-control w-full max-w-xs">
                  <label className="label" htmlFor='amount'>
                    <h4 className='text-md font-medium -tracking-wider capitalize'>amount</h4>
                  </label>
                  <select id='amount' className='select select-secondary select-bordered select-md' value={amount} onChange={handleAmount}>
                    {generateAmount(5)}
                  </select>
              </div>

            {/* Cart BTN */}
            <div className="mt-10">
              <button className="btn btn-secondary btn-md"
              onClick={addToCart}
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
     </section>
  )
}

export default SingleProduct