import http from "./axiosHttp";

const getAll = () => {
  return http.get("/games");
};
const update = (id, data) => {
  return http.put(`/games/${id}`, data);
};
const remove = (id, data) => {
  return http.delete(`/games/${id}`, data);
};
export default {
  getAll,
  update,

};
