import { toast } from 'react-toastify';

// export const handlePending = state => {
//   state.contacts.isLoading = true;
// };

export const handleAddPending = state => {
  state.contacts.addLoading = true;
};

export const handleDeletePending = state => {
  state.contacts.deleteLoading = true;
};

export const handleRejected = (state, action) => {
  state.contacts.deleteLoading = false;
  state.contacts.addLoading = false;
  state.contacts.error = action.payload;
};

export const handleFetchFulfilled = (state, action) => {
  state.contacts.deleteLoading = false;
  state.contacts.addLoading = false;
  state.contacts.error = null;
  state.contacts.items = action.payload;
};

export const handleAddFulfilled = (state, action) => {
  state.contacts.deleteLoading = false;
  state.contacts.addLoading = false;
  state.contacts.items.push(action.payload);
  toast.success(`${action.payload.name} is added to contact list`, {
    position: toast.POSITION.TOP_RIGHT,
    style: {
      fontSize: 16,
    },
  });
  state.contacts.error = null;
};

export const handleDeleteFulfilled = (state, action) => {
  state.contacts.deleteLoading = false;
  state.contacts.addLoading = false;
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== action.payload.id
  );
  state.contacts.error = null;
};
