import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';
import DoctorsReducer from './Doctors/DoctorsSlice';
import CurrentUser from './Auth/CurrentUserSlice';

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    doctors: DoctorsReducer,
    User: CurrentUser,
  },
});

export default store;
