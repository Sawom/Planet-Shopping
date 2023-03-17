import React from 'react';
import './Inventory.css';
import confirm from '../../images/mark.gif';
const Inventory = () => {
    return (
        <div className='App'>
            <br />
            <h3>Confirmed! your order will be delivered within 24 hours! </h3> <br />
            <img className='w-50' src={confirm} alt="" />
        </div>
    );
};

export default Inventory;