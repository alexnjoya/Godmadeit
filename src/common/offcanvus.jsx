import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenus from '../layout/headers/mobile-menus';
import { useAuth } from '../context/AuthContext';
 
// images import 
import logo from "../../public/assets/img/logo/logo-white.png"

const Offcanvus = ({sidebarOpen, setSidebarOpen}) => {
    const { user, logout, isAuthenticated, loading } = useAuth();

    const handleLinkClick = () => {
        setSidebarOpen(false);
    };

    const handleLogout = () => {
        logout();
        setSidebarOpen(false);
    };

    return (
        <>
            <div className="tpoffcanvas-area">
                <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
                            <i className="fal fa-times"></i>
                        </button>
                    </div>

                    <div className="tpoffcanvas__logo mb-40">
                        <Link href="/" onClick={handleLinkClick}>
                            <Image src={logo} alt="Blai" />
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <div className="mobile-menu mean-container">
                        <MobileMenus />
                    </div>

                    {/* Auth Actions */}
                    <div className="mobile-auth-actions">
                        {!loading && isAuthenticated() ? (
                            <>
                                {user?.role === 'admin' && (
                                    <Link 
                                        href="/admin/blogs" 
                                        className="mobile-auth-btn admin-btn"
                                        onClick={handleLinkClick}
                                    >
                                        <i className="far fa-cog"></i>
                                        <span>Admin Dashboard</span>
                                    </Link>
                                )}
                                <button 
                                    onClick={handleLogout}
                                    className="mobile-auth-btn logout-btn"
                                >
                                    <i className="far fa-sign-out"></i>
                                    <span>Logout</span>
                                </button>
                            </>
                        ) : !loading && (
                            <>
                                <Link 
                                    href="/sign-in" 
                                    className="mobile-auth-btn signin-btn"
                                    onClick={handleLinkClick}
                                >
                                    <i className="far fa-sign-in"></i>
                                    <span>Sign In</span>
                                </Link>
                                <Link 
                                    href="/register" 
                                    className="mobile-auth-btn signup-btn"
                                    onClick={handleLinkClick}
                                >
                                    <i className="far fa-user-plus"></i>
                                    <span>Sign Up</span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${sidebarOpen && "apply"}`} onClick={() => setSidebarOpen(false)}></div>

            <style jsx>{`
                .mobile-auth-actions {
                    margin: 30px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .mobile-auth-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 14px 20px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    transition: all 0.3s ease;
                    border: none;
                    cursor: pointer;
                    width: 100%;
                }
                .mobile-auth-btn i {
                    font-size: 16px;
                }
                .admin-btn {
                    background: rgba(59, 130, 246, 0.15);
                    color: #3b82f6;
                }
                .admin-btn:hover {
                    background: rgba(59, 130, 246, 0.25);
                }
                .signin-btn, .signup-btn {
                    background: white;
                    color: #1a1a1a;
                }
                .signin-btn:hover, .signup-btn:hover {
                    background: #f3f4f6;
                }
                .signup-btn {
                    background: #3b82f6;
                    color: white;
                }
                .signup-btn:hover {
                    background: #2563eb;
                }
                .logout-btn {
                    background: rgba(239, 68, 68, 0.15);
                    color: #ef4444;
                }
                .logout-btn:hover {
                    background: rgba(239, 68, 68, 0.25);
                }
            `}</style>
        </>
    );
};

export default Offcanvus;