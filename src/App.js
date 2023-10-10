import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import NavBar from './layouts/navbar';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'

function App() {

  useEffect( ()=>{
    Aos.init({
      duration: 2000,
      distance: '100px',
      delay: 600,
      interval: 100,
    })
  }, []);

  return (
    <NextUIProvider>
      <NavBar />
    </NextUIProvider>
  );
}

export default App;
