import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import SignUp from './page/SignUp';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <ChakraProvider>
        <SignUp />
    </ChakraProvider>
    </>
  );
}

export default App;
