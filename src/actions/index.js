export const CREATE_POST = 'CREATE_POST';

export const submitDogInfo = (info) => {
  console.log('dog info: ', info)
  // make POST request here & use middleware to wait
  // for success or failure to be returned

  // for now fake the data being returned on successful post
  let request = info

  return {
    type: CREATE_POST,
    payload: request
  }
}
