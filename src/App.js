
import './App.css';
import React,{ useEffect,useState } from 'react';
import Navbar from '../src/components/navbar/Navbar'
import Landing from './components/screens/Landing';
function App() {

  const [scroll,setScroll] = useState(0)
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
