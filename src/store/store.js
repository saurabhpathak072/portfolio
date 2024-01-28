import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../Components/App/Home/reducer/homeSlice'
import uiStateReducer from './uiStateSlice';

export default configureStore({
  reducer: {
    home: homeReducer,
    uiState: uiStateReducer
  },
})