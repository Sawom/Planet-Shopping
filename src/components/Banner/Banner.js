import React, { useState } from 'react';
import { Button, Carousel, Row } from 'react-bootstrap';
import Banner1 from '../../images/bannar/customer.png';
import Banner2 from '../../images/bannar/new.png';
import Banner3 from '../../images/bannar/delivery.png';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div className='style'>
            <br /> <br />
            <Carousel className='container '  activeIndex={index} onSelect={handleSelect} >
                {/* 1 */}
                <Carousel.Item>
                    <Row>
                        <div className='col-12 col-lg-6 col-md-6'>
                             <br />  
                            <h1> Trusted Shop</h1>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <img src={Banner1} alt="first slide" className="d-block w-100 " />
                        </div>
                    </Row>
                    
                </Carousel.Item>
                {/* 2 */}
                <Carousel.Item>
                    <Row>
                        <div className='col-12 col-lg-6 col-md-6'>
                             <br />
                            <h1>new collection 2023</h1> <br />
                        </div>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <img src={Banner2} alt="first slide" className="d-block w-100 " />
                        </div>
                    </Row>
                </Carousel.Item>
                {/* 3 */}
                <Carousel.Item>
                    <Row>
                        <div className='col-12 col-lg-6 col-md-6'>
                             <br />
                            <h1> Free Delivery!!</h1>
                            <h3>If you ordered 5k taka or more.</h3> <br />
                        </div>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <img src={Banner3} alt="first slide" className="d-block w-100 " />
                        </div>
                    </Row>
                </Carousel.Item>
            </Carousel>
            <br /> 
        </div>
    );
};

export default Banner;