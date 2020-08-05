import axios from "axios";


export default axios.create({
  baseURL: "http://localhost:9998/api",
  headers: {
    "Content-type": "application/json",
  },
});
