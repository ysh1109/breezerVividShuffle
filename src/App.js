
import './App.css';
import React, {useState} from 'react';
import Navbar from '../src/components/navbar/Navbar'
import Landing from './components/screens/Landing';
import FAQ from './components/screens/FAQ.js';
import VoiceOfTheStreets from './components/screens/VoiceOfTheStreets.js'; 


function App() {
  const [activeScreen, setActiveScreen] = useState(0)
	const [abt, setAbt] = useState(null);
	const [cat, setCat] = useState(null);
	const [vots, setVots] = useState(null);
  return (
    <div className="App">
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen}
		abt={abt} setAbt={setAbt} cat={cat} setCat={setCat} vots={vots} setVots={setVots}
	  />
	  {activeScreen === 0 && <Landing 
		abt={abt} setAbt={setAbt} cat={cat} setCat={setCat} vots={vots} setVots={setVots}
	  />}
	  {activeScreen === 1 && <VoiceOfTheStreets/>}
	  {activeScreen === 2 && <FAQ />}
    </div>
  );
}

export default App;
