import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});

export default store;
