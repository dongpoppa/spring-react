import http from "./axiosHttp";

const getAll = () => {
  return http.get("/games");
};
const update = (id, data) => {
  return http.put(`/games/${id}`, data);
};

const  = (id) => {
  return http.delete(`/games/${id}`);
};
export default {
  getAll,
  update,
  delete,
};
