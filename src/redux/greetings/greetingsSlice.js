import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ApiData = 'http://localhost:3000/api/message';

export const getMessage = createAsyncThunk('greetings/getGreetings',
  async () => {
    const response = await fetch(ApiData);
    const answer = await response.json();
    return answer;
  });

const initialState = {
  message: [],
  status: '',
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMessage.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload;
    });
  },
});

export default greetingsSlice.reducer;
