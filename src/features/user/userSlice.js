import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const themes = {
    winter: 'winter',
    forest: 'forest'
}

const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || null
}

const getThemeFromLocalStorage = () => {
    const theme =  localStorage.getItem('theme') || themes.forest
    document.documentElement.setAttribute('data-theme', theme)
    return theme
}



const initialState = {
    user: getUserFromLocalStorage()
} 

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser: (state, action) => {
            const user = {...action.payload.user, token:action.payload.jwt}
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
        },
        logoutUser: (state, action) => {
            state.user = null
            localStorage.removeItem('user')
            toast.success('User Logout successfully')
        },
        toggleTheme: (state, action) => {
             const {winter, forest} = themes
             state.theme = state.theme === winter ? forest : winter  
             document.documentElement.setAttribute('data-theme', state.theme)
             localStorage.setItem('theme', state.theme)
        },
    },
});


export const {loginUser, logoutUser, toggleTheme} = userSlice.actions

export default userSlice.reducer