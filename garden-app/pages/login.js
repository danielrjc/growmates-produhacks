// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../src/styles.css'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);

        try {
            const response = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: email,
                    password: password,
                }),
            });

            if (!response.ok) {

                console.error('Authentication failed');
                return;
            }

            const data = await response.json();
            console.log('Authentication successful:', data);

            localStorage.setItem('token', data.jwt);
            localStorage.setItem('user', JSON.stringify(data.user));

            router.push('/home');
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };
    const handleClick = (e) => {
        e.preventDefault();
        router.push('/signup');
    }


    return (
        <div className='login-container'>
            <video autoPlay loop muted className="bg-video">
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            <div className='left'>
                <h1 className="copy">Growmates</h1>

                <p className='copy-p'>
                    Join our growing community of garden enthusiasts and experience the joy of shared green spaces. Whether you're a seasoned gardener or just starting out, Garden Share connects you with like-minded individuals to cultivate, learn, and grow together.
                </p>
                <button className='signup-btn' onClick={handleClick}>Sign Up</button>
            </div>
            <div className='login-form'>
                <h2 className='signin-header'>Sign In</h2>
                <form className='form-contain' onSubmit={handleSubmit}>
                    <div className='form-container'>
                        <div className='input-container'>
                            <label className='input-label' htmlFor="email">Email:</label>
                            <input
                                className='input-field'
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='input-container'>
                            <label className='input-label' htmlFor="password">Password:</label>
                            <input
                                className='input-field'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button className='login-btn' type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;