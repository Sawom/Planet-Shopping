import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Button, Card } from 'react-bootstrap';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className='my-2'>
            <Card className='container p-2  h-100 cardStyless'>
                <Card.Img className='w-100' variant="top" src={img} />

                <Card.Body>
                    {/* <Card.Title className='textStyle' > {name} {id} </Card.Title> */}
                    <h6 className='pStyle'>{name}</h6>
                    <p className='pStyle' >Price:{price} Taka  </p>
                    <p><small>Seller: {seller}</small></p>
                     <p><small>Ratings: {ratings} stars</small></p>
                    <div >
                        <Button size="sm" onClick={() => handleAddToCart(product)} >
                            <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                             <span className='mx-2'> Add to Cart</span>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;