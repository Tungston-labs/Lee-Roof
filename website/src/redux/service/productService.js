export const getProductsAPI = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Get product by ID
export const getProductByIdAPI = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};