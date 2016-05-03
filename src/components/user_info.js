import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { submitUserInfo } from '../actions';
import _ from 'lodash';

const FIELDS = ['name', 'email', 'zipCode', 'password'];

const errorStyles = {
  color: 'red'
}

class UserInfo extends Component {
  errorMessage(field) {
    return(
      <div style={errorStyles} className='error'>
        { field.touched ? field.error : ''}
      </div>
    )
  }

  render() {
    const {
      fields: { name, email, zipCode, password },
      handleSubmit,
      resetForm,
      submitting
    } = this.props

    return(
      <form onSubmit={ handleSubmit(this.props.submitUserInfo) } >
        <div>
          <label>Name: </label>
          <input type='text' placeholder='John' {...name}/>
          { this.errorMessage(name) }
        </div>
        <div>
          <label>Email: </label>
          <input type='text' placeholder='john@gmail.com' {...email}/>
        </div>
        { this.errorMessage(email) }
        <div>
          <label>Zip Code: </label>
          <input type='text' placeholder='11217' {...zipCode}/>
          { this.errorMessage(zipCode) }
        </div>
        <div>
          <label>Password: </label>
          <input type='password' {...password}/>
          { this.errorMessage(password) }
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            Create Account
          </button>
        </div>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}

  _.each(FIELDS, (field) => {
    if(!values[field]) {
      errors[field] = 'Required field'
    }
  })

  return errors
}

export default reduxForm({
  form: 'userInfo',
  fields: FIELDS,
  validate
}, null, { submitUserInfo })(UserInfo)
