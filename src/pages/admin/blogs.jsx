import React from 'react';
import SEO from '../../common/seo';
import AdminBlogManager from '../../components/admin/blog-manager';
import Wrapper from '../../layout/wrapper';
import ProtectedRoute from '../../components/admin/ProtectedRoute';

const AdminBlogs = () => {
    return (
        <ProtectedRoute requireAdmin={true}>
            <Wrapper>
                <SEO pageTitle={"Blai - Admin Blog Dashboard"} />
                <AdminBlogManager />
            </Wrapper>
        </ProtectedRoute>
    );
};

export default AdminBlogs;

