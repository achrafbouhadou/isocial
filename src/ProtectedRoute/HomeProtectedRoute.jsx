import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export default function HomeProtectedRoute({ children }) {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
  
    return children;
}
