/* eslint-disable max-len */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loadingStatus from '../reduxConst';
import AppointmentsAPI from '../RoRAPI/Appointment';

// actions CONSTANTS
const ACTION_PREPEND = 'API/Appointments';

const initialState = {
  loading: loadingStatus.idle,
  list: [],
  alert: { green: [], red: [] },
};

const fetch = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async ({ token }) => AppointmentsAPI.fetch(token),
);

const Add = createAsyncThunk(
  `${ACTION_PREPEND}/ADD`,
  async ({
    doctorId, description, time, user,
  }) => AppointmentsAPI.AddNew(doctorId, description, time, user.token),
);

const Delete = createAsyncThunk(
  `${ACTION_PREPEND}/DELETE`,
  async ({
    AppointmentId, user,
  }) => AppointmentsAPI.Delete(AppointmentId, user.token),
);

const AppointmentsSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // Get all appointments list
      .addCase(fetch.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;

        state.list = action.payload;
      })
      .addCase(fetch.rejected, (state) => {
        state.loading = loadingStatus.failed;
      })
      // Add a new Appointment
      .addCase(Add.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(Add.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;
        state.alert.green = ['New appointment created'];
        state.alert.red = [];

        state.list = action.payload;
      })
      .addCase(Add.rejected, (state) => {
        state.loading = loadingStatus.failed;
        state.alert.green = [];
        state.alert.red = ['Your request cannot be processed'];
      })
      // Delete appointment
      .addCase(Delete.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(Delete.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;
        state.alert.green = ['New appointment created'];
        state.alert.red = [];
        state.list = action.payload;
      })
      .addCase(Delete.rejected, (state) => {
        state.loading = loadingStatus.failed;
        state.alert.green = [];
        state.alert.red = ['Your request cannot be processed'];
      });
  },
});

const { actions, reducer } = AppointmentsSlice;

export {
  actions,
  fetch,
  Add,
  Delete,
};

export default reducer;
