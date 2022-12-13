import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      const users = action.payload;
      return users;
    },
  },
});

export const getUsersThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios.get(
    'https://kruggerchallengebackend-production.up.railway.app/api/v1/users',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  )
    .then((res) => dispatch(setUsers(res.data.data.users)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
