import React, { useEffect, useState, Component } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';

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

    // searching 
    useEffect( ()=>{
        getProducts();
    } , [] );

    const getProducts = async () =>{
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }

    const handleSearch = async (event)=>{
        let key = event.target.value;
        if(key){  
            let result = await fetch(`http://localhost:5000/search/${key}`) ;
            result = await result.json();
            if(result){
                setProducts(result)
            }
        } 
        else{
            getProducts();
        }
    } 
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
            <br />
            {/* search */}
            <div >
                <br />
                <input onChange={handleSearch} className='searchStyle App'  placeholder='Search Product Here' type="text"  ></input>
                <br /> 
            </div>
             <br />
            {/* showing product */}
            <Row className='part1' xs={2} sm={2} md={2} lg={2} >
                <Row className="part2 "  xs={1} sm={1} md={2} lg={3} >
                    {
                        products.length > 0 ?
                        products.map(product=><Product 
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Product>)
                            : <h3> No Result Found</h3>
                    }
                </Row>
                {/* cart */}
                <div className="part3">
                    <Cart  cart={cart}>
                        <Link to="/orders">
                            <Button size="sm">
                                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                                <span className='mx-2'> Review Order </span>
                            </Button>
                            
                        </Link>
                    </Cart>
                    
                </div>
            </Row>
              <br /><br /> <br />
        </div>
    );
};

export default Shop;