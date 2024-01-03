import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import SignUp from './page/SignUp';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <ChakraProvider>
        <Home />
    </ChakraProvider>
    </>
  );
}

export default App;
