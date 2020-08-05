import http from "./axiosHttp";

const getAll = () => {
  return http.get("api/categories");
};

export default {
  getAll,
};
