/* eslint-disable no-console */
/* eslint-disable max-len */
import loadingStatus from '../reduxConst';

const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state');

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
    if (state.User.loading === loadingStatus.succeeded) {
      const serializedData = JSON.stringify(state.User);
      console.log('State updated on the Local Storage');
      localStorage.setItem('state', serializedData);
    }
    if (state.Auth.loading === loadingStatus.succeeded) {
      console.log('LOG OUT OR ENTRY');
      console.log('Auth state:', state.Auth);
    }
    console.log(state.Auth.loading);
    // const serializedData = JSON.stringify(state.User);
    // console.log('State updated on the Local Storage');
    // localStorage.setItem('state', serializedData);
  } catch (error) {
    console.log('Error saving information:', error);
  }
};

export {
  loadState,
  saveState,
};
