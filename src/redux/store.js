import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

const reducer = {
  state: contactsReducer
}

export const store = configureStore({
  reducer,
});

