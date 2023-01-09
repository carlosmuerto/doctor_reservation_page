import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import greetingsReducer from './download/dataSlice';

const store = configureStore({
  reducer: {
    doctorsData: greetingsReducer,
    form: formReducer,
  },
});

export default store;
