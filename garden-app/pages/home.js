import React from 'react';
import withAuth from '../components/withAuth'; // Adjust the import path as needed
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../src/styles.css';
import Overlay from '../components/overlay';
import Header from '../components/header';
import MyGardens from '../components/myGardens';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div className='home-container'>
            <Header source="home" />
            <div style={{ paddingTop: '90px' }}> {/* Add this div to create some separation between the header and MyGardens component */}
                <MyGardens />
            </div>
            <Footer />
        </div>
    );
};

export default withAuth(Home);
