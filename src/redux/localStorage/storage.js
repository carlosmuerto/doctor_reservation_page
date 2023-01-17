/* eslint-disable no-console */
/* eslint-disable max-len */
import loadingStatus from '../reduxConst';

const LOCAL_STORAGE_NAME = 'token';

const loadState = () => {
  try {
    const serializedData = localStorage.getItem(LOCAL_STORAGE_NAME);

    if (serializedData === null) {
      console.log('Local Storage null');
      return null;
    }
    // console.log('Info found it');
    const data = JSON.parse(serializedData);
    // console.log(data.user.token);
    const UserToken = data.user;

    return UserToken;
  } catch (error) {
    console.log('Local Storage error');
    return error;
  }
};

const saveState = (state) => {
  try {
    // if (state.User.loading === loadingStatus.succeeded) {
    //   // const serializedData = JSON.stringify(state.User);
    //   console.log('State for the User information');
    //   // localStorage.setItem('state', serializedData);
    // }
    if (state.Auth.loading === loadingStatus.succeeded) {
      console.log('Save token into the localStorage as "token"');
      // console.log('Auth state:', state.Auth.user.token);
      const token = JSON.stringify(state.Auth.user.token);
      localStorage.setItem(LOCAL_STORAGE_NAME, token);
    }
  } catch (error) {
    console.log('Error saving information into the Local Storage:', error);
  }
};

export {
  loadState,
  saveState,
};
