import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const ApiData = 'http://localhost:3000/api/message';

// const getMessage = createAsyncThunk('greetings/getGreetings',
//   async () => (
// const response = await fetch(ApiData);
// const answer = await response.json();
// return answer;
// ));

const getMessage = createAsyncThunk(
  'greetings/getGreetings',
  async () => (
    [{
      name: 'Dr.Simi',
      address: '123 street',
      img: 'https://pbs.twimg.com/profile_images/1505546875918864385/FI4JAeRG_400x400.jpg',
    },
    {
      name: 'Farmacias Del Ahorro',
      address: 'Vecindad Street',
      img: 'https://vozdelasempresas.org/wp-content/uploads/2020/11/FDahorro2Vozz.png',
    },
    {
      name: 'Dr.Simi 2',
      address: '123 street',
      img: 'https://pbs.twimg.com/profile_images/1505546875918864385/FI4JAeRG_400x400.jpg',
    },
    {
      name: 'Farmacias Del Ahorro 2',
      address: 'Vecindad Street',
      img: 'https://vozdelasempresas.org/wp-content/uploads/2020/11/FDahorro2Vozz.png',
    },
    {
      name: 'Dr.Simi 3',
      address: '123 street',
      img: 'https://pbs.twimg.com/profile_images/1505546875918864385/FI4JAeRG_400x400.jpg',
    },
    {
      name: 'Farmacias Del Ahorro 3',
      address: 'Vecindad Street',
      img: 'https://vozdelasempresas.org/wp-content/uploads/2020/11/FDahorro2Vozz.png',
    }]
  ),
);

const initialState = [];

export const dataSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMessage.fulfilled, (state, action) => action.payload);
  },
});

const { action, reducer } = dataSlice;
export { action, getMessage };
export default reducer;
