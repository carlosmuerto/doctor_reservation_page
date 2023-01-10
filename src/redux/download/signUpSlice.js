// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const signUp = createAsyncThunk('signUp/postSignUp',
//   async () => {
//     const response = await fetch(ApiData);
//     const answer = await response.json();
//     console.log(answer.status);
//     return answer;
//   });

// const initialState = [];

// export const signUpSlice = createSlice({
//   name: 'apiData',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(signUp.fulfilled, (state, action) => action.payload);
//   },
// });

// const { action, reducer } = signUpSlice;
// export { action, signUp };
// export default reducer;

import axios from 'axios';
import React from 'react';

// const baseURL = 'http://localhost:3000/login';

export default function SignUp(input) {
  // const [post] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get('http://localhost:3000/login')
  //     .then((response) => { console.log('Respuesta exitosa', response.data.status.message); })
  //     .then((error) => { console.log('Respuesta exitosa', error); });
  // });

  React.useEffect(() => {
    axios.post('http://localhost:3000/signup', { user: { name: input.name, email: input.email, password: input.password } })
      .then((response) => { console.log(response.data.status.message); })
      .catch((AxiosError) => { console.log(AxiosError.response.data.status.message); });
  });

  // if (!post) {
  //   return post;
  // }

  // return (
  //   <div>
  //     <h1>{response}</h1>
  //   </div>
  // );
}
