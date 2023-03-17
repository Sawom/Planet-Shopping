import React from 'react';
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import './NewItems.css';
import cap from '../../images/bannar/cap.png';
import shoe from '../../images/bannar/shoe .png';
import shirt from '../../images/bannar/shirt.png';
import { Link } from 'react-router-dom';

const NewItems = () => {
    return (
        <div className='container'>
            <br />
            <div>
              <h2>New Arrival Items</h2> 
              <p>
                Some of our customers say that they trust us and buy 
                our product without any hesitation because they believe
                 us and always happy to buy our product.
             </p> 
            </div>
            <br />
             <CardGroup  >
                {/* 1 */}
                <Card className='cardStyles'>
                    <Card.Img variant="top" src={cap} />
                    <Card.Body>
                    <Card.Title>Caps</Card.Title>
                    <Card.Text>
                       Started from only 70 Taka! <br /> <br />
                       <Link to="/shop">
                            <Button variant="success">Shop Now</Button>
                        </Link> 
                    </Card.Text>
                    </Card.Body> 
                </Card>
                {/* 2 */}
                <Card className='cardStyles' >
                    <Card.Img variant="top" src={shoe} />
                    <Card.Body>
                    <Card.Title>Stylish Shoe</Card.Title>
                    <Card.Text>
                        Started from only 950 Taka! <br /> <br />
                       <Link to="/shop">
                            <Button variant="success">Shop Now</Button>
                        </Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
                {/* 3 */}
                <Card className='cardStyles'>
                    <Card.Img variant="top" src={shirt}/>
                    <Card.Body>
                    <Card.Title>Shirt</Card.Title>
                    <Card.Text>
                        Started from only 500 Taka! <br /> <br />
                       <Link to="/shop">
                            <Button variant="success">Shop Now</Button>
                        </Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <br /> <br />
        </div>
    );
};

export default NewItems;