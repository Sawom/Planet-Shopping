import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Orders = (props) => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    
    const navigate = useNavigate();
    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    // clear cart
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    
    
    return (
        <div className='container' >
            <div className='part1' xs={2} sm={2} md={2} lg={2}>
            <div  xs={2} sm={2} md={2} lg={2} className="review-items-container  ">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product ={product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div> 
            <div className="part3">
                <Cart cart={cart}>
                        <Link onClick={clearCart} as={Link} to='/inventory'>
                            <Button size="sm"  className='btnclr'> Confirm Order </Button> 
                        </Link>

                </Cart>
            </div>
        </div>
        <br />
        </div>
    );
};

export default Orders;