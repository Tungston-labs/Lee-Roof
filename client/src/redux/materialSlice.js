import { createSlice } from "@reduxjs/toolkit";

const materialSlice = createSlice({
  name: "materials",
  initialState: {
    materials: [],   // all materials
    images: [],      // uploaded images
  },
  reducers: {
    addMaterial: (state, action) => {
      state.materials.push(action.payload);
    },
    removeMaterial: (state, action) => {
      state.materials = state.materials.filter(
        (m) => m.materialName !== action.payload
      );
    },
    addImages: (state, action) => {
      state.images = [...state.images, ...action.payload];
    },
    removeImage: (state, action) => {
      state.images = state.images.filter((_, idx) => idx !== action.payload);
    },
    saveMaterials: (state) => {
      console.log("Final productData saved:", {
        materials: state.materials,
        images: state.images,
      });
    },
  },
});

export const {
  addMaterial,
  removeMaterial,
  addImages,
  removeImage,
  saveMaterials,
} = materialSlice.actions;
export default materialSlice.reducer;
