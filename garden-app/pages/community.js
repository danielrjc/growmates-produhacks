import React from 'react';
import withAuth from '../components/withAuth'; // Adjust the import path as needed
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../src/styles.css'
import Overlay from '../components/overlay';
import Header from '../components/header';
import Footer from '../components/footer';
import Feed from '../components/feed';

const Community = () => {
  return (
    <div >
      <Header source="community"/>
      <div style={{ paddingTop: '90px', display: 'flex', justifyContent: 'center' }}>
          <Feed />
        </div>
      <Footer/>

    </div>
    
  );
};

export default withAuth(Community);

