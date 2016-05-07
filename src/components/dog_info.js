import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitDogInfo, fetchBreeds } from '../actions';
import Input from './form-elements/input';
import Select from './form-elements/select';
import axios from 'axios';
import _ from 'lodash';

const FIELDS = ['name', 'gender', 'age', 'breed', 'activityLevel', 'weight', 'bodyComposition']

class DogInfo extends Component {
  componentDidMount() {
    this.props.fetchBreeds()
  }

  onSubmit(props) {
    this.props.submitDogInfo(props)
    this.context.router.push('/create-account')
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
        <Input field={name} label='Dog Name' placeholder='Molly' />
        <Input field={age} label='Age' placeholder='5' />
        <Select field={gender} label='Gender' options={['Female', 'Male']} />
        <Select field={breed} label='Breed' options={this.props.breeds.map((b) => { return b.name })} />
        <Select field={activityLevel} label='Activity Level' options={['Couch Potato', 'Active', 'Triathlete']} />
        <Input field={weight} label='Weight in lbs' placeholder='60' />
        <Select field={bodyComposition} label='Body Composition' options={['Little Skinny', 'Just Right', 'Little Chunk', 'Overweight']} />
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
  fields: FIELDS,
  validate
}, mapStateToProps, { submitDogInfo, fetchBreeds })(DogInfo)
