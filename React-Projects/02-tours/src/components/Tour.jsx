import React, { useState } from 'react'

const Tour = ({ id, name, info, price, image ,removeTour}) => {
    
    const [readmore, setReadmore] = useState(false);

    return (
        <div className="tourCard">
            <div className="tourCard__img">
                <img src={image} alt={name} />
            </div>
            <div className="tourCard__details">
                <div className="headDetails">
                    <h4>{ name}</h4>
                    <h4 className="headDetails__price">Rs. { price}</h4>
                </div>
                <p className="tourCard__details__info">
                    {readmore ? `${info}` : `${info.substring(0,200)}. . . `}
                    <button className="readmore" onClick={()=>setReadmore(!readmore)}>{ readmore ? "  Show less" : " Readmore"}</button>
                </p>
                <button className="tourCard__details__btn" onClick={()=>removeTour(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export  {Tour}
