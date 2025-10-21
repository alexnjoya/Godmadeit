import Link from 'next/link';
import React from 'react';

const Categories = () => {
    return (
        <>
            <div className="sidebar__widget mb-40">
                <div className="sidebar__widget-content">
                    <div className="sidebar__category">
                        <h3 className="sidebar__widget-title">Categories</h3>
                        <ul>
                            <li><Link href="/blog">Technology</Link></li>
                            <li><Link href="/blog">Business</Link></li>
                            <li><Link href="/blog">Development</Link></li>
                            <li><Link href="/blog">Design</Link></li>
                            <li><Link href="/blog">Marketing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;

