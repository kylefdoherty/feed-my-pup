import axios from 'axios';

export const FETCH_BREEDS = 'FETCH_BREEDS';
export const FETCH_DOG_INFO = 'FETCH_DOG_INFO';
export const SUBMIT_DOG_INFO = 'SUBMIT_DOG_INFO';
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

export const fetchBreeds = () => {
  const url = 'http://localhost:8000/breeds'
  const request = axios.get(url)

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: FETCH_BREEDS, payload: data})
    })
    .catch(function (response) {
      console.log('an error occured', data);
    });
  };
}

export const submitDogInfo = (info) => {
  return {
    type: SUBMIT_DOG_INFO,
    payload: info
  }
}

export const submitUserInfo = (info) => {
  console.log('user info', info);

  let request = info

  return {
    type: SUBMIT_USER_INFO,
    payload: request
  }
}
