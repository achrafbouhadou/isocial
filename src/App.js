import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
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
