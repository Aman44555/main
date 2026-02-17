import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const searchProducts = async (embedding, minScore) => {
  const res = await API.post("/products/search", {
    queryEmbedding: embedding,
    minScore
  });
  return res.data;
};
