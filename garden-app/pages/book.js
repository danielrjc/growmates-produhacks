import React from 'react';
import withAuth from '../components/withAuth'; // Adjust the import path as needed
import '../src/styles.css'
import Header from '../components/header';
import Footer from '../components/footer';

const Book = () => {
    return (
        <div className='dashboard-container'>
            <Header source="book" />
            <Footer />
        </div>
    );
};

export default withAuth(Book);

