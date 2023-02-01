import axios from "axios";

const axiosClient = axios.create({
  //baseURL: 'https://dbmarket.herokuapp.com/api'
  baseURL: "http://127.0.0.1:3001/api",
});

export default axiosClient;
