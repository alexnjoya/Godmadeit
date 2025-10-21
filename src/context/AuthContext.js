import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);
    const router = useRouter();

    // Load user from localStorage on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('auth_token');
        const storedUser = localStorage.getItem('auth_user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            // Store token and user
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('auth_user', JSON.stringify(data.user));
            setToken(data.token);
            setUser(data.user);

            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Register function
    const register = async (name, email, password) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || data.errors?.[0]?.msg || 'Registration failed');
            }

            // Store token and user
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('auth_user', JSON.stringify(data.user));
            setToken(data.token);
            setUser(data.user);

            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Google OAuth function
    const googleLogin = async (credential, email, name, picture) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/users/google-auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ credential, email, name, picture })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Google authentication failed');
            }

            // Store token and user
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('auth_user', JSON.stringify(data.user));
            setToken(data.token);
            setUser(data.user);

            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        setToken(null);
        setUser(null);
        router.push('/sign-in');
    };

    // Update user function
    const updateUser = (updatedUser) => {
        localStorage.setItem('auth_user', JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    // Check if user is admin
    const isAdmin = () => {
        return user?.role === 'admin';
    };

    // Check if user is authenticated
    const isAuthenticated = () => {
        return !!token && !!user;
    };

    const value = {
        user,
        token,
        loading,
        login,
        register,
        googleLogin,
        logout,
        updateUser,
        isAdmin,
        isAuthenticated
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

