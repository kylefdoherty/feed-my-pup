import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dogInfoReducer from './dog_info_reducer';

const SignUpApp = combineReducers({
  dogInfoReducer,
  form: formReducer
});

export default SignUpApp
