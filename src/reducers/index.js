import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dogInfoForm from './dog_info_reducer';

const SignUpApp = combineReducers({
  dogInfoForm,
  form: formReducer
});

export default SignUpApp
