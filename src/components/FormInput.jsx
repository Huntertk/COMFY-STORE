import React from 'react'

const FormInput = ({label, name, type, placeholder}) => {
  return (
    <div className="form-control">
  <label className="label">
    <span className="label-text">{label}</span>  
  </label>
  <input 
    type={type} 
    placeholder={placeholder}
    className="input input-bordered" 
    name={name}
    autoComplete='off'
  />
</div>
  )
}

export default FormInput