import React from 'react';

const errorStyles = {
  color: 'red'
}

const Input = ({label, placeholder, field, type='text'}) => {
  return(
    <div>
      <label>{label}: </label>
      <input type={type} placeholder={placeholder} {...field}/>
      <div style={errorStyles} className='error'>
        { field.touched ? field.error : ''}
      </div>
    </div>
  )
}

export default Input
