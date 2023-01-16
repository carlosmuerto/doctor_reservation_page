import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';
import greetingsReducer from './Greeting/Greeting';
import CurrentUser from './Auth/CurrentUserSlice';
import { saveState } from './localStorage/storage';

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    doctorsData: greetingsReducer,
    User: CurrentUser,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
