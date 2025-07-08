import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import blogService from '../Services/blogs'

const initialState = {
   blogs : [],
   loading: false,
   error: null
}

const blogSlice = createSlice ({
   name: 'blogs',
   initialState,
   reducers: {
      fetchBlogs: (state) => {
         state.loading = true
         state.error = null

      },
      fetchBlogsSuccess: (state, action) => {
         state.loading = false
         state.blogs = action.payload
      },
      fetchBlogsFailure: (state, action) => {
         state.loading = false
         state.error = action.payload
      },
      addBlog: (state, action) => {
         const newBlog = { id: uuidv4(), ...action.payload }
         state.blogs.push(newBlog)
      },
      deleteBlog: (state, action) => {
         state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
      },
      updateBlog: (state, action) => {
         const id = action.payload.id
         return state.blogs.map(blog =>
            blog.id !== id ? blog : action.payload
         )
      },

   }
})

const { fetchBlogs, fetchBlogsSuccess, fetchBlogsFailure, addBlog, deleteBlog, updateBlog } = blogSlice.actions
export const blogReducer = blogSlice.reducer
export const fetchBlogsAction = () => {
   return async  dispatch => {
      dispatch(fetchBlogs())
      try {
         const blogs = await blogService.getBlogs()
         dispatch(fetchBlogsSuccess(blogs))
      } catch (error) {
         dispatch(fetchBlogsFailure(error.message))
      }
   }
}

export const addBlogAction = (blog) => {
   return async dispatch => {
      try {
         const newBlog = await blogService.createBlog(blog)
         dispatch(addBlog(newBlog))
      } catch (error) {
         console.error('Failed to add blog:', error)
      }
   }
}

export const deleteBlogAction = (id) => {
   return async dispatch => {
      try {
         await blogService.deleteBlog(id)
         dispatch(deleteBlog(id))
      } catch (error) {
         console.error('Failed to delete blog:', error)
      }
   }
}

export const fetchBlogByIdAction = (id) => {
   return async dispatch => {
      try {
         const blog = await blogService.getBlogById(id)
         dispatch(updateBlog(blog))
      } catch (error) {
         console.error('Failed to fetch blog:', error)
      }
   }
}

export const handleLikeClick = (id) => {
   return async dispatch => {
      try {
         const blogs = await blogService.getAll()
         const blogToLike = blogs.find(blog => blog.id === id)
         const newLikes = {
            ...blogToLike,
            likes: blogToLike.likes + 1,
            user: blogToLike.user.id
         }
         const updatedBlog = await blogService.update(id, newLikes)
         dispatch(updateBlog(updatedBlog))
      } catch (error) {
         console.error('Failed to like blog:', error)
      }
   }
}

