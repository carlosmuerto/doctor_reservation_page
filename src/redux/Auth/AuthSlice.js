import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthAPI from '../RoRAPI/Auth';
import loadingStatus from '../reduxConst';
import CheckUser from '../RoRAPI/CurrentUser';
import { deleteLocalStorage, saveLocalStorage } from '../localStorage/storage';

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
  alert: { green: [], red: [] },
};

const load = createAsyncThunk(
  `${ACTION_PREPEND}/LOAD`,
  async (user) => CheckUser.currentUser(user),
);

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
        state.alert.green = ['Login Successfully'];
        state.alert.red = [];

        const {
          email, name, role,
        } = action.payload.data;

        const userData = {
          userName: name,
          eMail: email,
          token: action.payload.token,
          role,
        };

        saveLocalStorage(userData);

        state.user = userData;
      })
      .addCase(logIn.rejected, (state) => {
        state.loading = loadingStatus.failed;
        state.alert.green = [];
        state.alert.red = ['Wrong email or password'];
      })
      // /signUp
      .addCase(signUp.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.loading = loadingStatus.idle;
        state.user = initialState.user;
        state.alert.green = ['User created Successfully'];
        state.alert.red = [];
        deleteLocalStorage();
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = loadingStatus.failed;
        state.alert.green = [];
        state.alert.red = ['User and email cannot be registered.'];
      })
      // /logout
      .addCase(logOut.pending, () => { })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = loadingStatus.idle;
        state.user = initialState.user;
        state.alert.green = [];
        state.alert.red = [];
        deleteLocalStorage();
      })
      .addCase(logOut.rejected, () => { })
      // /load
      .addCase(load.pending, (state, action) => {
        const {
          userName,
          eMail,
          token,
          role,
        } = action.meta.arg;

        if (userName && eMail && token && role) {
          const userData = {
            userName,
            eMail,
            token,
            role,
          };

          state.loading = loadingStatus.succeeded;
          state.user = userData;
        } else {
          state.loading = loadingStatus.pending;
        }
      })
      .addCase(load.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;

        const {
          email, name, role,
        } = action.payload;

        const userData = {
          userName: name,
          eMail: email,
          token: action.payload.token,
          role,
        };

        state.user = userData;
      })
      .addCase(load.rejected, (state) => {
        state.loading = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = AuthSlice;

export {
  actions,
  logIn,
  signUp,
  logOut,
  load,
};

export default reducer;

// AuthReducer
