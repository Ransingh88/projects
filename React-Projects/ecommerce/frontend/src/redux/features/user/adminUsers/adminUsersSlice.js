import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    user:{}
};

export const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    adminAllUsersRequest: (state, action) => {
      state.loading = true;
    },
    adminAllUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    adminAllUsersFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    adminUserDetailsRequest: (state, action) => {
      state.loading = true;
    },
    adminUserDetailsSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    adminUserDetailsFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateAdminUserRequest: (state, action) => {
      state.loading = true;
    },
    updateAdminUserSuccess: (state, action) => {
      state.isUpdated = action.payload;
      state.loading = false;
    },
    updateAdminUserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateAdminUserReset: (state, action) => {
      state.isUpdated = false;
    },
    deleteAdminUserRequest: (state, action) => {
      state.loading = true;
    },
    deleteAdminUserSuccess: (state, action) => {
      state.isDeleted = action.payload.success;
      state.message = action.payload.message;
      state.loading = false;
    },
    deleteAdminUserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteAdminUserReset: (state, action) => {
      state.isDeleted = false;
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const {
  clearErrors,
  adminAllUsersFail,
  adminAllUsersRequest,
  adminAllUsersSuccess,
  adminUserDetailsFail,
  adminUserDetailsRequest,
  adminUserDetailsSuccess,
  deleteAdminUserFail,
  deleteAdminUserRequest,
  deleteAdminUserReset,
  deleteAdminUserSuccess,
  updateAdminUserFail,
  updateAdminUserRequest,
  updateAdminUserReset,
  updateAdminUserSuccess,
} = adminUsersSlice.actions;
export default adminUsersSlice.reducer;
