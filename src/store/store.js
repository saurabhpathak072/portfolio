import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../Components/App/Home/reducer/homeSlice'

export default configureStore({
  reducer: {
    home: homeReducer
  },
})