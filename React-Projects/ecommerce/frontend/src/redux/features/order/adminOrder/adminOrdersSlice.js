import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // orderDetails:{}
};

export const adminOrdersSlice = createSlice({
  name: "adminOrders",
  initialState,
  reducers: {
    adminOrdersRequest: (state, action) => {
      state.loading = true;
    },
    adminOrdersSuccess: (state, action) => {
      state.orderDetails = action.payload;
      state.loading = false;
    },
    adminOrdersFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateAdminOrdersRequest: (state, action) => {
      state.loading = true;
    },
    updateAdminOrdersSuccess: (state, action) => {
      state.isUpdated = action.payload;
      state.loading = false;
    },
    updateAdminOrdersFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateAdminOrdersReset: (state, action) => {
      state.isUpdated = false;
    },
    deleteAdminOrdersRequest: (state, action) => {
      state.loading = true;
    },
    deleteAdminOrdersSuccess: (state, action) => {
      state.isDeleted = action.payload;
      state.loading = false;
    },
    deleteAdminOrdersFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteAdminOrdersReset: (state, action) => {
      state.isDeleted = false;
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const {
  clearErrors,
  adminOrdersFail,
  adminOrdersRequest,
  adminOrdersReset,
  adminOrdersSuccess,
  deleteAdminOrdersFail,
  deleteAdminOrdersRequest,
  deleteAdminOrdersReset,
  deleteAdminOrdersSuccess,
  updateAdminOrdersFail,
  updateAdminOrdersRequest,
  updateAdminOrdersReset,
  updateAdminOrdersSuccess,
} = adminOrdersSlice.actions;
export default adminOrdersSlice.reducer;
