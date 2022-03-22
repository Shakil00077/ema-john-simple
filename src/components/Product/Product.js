import React from 'react';
import './Product.css'

const Product = (porps) => {
    const {img, name, seller, price, ratings} = porps.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: {price}</p>
            <p className='product-seller'>Manufacturer: {seller}</p>
            <p className='product-ratings'>Ratings: {ratings} star</p>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;