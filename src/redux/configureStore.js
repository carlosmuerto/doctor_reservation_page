import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';
import greetingsReducer from './Greeting/Greeting';
import CurrentUser from './Auth/CurrentUserSlice';

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    doctorsData: greetingsReducer,
    User: CurrentUser,
  },
});

export default store;
