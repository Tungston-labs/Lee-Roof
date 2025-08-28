import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const createProductAPI = async (formData) => {
  const token = localStorage.getItem("accessToken");

  const res = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  console.log("ADDING", res);
  return res.data.products;
};

// Get all products
export const getProductsAPI = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Get product by ID
export const getProductByIdAPI = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// Update product
export const updateProductAPI = async (id, formData) => {
  const res = await axios.put(`${API_URL}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Delete product

export const deleteProductAPI = async (id) => {
  const token = localStorage.getItem("token"); // adjust if stored differently

  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
