import React, { useEffect } from 'react'
import './productList.css'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {fetchAdminProducts} from '../../../redux/features/product/productThunks'
import { IoCreateOutline, IoOpenOutline, IoTrashOutline } from 'react-icons/io5';
import {toast} from 'react-toastify'
import { clearErrors } from '../../../redux/features/product/productSlice'
import { clearError as adminClearErrors } from '../../../redux/features/product/adminProduct/adminProductThunks'
import { deleteAdminProduct } from '../../../redux/features/product/adminProduct/adminProductThunks'
import { deleteAdminProductReset } from '../../../redux/features/product/adminProduct/adminProductSlice'

const ProductList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {products,error} = useSelector(state => state.product)
    const {error:deleteError, isDeleted} = useSelector(state => state.adminProduct)

    const handleProductDelete = (id) =>{
      dispatch(deleteAdminProduct(id))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
        if(deleteError){
            toast.error(deleteError)
            dispatch(adminClearErrors())
        }
        if(isDeleted){
          // toast.success('Product Deleted Successfully')
          // navigate('/admin/dashboard')
          dispatch(deleteAdminProductReset())
        }
        dispatch(fetchAdminProducts())
    },[dispatch,error,deleteError,isDeleted,navigate])

  return (
    <div className='productList_container'>
        <h1 className='dashboard_heading'><span>All Products</span></h1>
        <div>
        <table className='dashboard_table'>
        <tr>
          <th>Product ID</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Catagory</th>
          <th>Actions</th>
        </tr>
        {
            products && products.map((item)=>(
                <tr>
          <td><Link to={`/product/${item.catagory}/${item._id}`}> <IoOpenOutline/></Link> {item._id} </td>
          <td>{item.name}</td>
          <td>{item.stock}</td>
          <td>{item.catagory}</td>
          <td>{item.price}</td>
          <td><button onClick={()=>{navigate(`/admin/updateproduct/${item._id}`)}} className='tableActionBtn editActionBtn'><IoCreateOutline/></button><button className='tableActionBtn deleteActionBtn' onClick={()=>handleProductDelete(item._id)}><IoTrashOutline /></button></td>
        </tr>
            ))
        }
        
      </table>
        </div>
    </div>
  )
}

export default ProductList