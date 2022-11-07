import React from 'react'
import './shipping.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { grossTotalPrice, totalPrice } from '../../redux/features/product/cartSlice/cartSlice'
import Stepper from '../../components/stepper/Stepper'
import {Country, State, City} from 'country-state-city'
import { toast } from 'react-toastify'
import { shippingInfoSave } from '../../redux/features/product/cartSlice/cartThunks'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
    const {cartItems,cartPrice,shippingInfo} = useSelector(state=>state.cart)
    const {user} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const [firstName,setFirstName] = useState(user?.name?.split(" ")[0])
    const [middleName,setMiddleName] = useState(shippingInfo?.middleName)
    const [lastName,setLastName] = useState(user?.name?.split(" ")[1])
    const [email,setEmail] = useState(user?.email)
    const [address,setAddress] = useState(shippingInfo?.address)
    const [city,setCity] = useState(shippingInfo?.city)
    const [state,setState] = useState(shippingInfo?.state)
    const [country,setCountry] = useState(shippingInfo?.country)
    const [pinCode,setPinCode] = useState(shippingInfo?.pinCode)
    const [phoneNumber,setPhoneNumber] = useState(shippingInfo?.phoneNumber)

    const handleShippingDetails = ()=>{
        if(address ===''|| pinCode ==='' ||state==='' || country==='' || city === '' || firstName==='' || lastName==='' || email==='' || address === undefined|| pinCode ===undefined ||state===undefined || country===undefined || city === undefined || firstName===undefined || lastName===undefined || email===undefined){
            toast.error('Field should not be empty!')
            return;
        }
        if(phoneNumber.length <10 || phoneNumber.length > 10){
            toast.error('phone number should be 10 digit')
            return;
        }
        dispatch(shippingInfoSave({firstName,middleName,lastName,email,address,city,state,country,pinCode,phoneNumber}))
        navigate('/order/confirm')
    }

    useEffect(()=>{
        dispatch(totalPrice())
        dispatch(grossTotalPrice())
    },[cartItems,dispatch])

  return (
    <main className='container-fluid mainShippingContainer'>
        <section className='container shippingContainer'>
            <h1 className='heading shipping-heading'><span>Shipping</span> Details</h1>
        </section>
        <div className='multiStep_container'>
            <Stepper activeStep={1}/>
        </div>
        <div className='container shippingDetailsContainer'>
            <section className='shippingDeatils-section'>
                <h4>Delivery Address</h4>
                <div className='shippingDeatils_address'>
                    <span>
                    <input type="text" placeholder='First name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    <input type="text" placeholder='Middle name' value={middleName} onChange={(e)=>setMiddleName(e.target.value)}/>
                    <input type="text" placeholder='Last name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    </span>
                    <span>
                    <input type="email" placeholder='email ID' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="number" placeholder='Phone number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                    </span>
                    <span>
                    <input type="text" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    <input type="text" placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)}/>
                    <input type="number" placeholder='PIN code' value={pinCode} onChange={(e)=>setPinCode(e.target.value)}/>
                    </span>
                    <span>
                    <select name="" id="" value={country} onChange={(e)=>setCountry(e.target.value)}>
                        <option value="" >Country</option>
                        {Country && Country.getAllCountries().map((item)=>(
                            <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                        ))}
                    </select>
                    <select name="" id="" value={state} onChange={(e)=>setState(e.target.value)}>
                        <option  value="">State</option>
                        {
                            State && State.getStatesOfCountry(country).map((item)=>(
                                <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                            ))
                        }
                    </select>
                    <select name="" id="" value={city} onChange={(e)=>setCity(e.target.value)}>
                        <option value="" >City</option>
                        {
                            City && City.getCitiesOfState(country,state).map((item)=>(
                                <option key={item.name} value={item.isoCode}>{item.name}</option>
                            ))
                        }
                    </select>
                    </span>
                </div>
            </section>
            <section className='priceDetails-section'>
            <section className='priceDetails_price_breakup'>
                <h4>Price Details</h4>
                <div className='priceDetails-prices_section'>
                    <span className='priceDetails_prices'>
                    <p>Price {`(${cartItems.length} Item)`}</p>
                    <p>&#8377; {cartPrice.total}</p>
                    </span>
                    <span className='priceDetails_prices'>
                    <p>Delivery Charges</p>
                    <p>&#8377; {cartPrice.shippingCharge}</p>
                    </span>
                    <span className='priceDetails_prices'>
                    <p>Discount</p>
                    <p>&#8377; {cartPrice.coupon}</p>
                    </span>
                    <span className='priceDetails_prices'>
                    <p>GST</p>
                    <p>&#8377; {cartPrice.tax}</p>
                    </span>
                </div>
                <div className='priceDetails-totalPayble_section'>
                    <span className='priceDetails_prices priceDetails_totalPayble'>
                    <p>Total Payble</p>
                    <p>&#8377; {cartPrice.grossTotal}</p>
                    </span>
                </div>
            </section>
            <button className='btn btn-primary shipping_actionBtn' onClick={handleShippingDetails}>Deliver Here</button>
            </section>
        </div>
    </main>
  )
}

export default Shipping