import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.innvolution.com/admin',
  // baseURL: 'https://iitpl-backend.onrender.com/admin',
  // baseURL: 'http://localhost:8000/admin',
  withCredentials: true,
})

export default instance
