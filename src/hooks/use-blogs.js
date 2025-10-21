import { useState, useEffect } from 'react';
import blog_data from '../data/blog-data';

/**
 * Custom hook to fetch blogs from localStorage and merge with static data
 * 
 * @param {boolean} includeStatic - Whether to include static blog_data (default: true)
 * @param {boolean} adminOnly - Whether to only return admin-created blogs (default: false)
 * @returns {Array} Array of blog posts
 */
const useBlogs = (includeStatic = true, adminOnly = false) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = () => {
            try {
                // Get admin-created blogs from localStorage
                const adminBlogs = localStorage.getItem('blai_blogs');
                const parsedAdminBlogs = adminBlogs ? JSON.parse(adminBlogs) : [];

                // Return only admin blogs if requested
                if (adminOnly) {
                    setBlogs(parsedAdminBlogs);
                    setLoading(false);
                    return;
                }

                // Merge admin blogs with static data
                if (includeStatic) {
                    // Combine both, with admin blogs first (newest first)
                    const combinedBlogs = [...parsedAdminBlogs, ...blog_data];
                    setBlogs(combinedBlogs);
                } else {
                    setBlogs(parsedAdminBlogs);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                // Fallback to static data on error
                setBlogs(includeStatic ? blog_data : []);
                setLoading(false);
            }
        };

        fetchBlogs();

        // Listen for storage changes (when blogs are added/updated in admin)
        const handleStorageChange = (e) => {
            if (e.key === 'blai_blogs') {
                fetchBlogs();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Custom event for same-window updates
        const handleCustomUpdate = () => {
            fetchBlogs();
        };

        window.addEventListener('blogs-updated', handleCustomUpdate);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('blogs-updated', handleCustomUpdate);
        };
    }, [includeStatic, adminOnly]);

    return { blogs, loading };
};

export default useBlogs;

/**
 * Get a single blog by ID
 * @param {number} id - Blog ID
 * @returns {Object|null} Blog object or null if not found
 */
export const getBlogById = (id) => {
    try {
        const adminBlogs = localStorage.getItem('blai_blogs');
        const parsedAdminBlogs = adminBlogs ? JSON.parse(adminBlogs) : [];
        const allBlogs = [...parsedAdminBlogs, ...blog_data];
        
        return allBlogs.find(blog => blog.id === parseInt(id)) || null;
    } catch (error) {
        console.error('Error getting blog by ID:', error);
        return null;
    }
};

/**
 * Get blogs by category
 * @param {string} category - Category name
 * @returns {Array} Array of matching blogs
 */
export const getBlogsByCategory = (category) => {
    try {
        const adminBlogs = localStorage.getItem('blai_blogs');
        const parsedAdminBlogs = adminBlogs ? JSON.parse(adminBlogs) : [];
        const allBlogs = [...parsedAdminBlogs, ...blog_data];
        
        return allBlogs.filter(blog => 
            blog.category.toLowerCase() === category.toLowerCase()
        );
    } catch (error) {
        console.error('Error getting blogs by category:', error);
        return [];
    }
};

/**
 * Search blogs by title or content
 * @param {string} query - Search query
 * @returns {Array} Array of matching blogs
 */
export const searchBlogs = (query) => {
    try {
        const adminBlogs = localStorage.getItem('blai_blogs');
        const parsedAdminBlogs = adminBlogs ? JSON.parse(adminBlogs) : [];
        const allBlogs = [...parsedAdminBlogs, ...blog_data];
        
        const lowerQuery = query.toLowerCase();
        return allBlogs.filter(blog => 
            blog.title.toLowerCase().includes(lowerQuery) ||
            (blog.description && blog.description.toLowerCase().includes(lowerQuery)) ||
            (blog.content && blog.content.toLowerCase().includes(lowerQuery))
        );
    } catch (error) {
        console.error('Error searching blogs:', error);
        return [];
    }
};

/**
 * Trigger a custom event when blogs are updated
 * Call this after creating/updating/deleting blogs
 */
export const triggerBlogsUpdate = () => {
    window.dispatchEvent(new Event('blogs-updated'));
};

