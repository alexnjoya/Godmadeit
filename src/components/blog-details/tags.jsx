import Link from 'next/link';
import React from 'react';

const Tags = () => {
    const tags = ["Business", "Design", "Technology", "Development", "Marketing", "SaaS", "Web"];
    
    return (
        <>
            <div className="sidebar__widget mb-40">
                <h3 className="sidebar__widget-title">Tags</h3>
                <div className="sidebar__widget-content">
                    <div className="tagcloud">
                        {tags.map((tag, i) => (
                            <Link key={i} href="/blog">{tag}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tags;

