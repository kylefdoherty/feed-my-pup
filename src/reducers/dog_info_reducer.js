import { SUBMIT_DOG_INFO } from '../actions';

const DogInfo = (state = [], action = {}) => {
  switch (action.type) {
    case SUBMIT_DOG_INFO:
      console.log('made it to reducer');
      return 'success'

    default:
      return state
  }
}

export default DogInfo
