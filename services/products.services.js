import { api } from "../config/api";

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data.data.map((item) => ({ ...item, id: item._id }));
};

export const getProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return {...data.data, id: data.data._id};
};
