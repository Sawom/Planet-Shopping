import React from 'react';
import Banner from '../Banner/Banner';
import Best from '../Best/Best';
import ETC from '../ETC/ETC';
import NewItems from '../NewItems/NewItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewItems></NewItems>
            <Best></Best>
            <ETC></ETC>
        </div>
    );
};

export default Home;