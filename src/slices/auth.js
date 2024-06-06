import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { autenticado: false },
  reducers: {
    login: (state) => { state.autenticado = true; },
    logout: (state) => { state.autenticado = false; },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
