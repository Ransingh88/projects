import React from 'react'
import './order.css'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/layout/loader/Loader'
import MetaData from '../../components/layout/metaData/MetaData'
import { useEffect } from 'react'
import {toast} from 'react-toastify'
import { clearErrors } from '../../redux/features/order/myOrderSlice'
import {myOrders} from '../../redux/features/order/orderThunks'
import OrderItems from './orderItems/OrderItems'

const Order = () => {
    const dispatch = useDispatch()
    const {orders,loading,error} = useSelector(state=>state.myOrder)
    const {user} = useSelector(state=>state.user)
    // const [sortOrder,setSortOrder] = useState('asc')
    // let aa = [...orders]
    // const [bb, setbb] = useState(aa)

  

    // const handleSortOrder = () => {
    //   if(sortOrder === 'asc'){
    //     setSortOrder('desc')
    //     bb.sort(
    //       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    //     );
    //   }
    //   else if(sortOrder === 'desc'){
    //     setSortOrder('asc')
    //     bb.sort(
    //       (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    //     );
    //   }
    // }

   
    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(myOrders())
        // handleSortOrder()
    },[dispatch, error])
  return (
    <>
    {loading ? <Loader/> :
    <>
    <MetaData title={`${user?.name?.split(" ")[0]}'s orders`}/>
    {/* <main className='container-fluid mainMyOrderContainer'>
        <section className='container myOrderContainer'>
            <h1 className='heading myOrder-heading'>My <span>Order</span></h1>
            <div>
                {orders && orders.map((orderItems)=>(
                    <OrderItems orderDetails={orderItems}/>
                ))}
            </div>
        </section>
    </main> */}
    <div className='accountContainer_heading'>
                      <h2>{`${user?.name?.split(" ")[0]}'s orders`}</h2>
                      <div>
                        <button className='btn'>sort</button>
                      </div>
              </div>
              <div className='myOrderContainer'>
              {orders && orders.map((orderItems)=>(
                    <OrderItems orderDetails={orderItems}/>
                ))}
              </div>
    </>
    }</>
  )
}

export default Order