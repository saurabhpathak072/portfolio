import {createSlice} from '@reduxjs/toolkit';

export const uiStateSlice = createSlice({
    name:'uiState',
    initialState:{
        isEditable:true
    },
    reducers:{
        getDataEditable:(state,action)=>{
            state.isEditable = action.payload
        }
    }
});

export const { getDataEditable } = uiStateSlice.actions

export default uiStateSlice.reducer