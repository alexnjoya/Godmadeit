import React, { useState, useEffect } from 'react';
import HeaderFive from '../../layout/headers/header-5';
import FooterFive from '../../layout/footers/footer-5';
import BlogForm from './blog-form';
import BlogList from './blog-list';
import { triggerBlogsUpdate } from '../../hooks/use-blogs';

const AdminBlogManager = () => {
    const [blogs, setBlogs] = useState([]);
    const [editingBlog, setEditingBlog] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Load blogs from localStorage on mount
    useEffect(() => {
        const savedBlogs = localStorage.getItem('blai_blogs');
        if (savedBlogs) {
            setBlogs(JSON.parse(savedBlogs));
        }
    }, []);

    // Save blogs to localStorage whenever they change
    useEffect(() => {
        if (blogs.length > 0 || localStorage.getItem('blai_blogs')) {
            localStorage.setItem('blai_blogs', JSON.stringify(blogs));
        }
    }, [blogs]);

    const handleCreateBlog = (blogData) => {
        const newBlog = {
            ...blogData,
            id: Date.now(),
            date: new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })
        };
        setBlogs([...blogs, newBlog]);
        setShowForm(false);
        triggerBlogsUpdate(); // Notify other components
    };

    const handleUpdateBlog = (blogData) => {
        setBlogs(blogs.map(blog => 
            blog.id === editingBlog.id ? { ...blogData, id: blog.id } : blog
        ));
        setEditingBlog(null);
        setShowForm(false);
        triggerBlogsUpdate(); // Notify other components
    };

    const handleDeleteBlog = (id) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            setBlogs(blogs.filter(blog => blog.id !== id));
            triggerBlogsUpdate(); // Notify other components
        }
    };

    const handleEditBlog = (blog) => {
        setEditingBlog(blog);
        setShowForm(true);
    };

    const handleCancelForm = () => {
        setEditingBlog(null);
        setShowForm(false);
    };

    return (
        <>
            <HeaderFive />
            <main>
                <div className="admin-blog-area pt-120 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="admin-blog-header mb-50">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h2 className="admin-blog-title">Blog Management</h2>
                                            <p className="admin-blog-subtitle">Create and manage your blog posts</p>
                                        </div>
                                        {!showForm && (
                                            <button 
                                                className="tp-btn-inner tp-btn-hover alt-color-orange"
                                                onClick={() => setShowForm(true)}
                                            >
                                                <span>Create New Post</span>
                                                <b></b>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {showForm ? (
                            <BlogForm 
                                blog={editingBlog}
                                onSubmit={editingBlog ? handleUpdateBlog : handleCreateBlog}
                                onCancel={handleCancelForm}
                            />
                        ) : (
                            <BlogList 
                                blogs={blogs}
                                onEdit={handleEditBlog}
                                onDelete={handleDeleteBlog}
                            />
                        )}
                    </div>
                </div>
            </main>
            <FooterFive style_contact={true} style_team={true} />

            <style jsx>{`
                .admin-blog-area {
                    background: #f8f9fa;
                    min-height: 100vh;
                }
                .admin-blog-header {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                .admin-blog-title {
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 5px;
                    color: #1a1a1a;
                }
                .admin-blog-subtitle {
                    color: #666;
                    margin-bottom: 0;
                    font-size: 16px;
                }
                .tp-btn-inner {
                    padding: 15px 30px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
            `}</style>
        </>
    );
};

export default AdminBlogManager;

