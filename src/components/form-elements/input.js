import React from 'react';
import TextField from 'material-ui/TextField';

const Input = ({label, placeholder, field, type='text', pattern=''}) => {
  const showError = field.touched ? field.error : '';

  return(
    <div >
      <TextField hintText={placeholder}
            floatingLabelText={label}
            type={type}
            pattern={pattern}
            floatingLabelStyle={{color: '#1de9b6'}}
            underlineStyle={{borderColor: '#1de9b6'}}
            underlineFocusStyle={{borderColor: '#1de9b6'}}
            errorText={ showError }
            {...field}
          />
    </div>
  )
}

export default Input
