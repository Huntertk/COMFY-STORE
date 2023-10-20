import React, { useState } from 'react'
import { formatPrice } from '../utils'

const FormRange = ({label, name, size, price}) => {
    const step = 1000
    const maxPrice = 100000 
    const [selectedPrice, setSelectedPrice] = useState(price || maxPrice)


  return (
    <div className='form-control'>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize'>{label}</span>
            <span>{formatPrice(selectedPrice)}</span>
        </label>
        <input 
        type="range" 
        name={name} 
        id={name} 
        min={0} 
        max={maxPrice} 
        value={selectedPrice} 
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className={`range radio-primary ${size}`}
        />    
        <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span>0</span>
            <span>Max: {formatPrice(maxPrice)}</span>
        </div>
    </div>
  )
}

export default FormRange