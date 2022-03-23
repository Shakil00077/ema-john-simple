import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <h3 className='cart-order'>Order Summary</h3>
            <h5>Selected Items: {props.cart.length}</h5>
        </div>
    );
};

export default Cart;