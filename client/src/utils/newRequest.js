import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://kisanmart-backend.onrender.com/api/",
  //baseURL: "https://api-h2x3.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
