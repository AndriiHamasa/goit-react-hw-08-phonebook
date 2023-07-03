import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logIn, logOut, signUp } from 'api/auth';



export const getProfileThunk = createAsyncThunk('auth/profile', () => {
  return getProfile();
});

export const signUpThunk = createAsyncThunk('auth/signin', (body) => {
  return signUp(body)
})

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const data = await logIn(body);
      dispatch(getProfileThunk())
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
);

export const logOutThunk = createAsyncThunk('auth/logout', () => {
  return logOut();
});


