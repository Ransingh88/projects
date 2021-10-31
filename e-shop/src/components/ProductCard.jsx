import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, category, image, price,rating }) => {
  return (
    <>
      <Link to={`/product/${id}`} className="product_card__link">
        <div className="product_card">
          <img src={image} alt={title} />
          <div className="product_card__Details">
            <p className="product_card__title">{title.length > 25 ? `${title.slice(0,20)}...` : title}</p>
            <p className="product_card__price">Rs. {price*75}</p>
            <p className="product_card__rating">{rating} Rating</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export { ProductCard };
