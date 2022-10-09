import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
  email: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;

      localStorage.setItem(
        'auth',
        JSON.stringify({
          accessToken: action.payload.accessToken,
          email: action.payload.email,
        })
      );
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.email = undefined;
      // remove auth info from localStorage when loggedOut
      localStorage.removeItem('auth');
    }
  }
})


export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
