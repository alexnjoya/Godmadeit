import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
    const { user, loading, isAuthenticated, isAdmin } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            // Not authenticated - redirect to sign-in
            if (!isAuthenticated()) {
                router.push('/sign-in');
                return;
            }

            // Requires admin but user is not admin - redirect to blog
            if (requireAdmin && !isAdmin()) {
                router.push('/blog');
                return;
            }
        }
    }, [loading, user, router, requireAdmin, isAuthenticated, isAdmin]);

    // Show loading state
    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                fontSize: '18px',
                color: '#666'
            }}>
                Loading...
            </div>
        );
    }

    // Not authenticated
    if (!isAuthenticated()) {
        return null;
    }

    // Requires admin but user is not admin
    if (requireAdmin && !isAdmin()) {
        return null;
    }

    // User is authorized
    return children;
};

export default ProtectedRoute;

