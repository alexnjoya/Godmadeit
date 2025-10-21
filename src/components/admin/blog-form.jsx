import React, { useState, useEffect } from 'react';

const BlogForm = ({ blog, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        color: '1',
        description: '',
        content: '',
        author_name: '',
        job_title: '',
        img: '',
        author_img: '',
        tags: ''
    });

    const [imagePreview, setImagePreview] = useState('');
    const [authorImagePreview, setAuthorImagePreview] = useState('');

    useEffect(() => {
        if (blog) {
            setFormData({
                title: blog.title || '',
                category: blog.category || '',
                color: blog.color || '1',
                description: blog.description || '',
                content: blog.content || '',
                author_name: blog.author_name || '',
                job_title: blog.job_title || '',
                img: blog.img || '',
                author_img: blog.author_img || '',
                tags: blog.tags ? blog.tags.join(', ') : ''
            });
            setImagePreview(blog.img || '');
            setAuthorImagePreview(blog.author_img || '');
        }
    }, [blog]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData(prev => ({
                    ...prev,
                    img: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAuthorImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAuthorImagePreview(reader.result);
                setFormData(prev => ({
                    ...prev,
                    author_img: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const blogData = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        };

        onSubmit(blogData);
    };

    return (
        <div className="blog-form-wrapper">
            <div className="blog-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="form-section">
                                <h3 className="section-title">Post Content</h3>
                                
                                <div className="form-group">
                                    <label>Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter blog title"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        rows="3"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Brief description of the blog post"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Content *</label>
                                    <textarea
                                        name="content"
                                        className="form-control"
                                        rows="12"
                                        value={formData.content}
                                        onChange={handleChange}
                                        placeholder="Write your blog content here..."
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Featured Image *</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    {imagePreview && (
                                        <div className="image-preview mt-3">
                                            <img src={imagePreview} alt="Preview" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="form-section">
                                <h3 className="section-title">Post Settings</h3>
                                
                                <div className="form-group">
                                    <label>Category *</label>
                                    <input
                                        type="text"
                                        name="category"
                                        className="form-control"
                                        value={formData.category}
                                        onChange={handleChange}
                                        placeholder="e.g., Technology, Marketing"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Color Theme</label>
                                    <select
                                        name="color"
                                        className="form-control"
                                        value={formData.color}
                                        onChange={handleChange}
                                    >
                                        <option value="1">Color 1</option>
                                        <option value="2">Color 2</option>
                                        <option value="3">Color 3</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Tags</label>
                                    <input
                                        type="text"
                                        name="tags"
                                        className="form-control"
                                        value={formData.tags}
                                        onChange={handleChange}
                                        placeholder="Separate with commas"
                                    />
                                    <small className="form-text">e.g., technology, design, business</small>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3 className="section-title">Author Info</h3>
                                
                                <div className="form-group">
                                    <label>Author Name *</label>
                                    <input
                                        type="text"
                                        name="author_name"
                                        className="form-control"
                                        value={formData.author_name}
                                        onChange={handleChange}
                                        placeholder="Author name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Job Title *</label>
                                    <input
                                        type="text"
                                        name="job_title"
                                        className="form-control"
                                        value={formData.job_title}
                                        onChange={handleChange}
                                        placeholder="e.g., Content Writer"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Author Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleAuthorImageChange}
                                    />
                                    {authorImagePreview && (
                                        <div className="image-preview mt-3 author-preview">
                                            <img src={authorImagePreview} alt="Author Preview" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn-submit">
                                    {blog ? 'Update Post' : 'Create Post'}
                                </button>
                                <button type="button" className="btn-cancel" onClick={onCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <style jsx>{`
                .blog-form-wrapper {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    overflow: hidden;
                }
                .blog-form-container {
                    padding: 40px;
                }
                .form-section {
                    background: white;
                    padding: 25px;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                    margin-bottom: 25px;
                }
                .section-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    color: #1a1a1a;
                    border-bottom: 2px solid #f3f4f6;
                    padding-bottom: 10px;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: #374151;
                    font-size: 14px;
                }
                .form-control {
                    width: 100%;
                    padding: 12px 16px;
                    border: 1px solid #d1d5db;
                    border-radius: 8px;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                .form-control:focus {
                    outline: none;
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
                textarea.form-control {
                    resize: vertical;
                    min-height: 100px;
                }
                .form-text {
                    display: block;
                    margin-top: 5px;
                    color: #6b7280;
                    font-size: 12px;
                }
                .image-preview {
                    border-radius: 8px;
                    overflow: hidden;
                    border: 1px solid #e5e7eb;
                }
                .image-preview img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .author-preview img {
                    width: 120px;
                    height: 120px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .form-actions {
                    margin-top: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .btn-submit, .btn-cancel {
                    width: 100%;
                    padding: 14px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 15px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .btn-submit {
                    background: #3b82f6;
                    color: white;
                }
                .btn-submit:hover {
                    background: #2563eb;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }
                .btn-cancel {
                    background: #f3f4f6;
                    color: #374151;
                }
                .btn-cancel:hover {
                    background: #e5e7eb;
                }
            `}</style>
        </div>
    );
};

export default BlogForm;

