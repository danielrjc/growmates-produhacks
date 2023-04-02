// components/withAuth.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem('token');

            // If the token doesn't exist, redirect to the login page
            if (!token) {
                router.replace('/login');
            }
        }, []);

        // Render the wrapped component
        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
