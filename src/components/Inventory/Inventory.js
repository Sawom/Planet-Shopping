import React from 'react';
import './Inventory.css';
import confirm from '../../images/mark.gif';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Inventory = () => {
    return (
        <div className='App'>
            <div>
                <br />
                <h3>Confirmed! your order will be delivered within 24 hours! </h3> <br />
                <br />
                <Link to="/shipment" >
                    <Button variant="primary" size="sm"> Go to Shipment Form </Button>
                </Link>
                
            </div>
            
            <div>
                <img className='w-50' src={confirm} alt="" />
                <br /> 
            </div>
           
        </div>
    );
};

export default Inventory;