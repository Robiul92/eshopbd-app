import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    
    
    
    return (
        <div className='cart'>
             <h4>Order Summary</h4>
<p> Slected Items: {cart.length}</p>

<button className='random-btn'>Coose a Randome Item</button>
<br /> 
<button className='reset-btn'>Reseat</button>

    
    


        </div>
    );
};

export default Cart;