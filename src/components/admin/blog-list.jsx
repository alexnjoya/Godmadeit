import React from 'react';

const BlogList = ({ blogs, onEdit, onDelete }) => {
    if (blogs.length === 0) {
        return (
            <div className="blog-list-empty">
                <div className="empty-state">
                    <div className="empty-icon">
                        <i className="far fa-file-alt"></i>
                    </div>
                    <h3>No Blog Posts Yet</h3>
                    <p>Click "Create New Post" to get started</p>
                </div>

                <style jsx>{`
                    .blog-list-empty {
                        background: white;
                        border-radius: 12px;
                        padding: 80px 40px;
                        text-align: center;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    }
                    .empty-icon {
                        font-size: 64px;
                        color: #d1d5db;
                        margin-bottom: 20px;
                    }
                    .empty-state h3 {
                        font-size: 24px;
                        font-weight: 600;
                        margin-bottom: 10px;
                        color: #374151;
                    }
                    .empty-state p {
                        color: #6b7280;
                        font-size: 16px;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="blog-list-wrapper">
            <div className="blog-list-header">
                <h3>All Posts ({blogs.length})</h3>
            </div>
            <div className="blog-list-grid">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <div className="blog-card-image">
                            {blog.img ? (
                                <img src={blog.img} alt={blog.title} />
                            ) : (
                                <div className="no-image">
                                    <i className="far fa-image"></i>
                                </div>
                            )}
                        </div>
                        <div className="blog-card-content">
                            <div className="blog-card-meta">
                                <span className="blog-category">{blog.category}</span>
                                <span className="blog-date">{blog.date}</span>
                            </div>
                            <h4 className="blog-card-title">{blog.title}</h4>
                            {blog.description && (
                                <p className="blog-card-description">{blog.description}</p>
                            )}
                            <div className="blog-card-author">
                                {blog.author_img ? (
                                    <img src={blog.author_img} alt={blog.author_name} className="author-avatar" />
                                ) : (
                                    <div className="author-avatar-placeholder">
                                        <i className="far fa-user"></i>
                                    </div>
                                )}
                                <div className="author-info">
                                    <span className="author-name">{blog.author_name}</span>
                                    <span className="author-title">{blog.job_title}</span>
                                </div>
                            </div>
                        </div>
                        <div className="blog-card-actions">
                            <button className="btn-edit" onClick={() => onEdit(blog)}>
                                <i className="far fa-edit"></i>
                                Edit
                            </button>
                            <button className="btn-delete" onClick={() => onDelete(blog.id)}>
                                <i className="far fa-trash-alt"></i>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .blog-list-wrapper {
                    background: white;
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                .blog-list-header {
                    margin-bottom: 30px;
                    border-bottom: 2px solid #f3f4f6;
                    padding-bottom: 15px;
                }
                .blog-list-header h3 {
                    font-size: 20px;
                    font-weight: 600;
                    color: #1a1a1a;
                    margin: 0;
                }
                .blog-list-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 25px;
                }
                .blog-card {
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    background: white;
                }
                .blog-card:hover {
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                    transform: translateY(-4px);
                }
                .blog-card-image {
                    width: 100%;
                    height: 220px;
                    overflow: hidden;
                    background: #f3f4f6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .blog-card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .no-image {
                    font-size: 48px;
                    color: #d1d5db;
                }
                .blog-card-content {
                    padding: 20px;
                }
                .blog-card-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                }
                .blog-category {
                    background: #eff6ff;
                    color: #3b82f6;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                }
                .blog-date {
                    color: #6b7280;
                    font-size: 13px;
                }
                .blog-card-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1a1a1a;
                    margin-bottom: 10px;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .blog-card-description {
                    color: #6b7280;
                    font-size: 14px;
                    line-height: 1.6;
                    margin-bottom: 15px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .blog-card-author {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding-top: 15px;
                    border-top: 1px solid #f3f4f6;
                }
                .author-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: cover;
                }
                .author-avatar-placeholder {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #f3f4f6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #9ca3af;
                    font-size: 16px;
                }
                .author-info {
                    display: flex;
                    flex-direction: column;
                }
                .author-name {
                    font-weight: 600;
                    color: #374151;
                    font-size: 14px;
                }
                .author-title {
                    color: #6b7280;
                    font-size: 12px;
                }
                .blog-card-actions {
                    display: flex;
                    border-top: 1px solid #e5e7eb;
                }
                .btn-edit, .btn-delete {
                    flex: 1;
                    padding: 12px;
                    border: none;
                    background: white;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .btn-edit {
                    color: #3b82f6;
                    border-right: 1px solid #e5e7eb;
                }
                .btn-edit:hover {
                    background: #eff6ff;
                }
                .btn-delete {
                    color: #ef4444;
                }
                .btn-delete:hover {
                    background: #fef2f2;
                }
                @media (max-width: 768px) {
                    .blog-list-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default BlogList;

