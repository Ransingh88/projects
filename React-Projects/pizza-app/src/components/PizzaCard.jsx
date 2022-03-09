import React from 'react'
import { useState } from 'react'

const PizzaCard = ({pizzaData}) => {
    const [pizzacount,setPizzacount] = useState(0);

    const inc = ()=>{
        if(pizzacount >= 50){
            setPizzacount(50)
        }else{
        setPizzacount(pizzacount+1)
        }
    }
    const dec = ()=>{
        if(pizzacount <= 0){
            setPizzacount(0)
        }else{
        setPizzacount(pizzacount-1)
        }
    }

    const [varient,setVarient] = useState('lg');

  return (
    <div className='card'>
        <img className='pizzaImages' src={pizzaData.image} alt="" />
        <h3>{pizzaData.name}</h3>
        <div className='pizza_customize'>
            <div>
                <h6>Varients</h6>
                {pizzaData.varient.map(e=>(
                    <button className='varient_button'>{e}</button>
                ))}
            </div>
            <div>
            <h6>Quantity</h6>
            <div className='pizza_counetr'>
                <button onClick={dec}>-</button>
                <h4>{pizzacount}</h4>
                <button onClick={inc}>+</button>
            </div>
            </div>
        </div>
        <h4>
               {/* {pizzaData.prices[0].varient} */}
               
               {pizzaData.prices[0].sm}
            
            
            </h4>
        <p className='pizzaDesc'>{pizzaData.desc}</p>
    </div>
  )
}

export default PizzaCard