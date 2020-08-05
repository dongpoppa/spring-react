import http from "./axiosHttp";

const getAll = () => {
  return http.get("/games");
};
const update = (id, data) => {
  return http.put(`/games/${id}`, data);
};

const delet = (id) => {

}
export default {
  getAll,
  update,

};
