import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice  from './slices/isLoading.slice'
import isLoggedSlice from './slices/isLogged.slice'
import  usersSlice  from './slices/users.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        isLogged: isLoggedSlice,
        users: usersSlice
    }
})