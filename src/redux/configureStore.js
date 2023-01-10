import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './download/dataSlice';
import './download/signUpSlice';

const store = configureStore({
  reducer: {
    doctorsData: greetingsReducer,
  },
});

export default store;
