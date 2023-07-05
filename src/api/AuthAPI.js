import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const logIn = (data) => API.post("/auth/login", data);
export const signUp = (data) => API.post("/auth/register", data);
