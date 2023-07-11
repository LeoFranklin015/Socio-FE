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

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.patch(`post/${id}/like`, { userId: userId });

export const postcloud = (data) =>
  axios.post("https://api.cloudinary.com/v1_1/djl0e0ryv/image/upload", data);
