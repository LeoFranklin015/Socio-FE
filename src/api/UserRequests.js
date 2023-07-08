import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, formData) =>
  API.patch(`/user/update/${id}`, formData);
export const getAllUser = () => API.get("/user");
export const followUser = (id, data) => API.patch(`/user/${id}/follow`, data);
export const unfollowUser = (id, data) =>
  API.patch(`/user/${id}/unfollow`, data);

export const searchUser = (data) => API.get("/search", data);
