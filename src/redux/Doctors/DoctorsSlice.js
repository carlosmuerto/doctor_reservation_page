import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loadingStatus from '../reduxConst';
import DoctorsAPI from '../RoRAPI/Doctor';

// actions CONSTANTS
const ACTION_PREPEND = 'API/Doctors';

const initialState = {
  loading: loadingStatus.idle,
  doctors: [],
};

const fetch = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async () => DoctorsAPI.fetch(),
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

        // eslint-disable-next-line no-console
        console.log(action);
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
