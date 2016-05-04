import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitDogInfo, fetchBreeds } from '../actions';
import _ from 'lodash';

const FIELDS = ['dogName', 'age', 'breed', 'allergies', 'activityLevel', 'weight', 'bodyComposition']

const errorStyles = {
  color: 'red'
}

class DogInfo extends Component {
  componentDidMount() {
    const breeds = this.props.fetchBreeds()
  }

  errorMessage(field) {
    return(
      <div style={errorStyles} className='error'>
        { field.touched ? field.error : ''}
      </div>
    )
  }

  breedSelect(field) {
    return(
      <div>
        <label>Breed: </label>
        <select value={field.value || ''} {...field}>
          <option value=''>...select breed</option>
          {this.props.breeds.map((breed) => {
            return(
              <option key={breed} value={breed}>{breed}</option>
            )
          })}
        </select>
        { this.errorMessage(field) }
      </div>
    )
  }

  onSubmit(props) {
    this.props.submitDogInfo(props)
    this.context.router.push('/create-account')
  }

  render() {
    console.log('breeds: ', this.props.breeds)
    const {
      fields: { dogName, age, breed, allergies, activityLevel, weight, bodyComposition },
      handleSubmit,
      resetForm,
      submitting
    } = this.props

    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
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
        { this.breedSelect(breed) }
        <div>
          <label>Allergies: </label>
          <input type='text' placeholder='Soy' {...allergies}/>
          { this.errorMessage(allergies) }
        </div>
        <div>
          <label>Activity Level: </label>
          <select value={activityLevel.value || ''} {...activityLevel}>
            <option value=''>...select activity level</option>
            <option value='couch potato'>Couch Potato</option>
            <option value='active'>Active</option>
            <option value='triathlete'>Triathlete</option>
          </select>
          { this.errorMessage(activityLevel) }
        </div>
        <div>
          <label>Weight in lbs: </label>
          <input type='number' placeholder='60' {...weight}/>
          { this.errorMessage(weight) }
        </div>
        <div>
          <label>Body Composition: </label>
          <select value={bodyComposition.value || ''} {...bodyComposition}>
            <option value=''>...select body composition</option>
            <option value='little skinny'>Little Skinny</option>
            <option value='just right'>Just Right</option>
            <option value='little chunky'>Little Chunky</option>
            <option value='overweight'>Overweight</option>
          </select>
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
    }
  })

  return errors
}

DogInfo.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = (state) => {
  return { breeds: state.dogInfo.breeds }
}

export default reduxForm({
  form: 'dogInfo',
  fields: FIELDS
}, mapStateToProps, { submitDogInfo, fetchBreeds })(DogInfo)
