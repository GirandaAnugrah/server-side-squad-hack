import React, { useState } from 'react';
import useLogin from './auth/hooks/useLogin';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, user, error, login } = useLogin();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <form className='w-64 mx-auto flex flex-col bg-slate-400' onSubmit={handleSubmit}>
            <input type="email" name="email" value={email} onChange={handleFormChange} placeholder="Email" required />
            <input type="password" name="password" value={password} onChange={handleFormChange} placeholder="Password" required />
            <button type="submit" disabled={loading}>Login</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && <p>User logged in successfully: {user.email}</p>}
        </form>
    );
};

export default LoginForm;
