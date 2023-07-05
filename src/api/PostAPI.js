import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const getTimelinePost = (id) => API.post(`/post/getAllPost/${id}`);
export const likePost = (id, userId) =>
  API.patch(`/post/like/${id}`, { currentUserId: userId });
