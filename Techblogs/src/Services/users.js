import axios from "axios"
import { endpoints } from "../constants"

const getUsers = async () => {
   const response = await axios
      .get(endpoints.users)
   
   return response.data
}

const userById = async (id) => {
   const response = await axios
      .get(`${endpoints.users}/${id}`)
   return response.data
}



export default {
   getUsers,
   userById,
}