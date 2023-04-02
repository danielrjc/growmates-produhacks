// pages/signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../src/styles.css'

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                console.error('Registration failed');
                return;
            }

            const data = await response.json();
            console.log('Registration successful:', data);
            router.push('/home');

            // Redirect user to a protected route, e.g., dashboard or login page
            // Use Next.js' useRouter hook for client-side navigation
            // const router = useRouter();
            // router.push('/dashboard');
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push('/login');
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
                <button className='signup-btn' onClick={handleClick}>Sign In</button>
            </div>
            <div className='login-form'>
                <h2 className='signin-header'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
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
                            <label className='input-label' htmlFor="username">Username:</label>
                            <input
                                className='input-field'
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                    <button className='login-btn' type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
