import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3 className='cart-order'>Order Summary</h3>
                <div className='cart-info'>
                <h5>Selected Items: {cart.length}</h5>
                <p>Total Price:</p>
                <p>Total Shipping Charge:</p>
                <p>Tax:</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;