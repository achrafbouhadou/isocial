import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export default function CollabProtectedRoutes({ children }) {
    const { isLoggedIn } = useContext(AuthContext);
  
  
    return children;
}
