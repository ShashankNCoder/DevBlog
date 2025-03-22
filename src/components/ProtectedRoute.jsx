import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const authStatus = useSelector((state) => state.auth.status);
    const location = useLocation();

    if (!authStatus) {
        // Redirect to login and save the attempted URL
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return children;
};

export default ProtectedRoute; 