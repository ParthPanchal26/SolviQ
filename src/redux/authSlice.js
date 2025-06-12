import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: localStorage.getItem('token') || null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, actions) => {
            state.token = actions.payload
            localStorage.setItem('token', actions.payload);
            // console.log(state.token);
        },
        logout: (state) => {
            state.token = null
            localStorage.removeItem('token');
            // console.log(state.token);
        },
    },
})


export const { login, logout } = authSlice.actions

export default authSlice.reducer