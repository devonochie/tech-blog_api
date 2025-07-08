import  {configureStore} from '@reduxjs/toolkit';
import { blogReducer } from './Reducers/blogReducers';
import { loginReducer } from './Reducers/loginReducers';
import { userReducer } from './Reducers/userReducers';


const store = configureStore({
    reducer: {
        blogList: blogReducer,
        login: loginReducer,
        users: userReducer
      }
});

export default store