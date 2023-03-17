import React, { useEffect, useState, Component } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';
import axios from 'axios';

const Shop = () => {
    const  [products, setProducts  ] = useProducts();
    const [cart, setCart] = useState([]);
    const [display, setDisplay] = useState([]);
    
    useEffect(()=>{
        const url = `http://localhost:5000/products`
        fetch(url)
        .then(res=> res.json())
        .then( data => {
            setProducts(data);
        } )
    }, [])

    
    // end
    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    // add to cart
    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id);
    }


    return (
        <div className='container'>
            <br /> <br />
            {/* showing product */}
            <Row className='part1' xs={2} sm={2} md={2} lg={2} >
                <Row className="part2 "  xs={1} sm={1} md={2} lg={3} >
                    {
                        products.map(product=><Product 
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Product>)
                    }
                </Row>
                {/* cart */}
                <div className="part3">
                    <Cart cart={cart}>
                        <Link to="/orders">
                            <Button size="sm">
                                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                                <span className='mx-2'> Review Order </span>
                            </Button>
                        </Link>
                    </Cart>
                    
                </div>
            </Row>
                
        </div>
    );
};

export default Shop;