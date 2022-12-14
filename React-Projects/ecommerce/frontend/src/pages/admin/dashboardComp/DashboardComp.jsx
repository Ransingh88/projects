import React, { useEffect } from 'react'
import './dashboardComp.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line, Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminProducts } from '../../../redux/features/product/productThunks';
import { fetchAdminOrders } from '../../../redux/features/order/adminOrder/adminOrdersThunks';
import { fetchAdminUsers } from '../../../redux/features/user/adminUsers/adminUsersThunks';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

const DashboardComp = () => {

  
  const {products} = useSelector(state => state.product)
  const {orderDetails} = useSelector(state => state.adminOrder)
  const {users} = useSelector(state => state.adminUser)
  const dispatch = useDispatch()
  let outOfStuck = 0
  products && products.forEach(element => {
    if(element.stock === 0){
      outOfStuck+=1
    }
  });

    const options = {
        responsive: true,
    }

const lineState = {
  labels: ['Initial Amount', 'Earned Amount'],
  datasets: [
    {
      label: 'Total Amount',
      data: [0,orderDetails?.totalAmount],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
}
const doughnutState = {
  labels: ['Out of Stock', 'In Stock'],
  datasets: [
    {
      data: [outOfStuck,products.length - outOfStuck],
      backgroundColor: ['#F6D78B', '#C6D0BC'],
    }
  ],
}

useEffect(()=>{
  dispatch(fetchAdminProducts())
  dispatch(fetchAdminOrders())
  dispatch(fetchAdminUsers())
},[dispatch])


  return (
    <div >
            <h1 className='dashboard_heading'><span>Dashboard</span></h1>
            <div className='dashboardComp_container'>
        <div className='dashboard_left'>
            {/* <div className='dashboard_totalRevenue'>
                <h3>Total Amount</h3>
                <span>5,01,250</span>
            </div> */}
            <div className='dashboard_summery'>
                <div className='dashboard_summery_itemBox iemBox1'>
                    <h3>Product</h3>
                    <span>{products.length}</span>
                </div>
                <div className='dashboard_summery_itemBox iemBox2'>
                    <h3>Orders</h3>
                    <span>{orderDetails?.orders.length}</span>
                </div>
                <div className='dashboard_summery_itemBox iemBox3'>
                    <h3>Users</h3>
                    <span>{users && users.length}</span>
                </div>
            </div>
            <div className='dashboard_lineGraph'>
                <Line  data={lineState} options={options}/>
            </div>
        </div>
        <div className='dashboard_right'>
        <div className='dashboard_totalRevenue'>
                <h3>Total Amount</h3>
                <span>{orderDetails?.totalAmount}</span>
            </div>
            <div className='dashboard_doughnutGraph'>
            <Doughnut data={doughnutState} options={options}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DashboardComp