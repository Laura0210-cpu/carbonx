import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Replace with your environment variable or direct URL
const API_URL = process.env.REACT_APP_BACKEND_URL || "https://carbonx-4jbn.onrender.com/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if (token) {
            axios.get(`${API_URL}/user/`, {
                headers: { Authorization: `Token ${token}` }
            })
            .then(response => {
                console.log("✅ User Data:", response.data); 
                setUser(response.data);
            })
            .catch(error => {
                console.error(
                    "❌ Error fetching user:",
                    error.response ? error.response.data : error
                );
                setUser(null);
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
