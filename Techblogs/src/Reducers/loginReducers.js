import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
   {
      "id": "1",
      "name": "John Doe",
      "password": 'me',
      "email": "willywillsken@gmail.com",
      "role": "admin",
      "joined_date": "2025-01-15"
   }
   ,
   {
      "id": "1",
      "name": "John Doe",
      "password": 'me',
      "email": "johndoe@example.com",
      "role": "admin",
      "joined_date": "2025-01-15"
   },
   {
      "id": "2",
      "name": "Jane Smith",
      "password": 'me',

      "email": "janesmith@example.com",
      "role": "editor",
      "joined_date": "2025-02-10"
   },
   {
      "id": "3",
      "name": "Alice Johnson",
      "password": 'me',
      "email": "alicejohnson@example.com",
      "role": "subscriber",
      "joined_date": "2025-03-05"
   },
   {
      "id": "4",
      "name": "Bob Brown",
      "password": 'me',
      "email": "bobbrown@example.com",
      "role": "subscriber",
      "joined_date": "2025-04-01"
   }
];

const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      fetchUser: (state, action) => {
         return action.payload;
      },
      appendUser: (state, action) => {
         const newUser = { id: uuidv4(), ...action.payload };
         state.push(newUser); 
      }
   }
});

const { fetchUser, appendUser } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;

export const fetchloginUserActions = () => {
   return async dispatch => {
      try {
         dispatch(fetchUser());
      } catch (error) {
         console.error("Failed to fetch users:", error);
      }
   };
};

export const loginUserActions = (credentials) => {
   return async dispatch => {
      const user = {
         name: credentials.name,
         password: credentials.password || '',
         email: credentials.email,
         role: credentials.role || "subscriber", 
         joined_date: new Date().toISOString().split('T')[0] 
      };
      dispatch(appendUser(user)); 
   };
};

export const addUserActions = (user) => {
   return async dispatch => {
      const newUser = { id: uuidv4(), ...user };
      dispatch(appendUser(newUser));
   };
};
