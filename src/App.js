
import './App.css';
import React from 'react';
import Navbar from '../src/components/navbar/Navbar'
import Landing from './components/screens/Landing';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
