import React, { Component } from 'react';

export default class DogInfo extends Component {
  render() {
    return(
      <form>
        <div>
          <label>Dog Name: </label>
          <input type='text' placeholder='Molly' />
        </div>
        <div>
          <label>Age: </label>
          <input type='number' placeholder='5' />
        </div>
        <div>
          <label>Breed: </label>
          <input type='text' placeholder='Pitbull' />
        </div>
        <div>
          <label>Allergies: </label>
          <input type='text' placeholder='Soy' />
        </div>
        <div>
          <label>Activity Level: </label>
          <input type='text' placeholder='Active' />
        </div>
        <div>
          <label>Weight in lbs: </label>
          <input type='number' placeholder='60' />
        </div>
        <div>
          <label>Body Composition: </label>
          <input type='text' placeholder='Perfecto' />
        </div>
      </form>
    )
  }
}
