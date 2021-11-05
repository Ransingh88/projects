import React, { useState } from 'react'

const AccordionCard = ({title,info}) => {
    const [show,setShow] = useState(false)
    return (
        
           
            <div className="card">
            <div className="card_head" onClick={()=>{setShow(!show)}}>
                        <h3>{ title}</h3>
                <button className="card__btn" >{ show ? "-" : "+" }</button>
            </div>
                    {show ? <p className="card__text">{info} </p> : "" }
            
        </div>
            )
    
}

export default AccordionCard
