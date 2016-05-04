import axios from 'axios';

export const SUBMIT_DOG_INFO = 'SUBMIT_DOG_INFO';
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

export const submitDogInfo = (info) => {
  const url = 'http://localhost:8000/dogs'
  const request = axios.post(url, info)

  return (dispatch) => {
    request.then(({data}) => {
      console.log(data)
      dispatch({type: SUBMIT_DOG_INFO, payload: data})
    });
  };
}

export const submitUserInfo = (info) => {
  console.log('user info', info);

  let request = info

  return {
    type: SUBMIT_USER_INFO,
    payload: request
  }
}
