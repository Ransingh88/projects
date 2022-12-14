import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState,
  reducers: {
    deleteAdminProductRequest: (state, action) => {
      state.loading = true;
    },
    deleteAdminProductSuccess: (state, action) => {
      state.isDeleted = action.payload;
      state.loading = false;
    },
    deleteAdminProductFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteAdminProductReset: (state, action) => {
      state.isDeleted = false;
    },
    updateAdminProductRequest: (state, action) => {
      state.loading = true;
    },
    updateAdminProductSuccess: (state, action) => {
      state.isUpdated = action.payload;
      state.loading = false;
    },
    updateAdminProductFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateAdminProductReset: (state, action) => {
      state.isUpdated = false;
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const {
  clearErrors,
  deleteAdminProductFail,
  deleteAdminProductRequest,
  deleteAdminProductReset,
  deleteAdminProductSuccess,
  updateAdminProductFail,
  updateAdminProductRequest,
  updateAdminProductReset,
  updateAdminProductSuccess,
} = adminProductSlice.actions;
export default adminProductSlice.reducer;
