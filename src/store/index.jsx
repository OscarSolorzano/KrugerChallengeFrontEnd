import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice  from './slices/isLoading.slice'
import isLoggedSlice from './slices/isLogged.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        isLogged: isLoggedSlice
    }
})