import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitUserInfo } from '../actions';
import axios from 'axios';
import _ from 'lodash';

const FIELDS = ['name', 'email', 'zipCode', 'password', 'dogId'];

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

  onSubmit(props) {
    const url = 'http://localhost:8000/users'
    const request = axios.post(url, props)

    request.then(({data}) => {
      this.props.submitUserInfo(data)
      // this.context.router.push('/user-dash')
    })
    .catch(function (response) {
      console.log('an error occured', data);
    });
  }

  render() {
    const {
      fields: { name, email, zipCode, password, dogId },
      handleSubmit,
      resetForm,
      submitting
    } = this.props

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
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
          <input type='hidden' {...dogId}/>
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

UserInfo.contextTypes = {
  store: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    initialValues: { dogId: state.dogInfoForm.dogInfo.id }
  }
}

export default reduxForm({
  form: 'userInfo',
  fields: FIELDS,
  validate
}, mapStateToProps, { submitUserInfo})(UserInfo)
