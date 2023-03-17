import React from 'react';
import free from '../../images/etc/free.png';
import quality from '../../images/etc/quality.png';
import guaranty from '../../images/etc/garanty.png';
import support from '../../images/etc/support.png';
import { Row } from 'react-bootstrap';


const ETC = () => {
    return (
        <div className='container'>
            <br /> <br />
            <Row xs={1} sm={1} md={2} lg={4} >
                {/* 1 */}
                <div className='d-flex'>
                    <div className='mx-3'>
                        <img src={free} className='imgStyle ' alt="" />
                    </div>
                    <div>
                        <h4>Free home delivery</h4>
                        <p className='textStyle'>Provide free home delivery for all product over 5000 Taka</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='d-flex'>
                    <div className='mx-3'>
                        <img src={quality} className='imgStyle' alt="" />
                    </div>
                    <div>
                        <h4>Quality Products</h4>
                        <p className='textStyle'>We ensure the product quality that is our main goal</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='d-flex'>
                    <div className='mx-3'>
                        <img src={guaranty} className='imgStyle' alt="" />
                    </div>
                    <div>
                        <h4>Money Back</h4>
                        <h5>30 Days Guaranted!</h5>
                        <p className='textStyle'>Return product within 30 days for any product you buy</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='d-flex'>
                    <div className='mx-3'>
                        <img src={support} className='imgStyle' alt="" />
                    </div>
                    <div>
                        <h4>Online Support</h4>
                        <p className='textStyle'>We ensure the product quality that you can trust easily</p>
                    </div>
                </div>
            </Row>
           <br /> 
        </div>
    );
};

export default ETC;