
import './App.css';
import React, {useState} from 'react';
import Navbar from '../src/components/navbar/Navbar'
import Landing from './components/screens/Landing';
import FAQ from './components/screens/FAQ.js';
import SOS from '../src/components/screens/Sos.js'
import VoiceOfTheStreets from './components/screens/VoiceOfTheStreets.js'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
    const [activeScreen, setActiveScreen] = useState(0)
	const [abt, setAbt] = useState(null);
	const [cat, setCat] = useState(null);
	const [vots, setVots] = useState(null);
  return (
	<Router>
    <div className="App">
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen}
		abt={abt} setAbt={setAbt} cat={cat} setCat={setCat} vots={vots} setVots={setVots}
	  />
        <Switch>
          <Route path="/voiceofthestreets">
            <VoiceOfTheStreets />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/sos">
            <SOS />
          </Route>
          <Route path="/">
			<Landing abt={abt} setAbt={setAbt} cat={cat} setCat={setCat} vots={vots} setVots={setVots}
	  		/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
