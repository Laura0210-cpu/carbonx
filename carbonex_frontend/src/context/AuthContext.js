import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            axios.get("http://127.0.0.1:8000/api/user/", {
                headers: { Authorization: `Token ${token}` }  // ✅ Send token
            })
            .then(response => {
                console.log("✅ User Data:", response.data);  // ✅ Debugging
                setUser(response.data);
            })
            .catch(error => {
                console.error("❌ Error fetching user:", error.response ? error.response.data : error);
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
