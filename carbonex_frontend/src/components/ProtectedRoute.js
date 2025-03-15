import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles = ["buyer", "seller", "both"]  }) => {
    const token = localStorage.getItem("token");  // ✅ Keep the token check
    const { user} = useAuth();  // ✅ Get user info from AuthContext
    console.log("protected route: user", user);
    console.log("protectedRoute: user.role: ", user?.role);
    // If there's no token, redirect to login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // If user data isn't loaded yet, return nothing (prevents redirect loop)
    if (!user) return null;

    // If user's role is not allowed, redirect to /unauthorized
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    // Otherwise, allow access
    return children;
};

export default ProtectedRoute;
