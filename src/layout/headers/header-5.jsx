import useSticky from '@/src/hooks/use-sticky';
import Offcanvus from '@/src/common/offcanvus';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import NavMenu from './nav-menu';
import Image from 'next/image';
import { useAuth } from '@/src/context/AuthContext';

import logo from "../../../public/assets/img/logo/logo-black.png";

const HeaderFive = () => {
   const { sticky } = useSticky();
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [showDropdown, setShowDropdown] = useState(false);
   const { user, logout, isAuthenticated, loading } = useAuth();
   const dropdownRef = useRef(null);

   // Close dropdown when clicking outside
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

    return (
        <>
         <header className="tp-header-height">
               <div id="header-sticky" className={`header-bottom__area header-bottom__plr-5 header-bottom__transparent z-index-3 white-bg ${sticky && "header-sticky"}`}>
                  <div className="container-fluid p-0">
                     <div className="row g-0 align-items-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                           <div className="header-bottom__logo">
                              <Link href="/"><Image src={logo} alt="theme-pure" /></Link>
                           </div>
                        </div>
                        <div className="col-xxl-8 col-xl-7 col-lg-8 d-none d-lg-block">
                           <div className="header-bottom__main-menu text-center">
                              <nav id="mobile-menu">
                                 <NavMenu /> 
                              </nav>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-2 col-md-8 col-6">
                           <div className="header-bottom__right header-five__btn d-flex align-items-center justify-content-end">
                              <div className="header-bottom__btn d-flex align-items-center">
                                 {!loading && isAuthenticated() ? (
                                    <div ref={dropdownRef} className="user-profile-dropdown d-none d-md-inline-block position-relative">
                                       <button 
                                          className="user-profile-btn d-flex align-items-center"
                                          onClick={() => setShowDropdown(!showDropdown)}
                                       >
                                          {user?.avatar ? (
                                             <img src={user.avatar} alt="User" className="user-avatar" />
                                          ) : (
                                             <div className="user-avatar-placeholder">
                                                <i className="far fa-user"></i>
                                             </div>
                                          )}
                                          <i className={`far fa-chevron-${showDropdown ? 'up' : 'down'} ms-2`}></i>
                                       </button>
                                       {showDropdown && (
                                          <div className="user-dropdown-menu">
                                             <div className="user-dropdown-header">
                                                <div className="user-info">
                                                   <p className="user-email">{user?.email}</p>
                                                </div>
                                             </div>
                                             <div className="user-dropdown-divider"></div>
                                             <div className="user-dropdown-body">
                                                {user?.role === 'admin' && (
                                                   <Link href="/admin/blogs" className="dropdown-item">
                                                      <i className="far fa-cog"></i>
                                                      <span>Admin Dashboard</span>
                                                   </Link>
                                                )}
                                                <Link href="/blog" className="dropdown-item">
                                                   <i className="far fa-newspaper"></i>
                                                   <span>View Blogs</span>
                                                </Link>
                                                <button onClick={logout} className="dropdown-item logout-btn">
                                                   <i className="far fa-sign-out"></i>
                                                   <span>Logout</span>
                                                </button>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 ) : !loading && (
                                    <Link className="tp-btn-yellow inner-color tp-btn-hover alt-color-black d-none d-md-inline-block" 
                                          href="/sign-in">
                                       <span className="white-text">Sign In</span>
                                       <b></b>
                                    </Link>
                                 )}
                                 <a className="header-bottom__bar tp-menu-bar d-lg-none" 
                                  onClick={() => setSidebarOpen(true)}
                                 ><i className="fal fa-bars"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> 
            </header>
            <Offcanvus sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />

            <style jsx>{`
               .user-profile-dropdown {
                  position: relative;
               }
               .user-profile-btn {
                  background: white;
                  border: 2px solid #e5e7eb;
                  border-radius: 50px;
                  padding: 8px 16px;
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  font-weight: 600;
                  font-size: 14px;
               }
               .user-profile-btn:hover {
                  border-color: #3b82f6;
                  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
               }
               .user-avatar {
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  object-fit: cover;
               }
               .user-avatar-placeholder {
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  background: #f3f4f6;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #6b7280;
               }
               .user-name {
                  color: #1a1a1a;
                  font-weight: 600;
               }
               .user-dropdown-menu {
                  position: absolute;
                  top: calc(100% + 10px);
                  right: 0;
                  background: white;
                  border-radius: 12px;
                  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                  min-width: 240px;
                  z-index: 1000;
                  animation: dropdownFade 0.2s ease;
               }
               @keyframes dropdownFade {
                  from {
                     opacity: 0;
                     transform: translateY(-10px);
                  }
                  to {
                     opacity: 1;
                     transform: translateY(0);
                  }
               }
               .user-dropdown-header {
                  padding: 16px;
               }
               .user-full-name {
                  font-weight: 600;
                  font-size: 15px;
                  color: #1a1a1a;
                  margin: 0 0 4px 0;
               }
               .user-email {
                  font-size: 13px;
                  color: #6b7280;
                  margin: 0;
               }
               .user-dropdown-divider {
                  height: 1px;
                  background: #e5e7eb;
               }
               .user-dropdown-body {
                  padding: 8px;
               }
               .dropdown-item {
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  padding: 10px 12px;
                  border-radius: 8px;
                  text-decoration: none;
                  color: #374151;
                  font-size: 14px;
                  font-weight: 500;
                  transition: all 0.2s ease;
                  width: 100%;
                  border: none;
                  background: transparent;
                  cursor: pointer;
                  text-align: left;
               }
               .dropdown-item:hover {
                  background: #f3f4f6;
                  color: #1a1a1a;
               }
               .dropdown-item i {
                  width: 18px;
                  font-size: 16px;
               }
               .logout-btn {
                  color: #ef4444;
               }
               .logout-btn:hover {
                  background: #fef2f2;
                  color: #dc2626;
               }
            `}</style>
        </>
    );
};

export default HeaderFive;