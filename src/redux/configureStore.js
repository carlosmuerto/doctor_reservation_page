import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './download/dataSlice';

const store = configureStore({
  reducer: {
    doctorsData: greetingsReducer,
  },
});

export default store;
