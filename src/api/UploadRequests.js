// import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:4000" });

// export const uploadImage = (data) => API.post("/upload/post", data);

// export const uploadPost = (data) => API.post("/post/createPost", data);

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

export const uploadImage = (data) => API.post("/upload/post", data);
export const uploadPost = (data) => API.post("/post/createPost", data);