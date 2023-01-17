import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';
import greetingsReducer from './Greeting/Greeting';
import CurrentUser from './Auth/CurrentUserSlice';
import { saveLocalStorage } from './localStorage/storage';

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    doctorsData: greetingsReducer,
    User: CurrentUser,
  },
});

store.subscribe(() => {
  saveLocalStorage(store.getState());
});

export default store;
