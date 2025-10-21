/**
 * EXAMPLE: How to integrate admin-created blogs with your existing blog pages
 * 
 * This file shows various ways to display admin-created blogs
 * alongside your existing static blog data
 */

import React from 'react';
import useBlogs, { getBlogById, getBlogsByCategory, searchBlogs } from '@/src/hooks/use-blogs';
import Image from 'next/image';
import Link from 'next/link';

// Example 1: Display all blogs (admin + static)
export const AllBlogsExample = () => {
    const { blogs, loading } = useBlogs(true, false); // includeStatic=true, adminOnly=false

    if (loading) return <div>Loading blogs...</div>;

    return (
        <div className="blog-grid">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

// Example 2: Display only admin-created blogs
export const AdminBlogsOnlyExample = () => {
    const { blogs, loading } = useBlogs(false, true); // includeStatic=false, adminOnly=true

    if (loading) return <div>Loading admin blogs...</div>;

    return (
        <div className="admin-blogs-section">
            <h2>Latest Articles</h2>
            <div className="blog-grid">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

// Example 3: Display blogs by category
export const CategoryBlogsExample = ({ category }) => {
    const [blogs, setBlogs] = React.useState([]);

    React.useEffect(() => {
        const categoryBlogs = getBlogsByCategory(category);
        setBlogs(categoryBlogs);
    }, [category]);

    return (
        <div className="category-blogs">
            <h2>Category: {category}</h2>
            <div className="blog-grid">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

// Example 4: Search functionality
export const BlogSearchExample = () => {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchResults = searchBlogs(query);
        setResults(searchResults);
    };

    return (
        <div className="blog-search">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search blogs..."
                />
                <button type="submit">Search</button>
            </form>

            <div className="search-results">
                {results.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

// Example 5: Single blog detail page
export const BlogDetailExample = ({ blogId }) => {
    const [blog, setBlog] = React.useState(null);

    React.useEffect(() => {
        const foundBlog = getBlogById(blogId);
        setBlog(foundBlog);
    }, [blogId]);

    if (!blog) return <div>Blog not found</div>;

    return (
        <article className="blog-detail">
            <div className="blog-header">
                {blog.img && <img src={blog.img} alt={blog.title} />}
                <h1>{blog.title}</h1>
                <div className="blog-meta">
                    <span className="category">{blog.category}</span>
                    <span className="date">{blog.date}</span>
                </div>
            </div>

            <div className="blog-content">
                {blog.description && <p className="lead">{blog.description}</p>}
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            <div className="blog-author">
                {blog.author_img && <img src={blog.author_img} alt={blog.author_name} />}
                <div>
                    <h4>{blog.author_name}</h4>
                    <p>{blog.job_title}</p>
                </div>
            </div>

            {blog.tags && blog.tags.length > 0 && (
                <div className="blog-tags">
                    <strong>Tags:</strong>
                    {blog.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            )}
        </article>
    );
};

// Reusable Blog Card Component
const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <Link href={`/blog/${blog.id}`}>
                <div className="blog-card-image">
                    {blog.img ? (
                        typeof blog.img === 'string' && blog.img.startsWith('data:') ? (
                            <img src={blog.img} alt={blog.title} />
                        ) : (
                            <Image src={blog.img} alt={blog.title} width={400} height={250} />
                        )
                    ) : (
                        <div className="no-image">No Image</div>
                    )}
                </div>
                <div className="blog-card-content">
                    <div className="blog-card-meta">
                        <span className="category">{blog.category}</span>
                        <span className="date">{blog.date}</span>
                    </div>
                    <h3>{blog.title}</h3>
                    {blog.description && <p>{blog.description}</p>}
                    <div className="blog-card-author">
                        {blog.author_img && (
                            typeof blog.author_img === 'string' && blog.author_img.startsWith('data:') ? (
                                <img src={blog.author_img} alt={blog.author_name} />
                            ) : (
                                <Image src={blog.author_img} alt={blog.author_name} width={40} height={40} />
                            )
                        )}
                        <div>
                            <strong>{blog.author_name}</strong>
                            <span>{blog.job_title}</span>
                        </div>
                    </div>
                </div>
            </Link>

            <style jsx>{`
                .blog-card {
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .blog-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                }
                .blog-card-image {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    background: #f3f4f6;
                }
                .blog-card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .no-image {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: #9ca3af;
                }
                .blog-card-content {
                    padding: 20px;
                }
                .blog-card-meta {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                .category {
                    background: #eff6ff;
                    color: #3b82f6;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                }
                .date {
                    color: #6b7280;
                    font-size: 13px;
                }
                .blog-card h3 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                .blog-card-author {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 1px solid #e5e7eb;
                }
                .blog-card-author img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            `}</style>
        </div>
    );
};

/**
 * INTEGRATION GUIDE:
 * 
 * 1. To use in your existing blog page (src/pages/blog.jsx):
 * 
 *    import useBlogs from '@/src/hooks/use-blogs';
 * 
 *    const Blog = () => {
 *        const { blogs, loading } = useBlogs();
 *        // Use blogs array instead of static blog_data
 *    };
 * 
 * 2. To update blog-grid.jsx to include admin blogs:
 * 
 *    import useBlogs from '@/src/hooks/use-blogs';
 * 
 *    const BlogGrid = () => {
 *        const { blogs } = useBlogs(true, false);
 *        // Map over blogs array
 *    };
 * 
 * 3. To create a dynamic blog detail page with routing:
 * 
 *    Create: src/pages/blog/[id].jsx
 * 
 *    import { useRouter } from 'next/router';
 *    import { getBlogById } from '@/src/hooks/use-blogs';
 * 
 *    const BlogDetail = () => {
 *        const router = useRouter();
 *        const { id } = router.query;
 *        const blog = getBlogById(id);
 *        // Render blog details
 *    };
 * 
 * 4. Remember to trigger update events after admin changes:
 * 
 *    import { triggerBlogsUpdate } from '@/src/hooks/use-blogs';
 * 
 *    // After creating/updating/deleting in admin
 *    triggerBlogsUpdate();
 */

export default BlogCard;

