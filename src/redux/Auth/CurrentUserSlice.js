import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CheckUser from '../RoRAPI/CurrentUser';
import loadingStatus from '../reduxConst';

// actions CONSTANTS
const ACTION_PREPEND = 'USER/CURRENTUSER';

const initialState = {
  loading: loadingStatus.idle,
  user: {
    userName: '',
    eMail: '',
    token: '',
    role: '',
  },
};

const currentUser = createAsyncThunk(
  ACTION_PREPEND,
  async () => CheckUser.currentUser(),
);

const CurrentUserSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(currentUser.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;

        // eslint-disable-next-line no-console
        console.log(action);
      })
      .addCase(currentUser.rejected, (state) => {
        state.loading = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = CurrentUserSlice;

export {
  actions,
  currentUser,
};

export default reducer;
