import React from 'react'

const FormInput = ({label, name, type, placeholder, size, defaultValue}) => {
  return (
    <div className="form-control">
  <label className="label capitalize">
    <span className="label-text">{label}</span>  
  </label>
  <input 
    type={type} 
    placeholder={placeholder}
    className={`input input-bordered ${size}`} 
    name={name}
    autoComplete='off'
    defaultValue={defaultValue}
  />
</div>
  )
}

export default FormInput