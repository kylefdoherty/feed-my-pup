import { SUBMIT_DOG_INFO, FETCH_BREEDS } from '../actions';

const DogInfo = (state = { breeds: []}, action = {}) => {
  switch (action.type) {
    case SUBMIT_DOG_INFO:
      return action.payload
    case FETCH_BREEDS:
      return { breeds: action.payload }
    default:
      return state
  }
}

export default DogInfo
