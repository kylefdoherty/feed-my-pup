import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitUserInfo } from '../actions';
import Input from './form-elements/input';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import _ from 'lodash';

const FIELDS = ['email', 'password'];

class UserInfo extends Component {
  componentDidMount() {
    // if no dog info e.g. user refreshes page
    // send them back to root to fill in dog info again
    if(Object.keys(this.props.dogInfo).length === 0) {
      this.context.router.push('/')
    }
  }

  onSubmit(props) {

    // const url = 'http://localhost:8000/signup/api/user-signup'
    const url = 'https://feed-my-pup-api.herokuapp.com/signup/api/user-signup';
    var payload = {}
    payload.user = props
    payload.dog = this.props.dogInfo

    console.log('url', url)

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

  onBoom(props) {
    console.log('inside the boom method')
  }

  render() {
    const {
      fields: {email, password},
      handleSubmit,
      resetForm,
      submitting
    } = this.props

    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
        <Input field={email} label='Email' placeholder='john@gmail.com' />
        <Input type='password' field={password} label='Password' placeholder='' />
        <div style={{marginTop: '15px'}}>
          <RaisedButton type='submit' disabled={submitting} label="Create Account" backgroundColor='#1de9b6'/>
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
  console.log('doginfo', state.dogInfoForm.dogInfo)
  return {
    dogInfo: state.dogInfoForm.dogInfo
  }
}

export default reduxForm({
  form: 'userInfo',
  fields: FIELDS,
  validate
}, mapStateToProps, { submitUserInfo })(UserInfo)
