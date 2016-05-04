import axios from 'axios';

export const FETCH_BREEDS = 'FETCH_BREEDS';
export const SUBMIT_DOG_INFO = 'SUBMIT_DOG_INFO';
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

export const fetchBreeds = (breeds) => {
  const url = 'http://localhost:8000/breeds'
  const request = axios.get(url)

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: FETCH_BREEDS, payload: data})
    });
  };
}

export const submitDogInfo = (info) => {
  const url = 'http://localhost:8000/dogs'
  const request = axios.post(url, info)

  return (dispatch) => {
    request.then(({data}) => {
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
