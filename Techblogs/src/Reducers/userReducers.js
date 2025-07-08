import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import userService from '../Services/users'

const userSlice = createSlice({
   name: 'users',
   initialState: [],
   reducers: {
      fetchUser: (state, action) => {
          return action.payload
      }
      ,
      appendUser: (state, action) =>  {
         const newUser = {id: uuidv4(), ...action.payload}
         return state.push(newUser)
      }
   }
})

const { fetchUser} = userSlice.actions
export const blogUserActions = () => {
   return async dispatch => {
      const users = await userService.getUsers();
      dispatch(fetchUser(users));
   }
}

export const getUserByIdActions = (id) => {
   return async dispatch => {
      const users = await userService.getUsers()
      const user = users.find(user => user.id === id)
      const fecthedUser = await userService.userById(user)
      dispatch(fetchUser(fecthedUser))
   }
}

export const userReducer =  userSlice.reducer