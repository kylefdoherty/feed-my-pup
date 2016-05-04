import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dogInfo from './dog_info_reducer';

const SignUpApp = combineReducers({
  dogInfo,
  form: formReducer
});

export default SignUpApp
