import React from 'react';
import TextField from 'material-ui/TextField';

const errorStyles = {
  color: 'red'
}

const styles = {
  errorStyle: {
    color: 'red',
  },
  underlineStyle: {
    borderColor: 'green accent-3',
  },
  floatingLabelStyle: {
    color: 'green accent-3',
  },
  floatingLabelFocusStyle: {
    color: 'orange lighten-1',
  },
};

const Input = ({label, placeholder, field, type='text'}) => {
  const showError = field.touched ? field.error : '';

  return(
    <div>
      <TextField hintText={placeholder}
            floatingLabelText={label}
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
