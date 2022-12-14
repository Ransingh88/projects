import axios from "axios";
import { toast } from "react-toastify";
import { adminReviewsFail, adminReviewsRequest, adminReviewsSuccess, clearErrors, deleteAdminReviewsFail, deleteAdminReviewsRequest, deleteAdminReviewsSuccess } from "./adminReviewsSlice";


// fetch all review of aproduct
export const fetchAdminReview = (id) => async (dispatch) => {
  try {
    dispatch(adminReviewsRequest());

    const { data } = await axios.get(`/api/v1/review?id=${id}`);
    dispatch(adminReviewsSuccess(data.reviews));
  } catch (error) {
    dispatch(adminReviewsFail(error.response?.data.message));
  }
};

// delete review of a product
export const deleteAdminReview = (reviewId,productId) => async (dispatch) => {
    try {
      dispatch(deleteAdminReviewsRequest());
  
      const { data } = await toast.promise(
        axios.delete(`/api/v1/review?id=${reviewId}&productId=${productId}`),
        {
          pending: "Deleting Review",
          success: "Review Deleted Successfully",
          error: "Can not Delete Review! Try Again",
        }
      );
      dispatch(deleteAdminReviewsSuccess(data.success));
    } catch (error) {
      dispatch(deleteAdminReviewsFail(error.response?.data.message));
    }
  };

// *clearing error
export const clearError = () => async (dispatch) => {
  dispatch(clearErrors());
};
