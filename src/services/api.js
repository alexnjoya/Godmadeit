// API service for making authenticated requests

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Get authentication headers
 */
const getAuthHeaders = () => {
    const token = localStorage.getItem('auth_token');
    return {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };
};

/**
 * Handle API response
 */
const handleResponse = async (response) => {
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || data.errors?.[0]?.msg || 'Request failed');
    }
    
    return data;
};

// User API
export const userAPI = {
    login: async (email, password) => {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return handleResponse(response);
    },

    register: async (name, email, password) => {
        const response = await fetch(`${API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        return handleResponse(response);
    },

    googleAuth: async (credential, email, name, picture) => {
        const response = await fetch(`${API_BASE_URL}/users/google-auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ credential, email, name, picture })
        });
        return handleResponse(response);
    },

    getProfile: async () => {
        const response = await fetch(`${API_BASE_URL}/users/profile`, {
            headers: getAuthHeaders()
        });
        return handleResponse(response);
    },

    updateProfile: async (data) => {
        const response = await fetch(`${API_BASE_URL}/users/profile`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(data)
        });
        return handleResponse(response);
    }
};

// Blog API
export const blogAPI = {
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/blogs`);
        return handleResponse(response);
    },

    getById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
        return handleResponse(response);
    },

    create: async (blogData) => {
        const response = await fetch(`${API_BASE_URL}/blogs`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(blogData)
        });
        return handleResponse(response);
    },

    update: async (id, blogData) => {
        const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(blogData)
        });
        return handleResponse(response);
    },

    delete: async (id) => {
        const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        });
        return handleResponse(response);
    },

    getMyBlogs: async () => {
        const response = await fetch(`${API_BASE_URL}/blogs/my/blogs`, {
            headers: getAuthHeaders()
        });
        return handleResponse(response);
    },

    search: async (query) => {
        const response = await fetch(`${API_BASE_URL}/blogs/search/${encodeURIComponent(query)}`);
        return handleResponse(response);
    },

    getByCategory: async (category) => {
        const response = await fetch(`${API_BASE_URL}/blogs/category/${encodeURIComponent(category)}`);
        return handleResponse(response);
    }
};

// Email API
export const emailAPI = {
    sendContactForm: async (formData) => {
        const response = await fetch(`${API_BASE_URL}/emails/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        return handleResponse(response);
    }
};

export default {
    user: userAPI,
    blog: blogAPI,
    email: emailAPI
};

