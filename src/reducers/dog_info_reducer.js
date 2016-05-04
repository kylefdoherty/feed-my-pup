import { SUBMIT_DOG_INFO, FETCH_BREEDS } from '../actions';

const defaultState = () => {
  return(
    {
      breeds: [],
      dogInfo: {}
    }
  )
}

const DogInfo = (state = defaultState(), action = {}) => {
  switch (action.type) {
    case SUBMIT_DOG_INFO:
      state.dogInfo = action.payload

      return state
    case FETCH_BREEDS:
      state.breeds = action.payload

      return state
    default:
      return state
  }
}

export default DogInfo
