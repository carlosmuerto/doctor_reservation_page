/* eslint-disable no-console */

const LOCAL_STORAGE_NAME = 'user';

const loadLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem(LOCAL_STORAGE_NAME);

    if (serializedData === null) {
      return null;
    }
    const data = JSON.parse(serializedData);
    let user = {};
    user = data;
    return user;
  } catch (error) {
    console.log('Local Storage error', error);
    return error;
  }
};

const saveLocalStorage = (userOBJ) => {
  try {
    console.log('Save user into the localStorage');
    const user = JSON.stringify(userOBJ);
    localStorage.setItem(LOCAL_STORAGE_NAME, user);
  } catch (error) {
    console.log('Error saving information into the Local Storage:', error);
  }
};

const deleteLocalStorage = () => {
  try {
    console.log('Delete user from the localStorage');
    const user = null;
    localStorage.setItem(LOCAL_STORAGE_NAME, user);
  } catch (error) {
    console.log('Error deleting information from the Local Storage:', error);
  }
};

export {
  loadLocalStorage,
  saveLocalStorage,
  deleteLocalStorage,
};
