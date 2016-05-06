import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitDogInfo, fetchBreeds } from '../actions';
import axios from 'axios';
import _ from 'lodash';

const FIELDS = ['name', 'gender', 'age', 'breed', 'activityLevel', 'weight', 'bodyComposition']

const errorStyles = {
  color: 'red'
}

class DogInfo extends Component {
  componentDidMount() {
    this.props.fetchBreeds()
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
              <option key={breed.id} value={breed.name}>{breed.name}</option>
            )
          })}
        </select>
        { this.errorMessage(field) }
      </div>
    )
  }

  onSubmit(props) {
    const url = 'http://localhost:8000/signup/api/dogs'
    const request = axios.post(url, props)

    request.then(({data}) => {
      console.log('its alive: ', data)
      this.props.submitDogInfo(data)
      this.context.router.push('/create-account')
    })
    .catch(function (response) {
      console.log('an error occured', data);
    });
  }

  render() {
    const {
      fields: { name, gender, age, breed, activityLevel, weight, bodyComposition },
      handleSubmit,
      resetForm,
      submitting
    } = this.props

    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <div>
          <label>Dog Name: </label>
          <input type='text' placeholder='Molly' {...name}/>
          { this.errorMessage(name) }
        </div>
        <div>
          <label>Age: </label>
          <input type='number' placeholder='5' {...age}/>
          { this.errorMessage(age) }
        </div>
        <div>
          <label>Gender: </label>
          <select value={gender.value || ''} {...gender}>
            <option value=''>...select gender</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
          </select>
          { this.errorMessage(gender) }
        </div>
        { this.breedSelect(breed) }
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
  return {
    breeds: state.dogInfoForm.breeds,
    initialValues: state.dogInfoForm.dogInfo
  }
}

export default reduxForm({
  form: 'dogInfo',
  fields: FIELDS
}, mapStateToProps, { submitDogInfo, fetchBreeds })(DogInfo)
