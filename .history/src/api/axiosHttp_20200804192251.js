import axios from "axios";


export default axios.create({
  baseURL: "http://localhost:9998",
  headers: {
    "Content-type": "application/json",
  },
});
