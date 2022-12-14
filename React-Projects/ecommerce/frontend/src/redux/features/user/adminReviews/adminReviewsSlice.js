import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

export const adminReviewsSlice = createSlice({
  name: "adminReviews",
  initialState,
  reducers: {
    adminReviewsRequest: (state, action) => {
      state.loading = true;
    },
    adminReviewsSuccess: (state, action) => {
      state.reviews = action.payload;
      state.loading = false;
    },
    adminReviewsFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteAdminReviewsRequest: (state, action) => {
      state.loading = true;
    },
    deleteAdminReviewsSuccess: (state, action) => {
      state.isDeleted = action.payload;
      state.loading = false;
    },
    deleteAdminReviewsFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteAdminReviewsReset: (state, action) => {
      state.isDeleted = false;
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const {
  clearErrors,
  adminReviewsFail,
  adminReviewsRequest,
  adminReviewsSuccess,
  deleteAdminReviewsFail,
  deleteAdminReviewsRequest,
  deleteAdminReviewsReset,
  deleteAdminReviewsSuccess,
} = adminReviewsSlice.actions;
export default adminReviewsSlice.reducer;
