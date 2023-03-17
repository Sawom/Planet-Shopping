import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import logo from '../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import { signOut } from 'firebase/auth';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const [user] = useAuthState(auth);
    // signout
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div  className="sticky-top headStyles">
            <Navbar   collapseOnSelect expand="lg" bg="light" >
                    <Container>
                        <Navbar.Brand id='name' > <img height={110} src={logo} alt="" /> Planet Shopping</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {/* menue */}
                        <Nav className="me-auto">
                            <Nav.Link as={Link} className='menue' to="home">Home</Nav.Link>
                            <Nav.Link as={Link} className='menue'  to="about">About</Nav.Link>
                            <Nav.Link as={Link} className='menue'  to="shop">Shop</Nav.Link>
                            <Nav.Link as={Link} className='menue'  to="orders">Orders</Nav.Link>
                            <Nav.Link as={Link} className='menue' to="shipment">Shipment</Nav.Link>
                        </Nav>
                        {/* 2 */}   
                        <Nav>
                            
                            {
                            user ?
                            <Button variant='success' onClick={ handleSignOut} >Sign Out</Button>
                            :
                            <Nav.Link as={Link} to="Login" >
                                <Button variant='success' onClick={ handleSignOut} >Sign In</Button>
                            </Nav.Link>
                            }
                        </Nav>
                        </Navbar.Collapse>
                       
                    </Container>
                    
            </Navbar>
        </div>
        
    );
};

export default Header;