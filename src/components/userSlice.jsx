import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUsername, setEmail } = userSlice.actions;

export const selectUsername = state => state.user.username;
export const selectEmail = state => state.user.email;

export default userSlice.reducer;
