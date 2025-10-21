import Link from 'next/link';
import React from 'react';

// This component can be added to your header or navigation
// to provide quick access to the admin dashboard

const AdminLink = ({ className = '' }) => {
    return (
        <Link href="/admin/blogs" className={`admin-link ${className}`}>
            <i className="far fa-cog"></i>
            <span>Admin</span>
            
            <style jsx>{`
                .admin-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: #f3f4f6;
                    color: #374151;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                .admin-link:hover {
                    background: #3b82f6;
                    color: white;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }
                .admin-link i {
                    font-size: 16px;
                }
            `}</style>
        </Link>
    );
};

export default AdminLink;

