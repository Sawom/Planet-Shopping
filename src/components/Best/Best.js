import React from 'react';
import { Row } from 'react-bootstrap';
import BestPic from '../../images/bannar/best.png';
import './Best.css'
const Best = () => {
    return (
        <div className='style1'>
            <br />
            <div className='container'>
                <Row   xs={1} sm={1} md={2} lg={2}>
                    <div>
                        <img src={BestPic} alt="best" className='d-block w-100' />
                    </div>
                    <div>
                        <br />
                        <h2>We Provide the best</h2>
                        <h1>Product For You!</h1> <br />
                        <p className='textStyle'>
                            Modern furniture refers to product produced from the late 19th century through the present that is 
                            influenced by modernism. Post-World War II ideals of cutting excess, commodification, and practicality
                            of materials in design heavily influenced the aesthetic of the product.
                        </p> <br />
                    </div>
                </Row> 
            </div>
           
        </div>
    );
};

export default Best;