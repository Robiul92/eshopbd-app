import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Phoduct/Product';
import './Shops.css'

const Shops = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    const handleAddToCart = (product) =>{
        
        const newCart = [...cart, product]
        console.log(newCart);
        setCart(newCart);
    }

    return (
        <div className='shop-container'>

<div className="product-container">
{
    products.map(product => <Product 
        key={product.id}
        product = {product}
        handleAddToCart = {handleAddToCart}
    
    ></Product>)
}
</div>

<div className="cart-container">

 <Cart cart={cart}></Cart>

</div>


        </div>


    );
};

export default Shops;