import http from "./axiosHttp";

const getAll = () => {
  return http.get("/games");
};
const update = (id, game) => {
  return http.put(`/games/${id}`, game);
};
const remove = (id) => {
  return http.delete(`/games/${id}`);
};

const create = (game) => {
  return http.post(`/games/`);
};


export default {
  getAll,
  update,
  remove,
};
