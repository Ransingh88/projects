import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { IoTrashOutline } from 'react-icons/io5';
import {toast} from 'react-toastify'
import Loader from '../../../components/layout/loader/Loader'
import { deleteAdminReview, fetchAdminReview } from '../../../redux/features/user/adminReviews/adminReviewsThunks';
import { deleteAdminReviewsReset,clearErrors } from '../../../redux/features/user/adminReviews/adminReviewsSlice';

const Reviews = () => {

    const dispatch = useDispatch()
    const {reviews, error, loading, isDeleted} = useSelector(state => state.adminReviews)
    const [productId, setproductId] = useState('')


    const handleProductSearch = ()=>{
        dispatch(fetchAdminReview(productId))
    }
    const handleReviewDelete = (reviewId) =>{
      dispatch(deleteAdminReview(reviewId,productId))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
        if(isDeleted){
            // toast.success(message)
            dispatch(deleteAdminReviewsReset())
        }
        if(productId.length === 24){

            dispatch(fetchAdminReview(productId))
        }
    },[dispatch, error, isDeleted, productId])

  return (
    <>
    {loading ? <Loader /> : 
    
    <div className='productList_container'>
        <h1 className='dashboard_heading'><span>All Reviews</span></h1>
        <div className='review_searchbox'>
            <input type="text" placeholder='enter product Id' value={productId} onChange={(e)=>{setproductId(e.target.value)}}/>
            <button className='btn btn-primary' onClick={handleProductSearch}>Search</button>
        </div>
        {reviews.length <1 ? "No Reviews Yet" : 
        <div>
        <table className='dashboard_table'>
        <tr>
          <th>Review ID</th>
          <th>Name</th>
          <th>Comment</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
        {
            reviews && reviews.map((item)=>(
                <tr>
          <td>{item._id} </td>
          <td>{item.name}</td>
          <td>{item.comment}</td>
          <td>{item.rating}</td>
          <td><button className='tableActionBtn deleteActionBtn' onClick={()=>handleReviewDelete(item._id)}><IoTrashOutline /></button></td>
        </tr>
            ))
        }
        
      </table>
        </div>}
    </div>
    }</>
  )
}

export default Reviews