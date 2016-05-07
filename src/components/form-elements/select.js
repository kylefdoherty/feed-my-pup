import React from 'react';

const errorStyles = {
  color: 'red'
}

const Select = ({field, label, options}) => {
  const selectOptions = options.map((opt) => {
    return(
      <option key={opt} value={opt}>{opt}</option>
    )
  });

  return(
    <div>
      <label>{label}: </label>
      <select value={field.value || ''} {...field}>
        <option value=''>...select {label.toLowerCase()}</option>
        { selectOptions }
      </select>
      <div style={errorStyles} className='error'>
        { field.touched ? field.error : ''}
      </div>
    </div>
  )
}

export default Select
