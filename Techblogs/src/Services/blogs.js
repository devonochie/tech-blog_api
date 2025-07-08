import axios from "axios"
import { endpoints } from "../constants"

const getBlogs = async () => {
  const response =  await axios
      .get(endpoints.blogs)
   return response.data    
}

const createBlog = async (blog) => {
   const response =  await axios
      .post(endpoints.blogs, blog)
   return response.data    
}

const getBlogById = async (id) => {
   const response =  await axios
      .get(`${endpoints.blogs}/${id}`)
   return response.data    
}

const deleteBlog = async (id) => {
   const response =  await axios
      .delete(`${endpoints.blogs}/${id}`)
   return response.data    
}

export default{
   getBlogs,
   createBlog,
   getBlogById,
   deleteBlog
}
