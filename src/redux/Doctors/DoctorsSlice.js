import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loadingStatus from '../reduxConst';
import DoctorsAPI from '../RoRAPI/Doctor';

// actions CONSTANTS
const ACTION_PREPEND = 'API/Doctors';

const initialState = {
  loading: loadingStatus.idle,
  list: [],
  alert: { green: [], red: [] },
};

const fetch = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async ({ token }) => DoctorsAPI.fetch(token),
);

const Delete = createAsyncThunk(
  `${ACTION_PREPEND}/DELETE`,
  async ({
    DoctorId, user,
  }) => DoctorsAPI.Delete(DoctorId, user.token),
);

const DoctorsSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch doctor
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
      // Delete doctor
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
        state.alert.red = ['This doctor has scheduled appointments'];
      });
  },
});

const { actions, reducer } = DoctorsSlice;

export {
  actions,
  fetch,
  Delete,
};

export default reducer;
