import React from 'react'

const Items = ({data}) => {
    return (
        <div className="items">
            {data.map(({id,title,price,img,desc}) => (
                <div className="items__item" key={id}>
                <img src={img} alt={title} />
                <div className="item__details">
                    <div className="details__head">
                            <p>{ title}</p>
                            <p>Rs. {Math.round(price*15)}</p>
                    </div>
                    <div className="details__underline"></div>
                        <p className="details__info">{desc }</p>
                </div>
            </div>

            ))}
            
            
        </div>
    )
}

export default Items
