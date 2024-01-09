import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';

import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext';
import HomeProtectedRoute from './ProtectedRoute/HomeProtectedRoute';


function App() {
  return (
    <AuthProvider>
    <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<HomeProtectedRoute><Home /></HomeProtectedRoute>} />
          </Routes>
        </Router>
    </ChakraProvider>
    </AuthProvider>
    
  );
}

export default App;
