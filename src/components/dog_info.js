import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitDogInfo, fetchBreeds } from '../actions';
import Input from './form-elements/input';
import MuiSelect from './form-elements/mui_select';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import _ from 'lodash';

const FIELDS = ['name', 'gender', 'age', 'breed', 'activityLevel', 'weight', 'bodyComposition']

class DogInfo extends Component {

  componentDidMount() {
    this.props.fetchBreeds()
  }

  onSubmit(props) {
    console.log('props', props)
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
      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Input field={name} label='Dog Name' placeholder='Molly' />
          <Input field={age} type='number' pattern='\d*' label='Age' placeholder='5' />
          <MuiSelect field={gender} label='Gender' options={['Female', 'Male']} />
          <MuiSelect field={breed} label='Breed' options={this.props.breeds.map((b) => { return b.name })} />
          <MuiSelect field={activityLevel} label='Activity Level' options={['Couch Potato', 'Active', 'Triathlete']} />
          <Input field={weight} type='number' pattern='\d*' label='Weight in lbs' placeholder='60' />
          <MuiSelect field={bodyComposition} label='Body Composition' options={['Little Skinny', 'Just Right', 'Little Chunk', 'Overweight']} />
          <div style={{marginTop: '25px'}}>
            <RaisedButton type='submit' disabled={submitting} label="Get Your Pup's Nutrition Plan" backgroundColor='#1de9b6'/>
          </div>
        </form>
      </div>
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
