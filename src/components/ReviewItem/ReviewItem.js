import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';
import './ReviewItem.css'; 

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='container ' > 
    <div className='review-item  '  xs={2} sm={2} md={2} lg={2}  >
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container ">
                <div className="review-item-details ">
                    <p className="product-name" title={name}>
                        { name.length > 20 ? name.slice(0, 20) + '...': name }
                    </p>
                    <p>Price: <span className='orange-color'>{price} Taka</span></p>
                    <p><small>Shipping: {shipping} Taka</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>

        </div>
        
    );
};

export default ReviewItem;