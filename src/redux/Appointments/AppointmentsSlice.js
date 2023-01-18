import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loadingStatus from '../reduxConst';
import AppointmentsAPI from '../RoRAPI/Appointment';

// actions CONSTANTS
const ACTION_PREPEND = 'API/Appointments';

const initialState = {
  loading: loadingStatus.idle,
  list: [],
};

const fetch = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async ({ token }) => AppointmentsAPI.fetch(token),
);

const DoctorsSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;

        state.list = action.payload;
      })
      .addCase(fetch.rejected, (state) => {
        state.loading = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = DoctorsSlice;

export {
  actions,
  fetch,
};

export default reducer;