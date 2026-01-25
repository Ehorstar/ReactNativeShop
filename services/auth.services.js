import { api } from "../config/api";

export const registerRequest = async (values) => {
  const { data } = await api.post("/register", values);
  return data;
};

export const loginRequest = async (values) => {
  const { data } = await api.post("/login", values);
  return data;
};

export const getAuthUser = async () => {
  const { data } = await api.post("/auth-user");
  return data;
};