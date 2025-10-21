import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import recent_post_1 from "../../../public/assets/img/blog/blog-grid-1.jpg";
import recent_post_2 from "../../../public/assets/img/blog/blog-grid-2.jpg";
import recent_post_3 from "../../../public/assets/img/blog/blog-grid-3.jpg";

const recent_posts = [
    { img: recent_post_1, title: "How to Grow Your Business", date: "April 15, 2023" },
    { img: recent_post_2, title: "Latest Tech Trends", date: "April 10, 2023" },
    { img: recent_post_3, title: "Marketing Strategies", date: "April 5, 2023" },
];

const RecentPost = () => {
    return (
        <>
            <div className="sidebar__widget mb-40">
                <h3 className="sidebar__widget-title">Recent Posts</h3>
                <div className="sidebar__widget-content">
                    <div className="sidebar__post rc__post">
                        {recent_posts.map((post, i) => (
                            <div key={i} className="rc__post mb-20 d-flex align-items-center">
                                <div className="rc__post-thumb mr-20">
                                    <Link href="/blog-details">
                                        <Image src={post.img} alt="blog" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                    </Link>
                                </div>
                                <div className="rc__post-content">
                                    <h3 className="rc__post-title">
                                        <Link href="/blog-details">{post.title}</Link>
                                    </h3>
                                    <div className="rc__meta">
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentPost;

