import { combineReducers } from 'redux';
import dogInfoReducer from './dog_info_reducer';

const SignUpApp = combineReducers({dogInfoReducer});

export default SignUpApp
