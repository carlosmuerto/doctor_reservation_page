import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';
import greetingsReducer from './Greeting/Greeting';

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    doctorsData: greetingsReducer,
  },
});

export default store;
