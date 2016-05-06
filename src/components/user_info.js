import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitUserInfo } from '../actions';
import axios from 'axios';
import _ from 'lodash';

const FIELDS = ['email', 'password', 'dogId'];

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
    const url = 'http://localhost:8000/signup/api/users'
    const payload = {
      user: {},
      dog: {}
    }

    _.each(Object.keys(props), (attr) => {
      if(attr === 'dogId') {
        payload.dog[attr] = props[attr]
      } else {
        payload.user[attr] = props[attr]
      }
    })


    const request = axios.post(url, payload)

    request.then(({data}) => {
      const response = this.props.submitUserInfo(data)
      const id = response.payload.id
      this.context.router.push(`/users/${id}/dashboard`)
    })
    .catch(function (response) {
      console.log('an error occured', data);
    });
  }

  render() {
    const {
      fields: {email, password, dogId },
      handleSubmit,
      resetForm,
      submitting
    } = this.props

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <div>
          <label>Email: </label>
          <input type='text' placeholder='john@gmail.com' {...email}/>
        </div>
        { this.errorMessage(email) }
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
  router: PropTypes.object
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
