import http from "./axiosHttp";

const getAll = () => {
  return http.get("/categories");
};


const remove = (id) => {
  return http.delete(`/categories/${id}`);
};

export default {
  getAll,
  remove,
};
 