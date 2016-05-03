import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { submitDogInfo } from '../actions';
import _ from 'lodash';

const FIELDS = ['dogName', 'age', 'breed', 'allergies', 'activityLevel', 'weight', 'bodyComposition']

const errorStyles = {
  color: 'red'
}

class DogInfo extends Component {

  errorMessage(field) {
    return(
      <div style={errorStyles} className='error'>
        { field.touched ? field.error : ''}
      </div>
    )
  }

  render() {
    const {
      fields: { dogName, age, breed, allergies, activityLevel, weight, bodyComposition },
      handleSubmit,
      resetForm,
      submitting
    } = this.props

    return(
      <form onSubmit={ handleSubmit(this.props.submitDogInfo) }>
        <div>
          <label>Dog Name: </label>
          <input type='text' placeholder='Molly' {...dogName}/>
          { this.errorMessage(dogName) }
        </div>
        <div>
          <label>Age: </label>
          <input type='number' placeholder='5' {...age}/>
          { this.errorMessage(age) }
        </div>
        <div>
          <label>Breed: </label>
          <input type='text' placeholder='Pitbull' {...breed}/>
          { this.errorMessage(breed) }
        </div>
        <div>
          <label>Allergies: </label>
          <input type='text' placeholder='Soy' {...allergies}/>
          { this.errorMessage(allergies) }
        </div>
        <div>
          <label>Activity Level: </label>
          <input type='text' placeholder='Active' {...activityLevel}/>
          { this.errorMessage(activityLevel) }
        </div>
        <div>
          <label>Weight in lbs: </label>
          <input type='number' placeholder='60' {...weight}/>
          { this.errorMessage(weight) }
        </div>
        <div>
          <label>Body Composition: </label>
          <input type='text' placeholder='Perfecto' {...bodyComposition}/>
          { this.errorMessage(bodyComposition) }
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            Get Your Pup's Nutrition Plan
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
      console.log(errors)
    }
  })

  return errors
}

export default reduxForm({
  form: 'dogInfo',
  fields: FIELDS,
  validate
}, null, { submitDogInfo })(DogInfo)
