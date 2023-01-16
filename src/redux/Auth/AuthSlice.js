import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthAPI from '../RoRAPI/Auth';
import loadingStatus from '../reduxConst';

// actions CONSTANTS
const ACTION_PREPEND = 'API/Auth';

// AUTH Init State
const initialState = {
  loading: loadingStatus.idle,
  user: {
    userName: '',
    eMail: '',
    token: '',
    role: '',
  },
};

const logIn = createAsyncThunk(
  `${ACTION_PREPEND}/LOGIN`,
  async ({ email, password }) => AuthAPI.login(email, password),
);

const signUp = createAsyncThunk(
  `${ACTION_PREPEND}/SIGNUP`,
  async ({ userName, email, password }) => AuthAPI.signup(userName, email, password),
);

const logOut = createAsyncThunk(
  `${ACTION_PREPEND}/LOGOUT`,
  async ({ token }) => AuthAPI.logout(token),
);

const AuthSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // /LOGIN
      .addCase(logIn.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;

        // eslint-disable-next-line no-console
        // console.log(action);

        const {
          email, name, role,
        } = action.payload.data;

        const userData = {
          userName: name,
          eMail: email,
          token: action.payload.token,
          role,
        };

        state.user = userData;
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = loadingStatus.failed;
      })
      // /signUp
      .addCase(signUp.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;

        // eslint-disable-next-line no-console
        console.log(action);

        const { email, name, role } = action.payload.data;

        const userData = {
          userName: name,
          eMail: email,
          token: '',
          role,
        };

        state.user = userData;
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = loadingStatus.failed;
      })
      // /logout
      .addCase(logOut.pending, () => {})
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = loadingStatus.idle;
        state.user = initialState.user;

        // eslint-disable-next-line no-console
        console.log(action);
      })
      .addCase(logOut.rejected, () => {});
  },
});

const { actions, reducer } = AuthSlice;

export {
  actions,
  logIn,
  signUp,
  logOut,
};

export default reducer;

// AuthReducer
