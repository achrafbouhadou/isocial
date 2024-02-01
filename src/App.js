import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Collabwith from './page/Collabwith';
import Collabs from './page/Collabs';
import Request from './page/Request';
import './axios';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/postsContext';
import HomeProtectedRoute from './ProtectedRoute/HomeProtectedRoute';
import CollabProtectedRoutes from './ProtectedRoute/CollabProtectedRoutes';


function App() {
  return (
    
    <AuthProvider>
       <PostProvider >
    <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/collabs" element={<Collabs />} />
            <Route path="/pending" element={<Request />} />
           
            <Route path="/" element={<HomeProtectedRoute><Home /></HomeProtectedRoute>} />
            <Route path="/colabwith" element={<CollabProtectedRoutes><Collabwith /></CollabProtectedRoutes>} />
           
            
          </Routes>
        </Router>
    </ChakraProvider>
    </PostProvider>
    </AuthProvider>
    
  );
}

export default App;
