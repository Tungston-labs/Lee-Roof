import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProductAPI,
  getProductsAPI,
  getProductByIdAPI,
  updateProductAPI,
  deleteProductAPI,
} from "../service/productService";

// Thunks
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (formData, { rejectWithValue }) => {
    try {
      return await createProductAPI(formData);
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getProducts = createAsyncThunk("product/getProducts", async (_, { rejectWithValue }) => {
  try {
    return await getProductsAPI();
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      return await updateProductAPI(id, formData);
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id, { rejectWithValue }) => {
  try {
    return await deleteProductAPI(id);
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState: { products: [], product: null, loading: false, error: null },
  reducers: {
    clearProductState: (state) => {
      state.product = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => { state.loading = true; })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(getProducts.pending, (state) => { state.loading = true; })
      .addCase(getProducts.fulfilled, (state, action) => { state.loading = false; state.products = action.payload; })
      .addCase(getProducts.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(updateProduct.pending, (state) => { state.loading = true; })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(p => p._id === action.payload._id);
        if (index !== -1) state.products[index] = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(deleteProduct.pending, (state) => { state.loading = true; })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(p => p._id !== action.payload._id);
      })
      .addCase(deleteProduct.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
  },
});

export const { clearProductState } = productSlice.actions;
export default productSlice.reducer;
