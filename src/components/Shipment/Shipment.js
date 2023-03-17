import React, { useState,useEffect } from 'react';
import { Badge, Button, Form, ListGroup } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase';

const Shipment = () => {
    
    const [error, setError] = useState('');
    const [shipment, setShipment] = useState({});
    const navigate = useNavigate();
    // shipment info loading
    const[info, setInfo] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/shipment')
        .then(res => res.json())
        .then(data => setInfo(data));
    }, []) // end

    // add data shipment
    const handleAddShipment = (event) =>{
        event.preventDefault();
        console.log(shipment);
        
        fetch(`http://localhost:5000/shipment`, {
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(shipment)
        } )
        .then(res => res.json())
        .then(data =>{
           if(data.acknowledged){
                alert('user added');
                const refresh = window.location.reload(true);
                event.target.reset();
           }
            
        })
    }
    // input from form
    const handleInput = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newShipment = {...shipment};
        newShipment[field] = value;
        setShipment(newShipment);
    }
    // delete
    const handleDelete = id=> {
        const agree = window.confirm(`are you sure want to delete: ${id}`);
        if(agree){
            fetch(`http://localhost:5000/shipment/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('deleted successfully!');
                    const remainingShipment = info.filter(inf => inf._id !== id );
                    setInfo(remainingShipment);
                }
            })
        }
    }


    return (
        <div>
            <br /><br />
            <h2 className='app' >Shipment</h2>
            <div className='center container'>  
                <Form onSubmit={handleAddShipment} >
                    <br />
                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={handleInput} required  name="name" type="text" placeholder="Name" />
                    </Form.Group>
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required onChange={handleInput}  name="email"  type="email" placeholder="Email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {/* city */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control required  onChange={handleInput} name="city" type="text" placeholder="City" />
                    </Form.Group>
                    {/* address */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required  onChange={handleInput} name="address" type="text" placeholder="Address" />
                    </Form.Group>
                    {/* phone no */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone no</Form.Label>
                        <Form.Control required  onChange={handleInput} name="phoneno" type="number" placeholder="Phone no" />
                    </Form.Group>
                    <p style={{color: 'red'}}>{error}</p>
                    <Button variant="primary" type="submit">
                            Add Shipping
                    </Button>
                    <br /> <br />
                </Form>
            </div>
            <br /><br />
            <h2 className='app' >Shipment information</h2>
            {/* showing shipment info */}
            <div className=' container'>
                {
                    info.map( shipInfo =>  <ListGroup as="ol" key={shipInfo._id}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Name: {shipInfo.name}</div>
                             <p>Email: {shipInfo.email} </p>
                             <p>City: {shipInfo.city}</p>
                             <p>Address: {shipInfo.address} </p>
                             <p> Phone: {shipInfo.phoneno}</p>
                              <Link to={`/shipment/update/${shipInfo._id}`} >
                                    <Button variant="success" size='sm' >Update</Button>
                              </Link> 
                            <Button className='mx-3' size='sm' variant="danger" onClick={ ()=> handleDelete(shipInfo._id)} >X Delete</Button>
                            </div>
                        </ListGroup.Item>
                        <br />
                    </ListGroup> )
                    // info.map(shipInfo => <li key={shipInfo._id}> 
                    // Name: {shipInfo.name} , Email: {shipInfo.email} , City: {shipInfo.city}, Address: {shipInfo.address} , Phone: {shipInfo.phoneno} <br /> <br />
                    // <Link to={`/shipment/update/${shipInfo._id}`} >
                    //     <Button size='sm' >update</Button>
                    // </Link> <br /> <br />
                    // <Button size='sm'  onClick={ ()=> handleDelete(shipInfo._id)} >X Delete</Button>
                    // <br />
                    // </li> )
                }
            </div>

        </div>
    );
};

export default Shipment;