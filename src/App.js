
import './App.css';
import React, {useState} from 'react';
import Navbar from '../src/components/navbar/Navbar'
import Landing from './components/screens/Landing';
import FAQ from './components/screens/FAQ.js';
import SOS from '../src/components/screens/Sos.js'
import VoiceOfTheStreets from './components/screens/VoiceOfTheStreets.js'; 
import Voting from './components/screens/Voting';
import PhotoBooth from './components/photobooth/PhotoBooth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Admin from './components/screens/Admin';


function App() {
    const [activeScreen, setActiveScreen] = useState(0)
	const [abt, setAbt] = useState(null);
	const [cat, setCat] = useState(null);
	const [vots, setVots] = useState(null);
  return (
	<Router>
    <div className="App">
    
        <Switch>
          <Route path="/voiceofthestreets">
          <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen}
		abt={abt} setAbt={setAbt} cat={cat} setCat={setCat} vots={vots} setVots={setVots}
	  />
            <VoiceOfTheStreets />
          </Route>
          <Route path="/faq">
          <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen}
		abt={abt} setAbt={setAbt} cat={cat} setCat={setCat} vots={vots} setVots={setVots}
	  />
            <FAQ />
          </Route>
          <Route path="/voteforyourfavouriteplayer">
             <Voting/>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/photobooth" exact component={PhotoBooth}/>
          <Route path="/">
          <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen}
		abt={abt} setAbt={setAbt} cat={cat} setCat={setCat} vots={vots} setVots={setVots}
	  />
			<Landing abt={abt} setAbt={setAbt} cat={cat} setCat={setCat} vots={vots} setVots={setVots}
	  		/>
          </Route>
          

        </Switch>
    </div>
    </Router>
  );
}

export default App;
