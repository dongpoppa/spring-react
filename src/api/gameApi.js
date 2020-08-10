import http from "./axiosHttp";

const getAll = () => {
  return http.get("/games");
};

const getAllRemove = () => {
  return http.get("/games-remove");
};

const getAllByCategory = (id) => {
  return http.get(`/games-by-category/${id}`);
};

const update = (id, game) => {
  return http.put(`/games/${id}`, game);
};

const remove = (id) => {
  return http.delete(`/games/${id}`);
};

const restore = (id) => {
  return http.put(`/games/restore/${id}`);
};

const create = (game) => {
  return http.post(`/games`, game);
};

export default {
  getAll,
  update,
  remove,
  create,
  getAllRemove,
  restore,
  getAllByCategory,
};
