import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogsAction } from './Reducers/blogReducers'
import { BlogList } from './Components/BlogList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogDetails from './Components/BlogDetails'
import Footer from './Components/Footer'
import AppBarComponent from './Components/AppBar'
import AddBlog from './Components/AddBlogModal/AddBlog'
import About from './Components/About'
import LoginForm from './Components/Users/LoginForm'
import { blogUserActions } from './Reducers/userReducers'
import UsersBlogs from './Components/Users/UsersBlogs'
import UsersBlogsByCategory from './Components/Users/UsersBlogsByCategory'
import UserBlogsById from './Components/Users/UserBlogsById'
import { fetchloginUserActions } from './Reducers/loginReducers'

const App = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogList.blogs || [])
  const loading = useSelector(state => state.blogList.loading)
  const error = useSelector(state => state.blogList.error)
  const users = useSelector(state => state.users || [])
  const login = useSelector(state => state.login)
  

  React.useEffect(() => {
    dispatch(fetchBlogsAction())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(blogUserActions())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(fetchloginUserActions())
  }, [dispatch])


  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          border: '5px solid #f3f3f3', 
          borderTop: '5px solid #3498db', 
          borderRadius: '50%', 
          animation: 'spin 1s linear infinite' 
        }}></div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <AppBarComponent />

      <div style={{ padding: '20px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<BlogList blogs={blogs} />} />
          <Route path="/create" element={<AddBlog />} />
          <Route path="/contact" element={<About />} />
          <Route path="/login" element={<LoginForm login={login}/>} />
          <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
          <Route path="/users" element={<UsersBlogs users={users} />} />
          <Route path="/category" element={<UsersBlogsByCategory users={users} />} />
          <Route path="/users/:id" element={<UserBlogsById users={users} />} />
        </Routes>
      </div>
      <Footer />

      <style>
        {`
          @media (max-width: 768px) {
            div {
              padding: 10px;
            }
          }

          @media (max-width: 480px) {
            div {
              padding: 5px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default App