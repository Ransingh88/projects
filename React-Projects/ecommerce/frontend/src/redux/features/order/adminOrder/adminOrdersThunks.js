import axios from "axios";
import { toast } from "react-toastify";
import {
  adminOrdersFail,
  adminOrdersRequest,
  adminOrdersSuccess,
  clearErrors,
  deleteAdminOrdersFail,
  deleteAdminOrdersRequest,
  deleteAdminOrdersSuccess,
  updateAdminOrdersFail,
  updateAdminOrdersRequest,
  updateAdminOrdersSuccess,
} from "./adminOrdersSlice";

export const fetchAdminOrders = () => async (dispatch) => {
  try {
    dispatch(adminOrdersRequest());

    const { data } = await axios.get(`/api/v1/admin/orders`);
    dispatch(adminOrdersSuccess(data));
  } catch (error) {
    dispatch(adminOrdersFail(error.response?.data.message));
  }
};

export const deleteAdminOrder = (id) => async (dispatch) => {
  try {
    dispatch(deleteAdminOrdersRequest());

    const { data } = await toast.promise(
      axios.delete(`/api/v1/admin/order/${id}`),
      {
        pending: "Deleting Order",
        success: "Order Deleted Successfully",
        error: "Can not Delete Order! Try Again",
      }
    );
    dispatch(deleteAdminOrdersSuccess(data.success));
  } catch (error) {
    dispatch(deleteAdminOrdersFail(error.response?.data.message));
  }
};

export const updateAdminOrder = (id, orderData) => async (dispatch) => {
  try {
    dispatch(updateAdminOrdersRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await toast.promise(
      axios.put(`/api/v1/admin/order/${id}`, orderData, config),
      {
        pending: "Updating Order",
        success: "Order Updated Successfully",
        error: "Can not Update Order! Try Again",
      }
    );
    dispatch(updateAdminOrdersSuccess(data.success));
  } catch (error) {
    dispatch(updateAdminOrdersFail(error.response?.data.message));
  }
};

// *clearing error
export const clearError = () => async (dispatch) => {
  dispatch(clearErrors());
};
