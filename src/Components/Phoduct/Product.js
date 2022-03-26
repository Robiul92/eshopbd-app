import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
const {product, handleAddToCart} = props;
const { name, price, img} = product
    return (
        <div>
           <div className='product'> 
           <img src={img} alt="" />
            <h3 className='product-name'>{name}</h3>
            <p className='product-price'>Price:${price}</p>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                 <FontAwesomeIcon icon= {faShoppingCart} ></FontAwesomeIcon>
            </button>
            </div>
            
            
            
        </div>

        
    );
};

export default Product;