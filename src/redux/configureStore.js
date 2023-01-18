import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';
import DoctorsReducer from './Doctors/DoctorsSlice';

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    doctors: DoctorsReducer,
  },
});

export default store;
