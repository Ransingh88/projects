import axios from "axios";
import { toast } from "react-toastify";
import { clearErrors } from "../../order/adminOrder/adminOrdersSlice";
import { adminAllUsersFail, adminAllUsersRequest, adminAllUsersSuccess, adminUserDetailsFail, adminUserDetailsRequest, adminUserDetailsSuccess, deleteAdminUserFail, deleteAdminUserRequest, deleteAdminUserSuccess, updateAdminUserFail, updateAdminUserRequest, updateAdminUserSuccess } from "./adminUsersSlice";


export const fetchAdminUsers = () => async (dispatch) => {
  try {
    dispatch(adminAllUsersRequest());

    const { data } = await axios.get(`/api/v1/admin/users`);
    dispatch(adminAllUsersSuccess(data.users));
  } catch (error) {
    dispatch(adminAllUsersFail(error.response?.data.message));
  }
};

export const fetchAdminUserDetails = (id) => async (dispatch) => {
  try {
    dispatch(adminUserDetailsRequest());

    const { data } = await axios.get(`/api/v1/admin/user/${id}`);
    dispatch(adminUserDetailsSuccess(data.user));
  } catch (error) {
    dispatch(adminUserDetailsFail(error.response?.data.message));
  }
};


export const updateAdminUser = (id, userData) => async (dispatch) => {
  try {
    dispatch(updateAdminUserRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await toast.promise(
      axios.put(`/api/v1/admin/user/${id}`, userData, config),
      {
        pending: "Updating User",
        success: "User Updated Successfully",
        error: "Can not Update User! Try Again",
      }
    );
    dispatch(updateAdminUserSuccess(data.success));
  } catch (error) {
    dispatch(updateAdminUserFail(error.response?.data.message));
  }
};

export const deleteAdminUser = (id) => async (dispatch) => {
    try {
      dispatch(deleteAdminUserRequest());
  
      const { data } = await toast.promise(
        axios.delete(`/api/v1/admin/user/${id}`),
        {
          pending: "Deleting User",
          success: "User Deleted Successfully",
          error: "Can not Delete User! Try Again",
        }
      );
      dispatch(deleteAdminUserSuccess(data));
    } catch (error) {
      dispatch(deleteAdminUserFail(error.response?.data.message));
    }
  };

// *clearing error
export const clearError = () => async (dispatch) => {
  dispatch(clearErrors());
};
