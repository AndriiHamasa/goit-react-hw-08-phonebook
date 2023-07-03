import { createSlice } from '@reduxjs/toolkit';
import { getProfileThunk, logOutThunk, loginThunk, signUpThunk } from './thunks';

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  profile: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, {error, payload}) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

const handleLogInFulfilled = (state, {payload}) => {
  state.isLoading = false;
  console.log('payload', payload)
  state.error = '';
  state.token = payload.token;
};

const handleGetPrifileFulfilled = (state, {payload}) => {
  state.isLoading = false;
  console.log('payload', payload)
  state.error = '';
  state.profile = payload;
};

const handleLogOutFulfilled = (state) => {
  state.isLoading = false
  state.token = ''
  state.error = ''
  state.profile = null
};

const handlesignUpThunkFulfilled = (state, {payload}) => {
  
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleLogInFulfilled)
      .addCase(getProfileThunk.fulfilled, handleGetPrifileFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled)
      .addCase(signUpThunk.fulfilled, handlesignUpThunkFulfilled) 
      .addMatcher(({ type }) => type.endsWith('/pending', handlePending))
      .addMatcher(({type}) => type.endsWith('/rejected', handleRejected));
  },
});

export const authReducer = authSlice.reducer
