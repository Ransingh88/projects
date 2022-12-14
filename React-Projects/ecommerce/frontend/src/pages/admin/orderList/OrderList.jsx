import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import {toast} from 'react-toastify'
import { clearError, deleteAdminOrder, fetchAdminOrders } from '../../../redux/features/order/adminOrder/adminOrdersThunks'
import { deleteAdminOrdersReset } from '../../../redux/features/order/adminOrder/adminOrdersSlice';

const OrderList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {orderDetails, error, isDeleted} = useSelector(state => state.adminOrder)

    const handleOrderDelete = (id) =>{
      dispatch(deleteAdminOrder(id))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearError())
        }
        if(isDeleted){
            // toast.success('successfully deleted')
            dispatch(deleteAdminOrdersReset())
        }
        dispatch(fetchAdminOrders())
    },[dispatch, error, isDeleted])

  return (
    <div className='productList_container'>
        <h1 className='dashboard_heading'><span>All Orders</span></h1>
        <div>
        <table className='dashboard_table'>
        <tr>
          <th>Product ID</th>
          <th>Status</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
        {
            orderDetails && orderDetails.orders.map((item)=>(
                <tr>
          <td>{item._id} </td>
          <td className={item.orderStatus === 'delivered' ? 'deliveredRow' : 'processingRow'}>{item.orderStatus}</td>
          <td>{item.orderItems.length}</td>
          <td>{item.totalPrice}</td>
          <td><button onClick={()=>{navigate(`/admin/updateorder/${item._id}`)}} className='tableActionBtn editActionBtn'><IoCreateOutline/></button><button className='tableActionBtn deleteActionBtn' onClick={()=>handleOrderDelete(item._id)}><IoTrashOutline /></button></td>
        </tr>
            ))
        }
        
      </table>
        </div>
    </div>
  )
}

export default OrderList