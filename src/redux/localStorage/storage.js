/* eslint-disable no-console */
/* eslint-disable max-len */
import loadingStatus from '../reduxConst';

const LOCAL_STORAGE_NAME = 'token';

const loadLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem(LOCAL_STORAGE_NAME);

    if (serializedData === null) {
      console.log('Local Storage null');
      return null;
    }
    console.log('Local Storage Loaded');
    const data = JSON.parse(serializedData);
    const UserToken = {};
    UserToken.token = data;
    return UserToken;
  } catch (error) {
    console.log('Local Storage error', error);
    return error;
  }
};

const saveLocalStorage = (state) => {
  try {
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

const deleteLocalStorage = () => {
  try {
    console.log('Delete token from the localStorage');
    const token = 'Come back soon!';
    localStorage.setItem(LOCAL_STORAGE_NAME, token);
  } catch (error) {
    console.log('Error deleting information from the Local Storage:', error);
  }
};

export {
  loadLocalStorage,
  saveLocalStorage,
  deleteLocalStorage,
};
