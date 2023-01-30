import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';
import DoctorsReducer from './Doctors/DoctorsSlice';
import AppointmentReducer from './Appointments/AppointmentsSlice';

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    doctors: DoctorsReducer,
    Appointments: AppointmentReducer,
  },
});

export default store;
