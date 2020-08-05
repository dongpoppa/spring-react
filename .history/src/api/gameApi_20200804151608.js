import http from "./axiosHttp";

const getAll = () => {
  return http.get("/games");
};
const update = (id, data) => {
  return http.put(`/games/${id}`, data);
};

const delete = (id) => {
  return http.delte(`/games/${id}`, data);
};
export default {
  getAll,
  update,
};
