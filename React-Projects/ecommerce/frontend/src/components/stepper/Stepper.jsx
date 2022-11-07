import React, { Fragment } from 'react'
import './stepper.css'

import { MdOutlineConfirmationNumber, MdOutlineLocalShipping, MdOutlinePayment } from 'react-icons/md';

const Stepper = ({activeStep=1}) => {
    const steps =[
        {
            lebel:"Shipping Details",
            icon:<MdOutlineLocalShipping/>
        },
        {
            lebel:"Confirm Order",
            icon:<MdOutlineConfirmationNumber/>
        },
        {
            lebel:"Payment",
            icon:<MdOutlinePayment/>
        },
    ]
  return (
    <main className='stepperContainer'>
        {steps.map((item,indx)=>(
            <Fragment key={indx}>
            <div className={`stepper_step_line ${(activeStep-1) >= indx ? 'stepper_line-active' : ''}`}></div>
            <div className={`stepper_step ${(activeStep-1) >= indx ? 'stepper-activeStep' : ''}`} >
                <div className='stepper_icon'>{item.icon}</div>
                <p className='stepper_lebel'>{item.lebel}</p>
            </div>
            </Fragment>
            ))}
    </main>
  )
}

export default Stepper