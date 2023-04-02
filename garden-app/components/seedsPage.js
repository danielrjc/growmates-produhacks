import React from 'react';
import Product from './product';

const SeedsPage = ({ search, mode }) => {
    const products = [
        {
            imageSrc: '/cilantro.png',
            title: 'Celery',
            sellerName: 'Seller 1',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 2',
            sellerName: 'Seller 2',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 1',
            sellerName: 'Seller 1',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 2',
            sellerName: 'Seller 2',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 1',
            sellerName: 'Seller 1',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 2',
            sellerName: 'Seller 2',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
        {
            imageSrc: '/cilantro.png',
            title: 'Product 3',
            sellerName: 'Seller 3',
        },
    ];
    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '10px',
            padding: '40px',
            width: '85%',
            // maxWidth: '800px',
            maxHeight: 'calc(100vh - 90px)', // Adjust the height according to the header height
            overflowY: 'auto', // Make the grid scrollable


        }}>
            {filteredProducts.map((product) => (
                <Product
                    imageSrc={product.imageSrc}
                    title={product.title}
                    sellerName={product.sellerName}
                    key={product.title}
                    style={{ marginBottom: '10px' }}
                />
            ))}
        </div>
    );
};

export default SeedsPage;

