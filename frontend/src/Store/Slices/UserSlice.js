import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id:"",
    name:"",
    email:"",
    is_Admin:"",
    token:""
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails: (state,action)=>{
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.is_Admin = action.payload.is_Admin;
            state.token = action.payload.token
        },
        logoutDetails :(state,action)=>{
            state.id = "";
            state.name = "";
            state.email = "";
            state.is_Admin = ""
            state.token = ""
        }
    }
})

export const {setUserDetails,logoutDetails} = userSlice.actions

export default userSlice.reducer