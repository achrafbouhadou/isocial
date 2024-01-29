import { useState, createContext, useEffect } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token'); 
            if (!token) {
                setIsLoggedIn(false);
                return;
            }

            const verificationApi = '/auth/authTokenVerification.php';
            try {
               const response  =  await axios.get(verificationApi, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log(response.data)
                setIsLoggedIn(true);
            } catch (error) {
               
                setIsLoggedIn(false);
                localStorage.removeItem('token'); 
            }
        };

        verifyToken();
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token); 
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token'); 
    };

    const data = { isLoggedIn, login, logout };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}
