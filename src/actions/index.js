export const SUBMIT_DOG_INFO = 'SUBMIT_DOG_INFO';
export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';

export const submitDogInfo = (info) => {
  console.log('dog info: ', info);
  // make POST request here & use middleware to wait
  // for success or failure to be returned

  // for now fake the data being returned on successful post
  let request = info

  return {
    type: SUBMIT_DOG_INFO,
    payload: request
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
