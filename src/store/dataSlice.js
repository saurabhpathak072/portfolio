import {createSlice} from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name:'home',
    initialState:{

    },
    reducers:{
        getUserData:(state,action)=>{
            state.user = action.payload
        }
    }
});

export const { getUserData } = homeSlice.actions

export default homeSlice.reducer