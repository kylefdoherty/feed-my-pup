import React from 'react';

const errorStyles = {
  color: 'red'
}

const Input = ({label, placeholder, field}) => {
  return(
    <div>
      <label>{label}: </label>
      <input type='text' placeholder={placeholder} {...field}/>
      <div style={errorStyles} className='error'>
        { field.touched ? field.error : ''}
      </div>
    </div>
  )
}

export default Input
