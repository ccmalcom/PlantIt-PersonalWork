import React, { useState, useEffect } from 'react';
import './App.css';
import Sitebar from './site/Sitebar';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Footer from './site/Footer';


function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [sessionUUID, setSessionUUID] = useState('');

  useEffect (() =>{ 
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken, newUUID) =>{ 
    localStorage.setItem('token', newToken);
    localStorage.setItem('UUID', newUUID.toString());
    setSessionToken(newToken);
    setSessionUUID(newUUID);
    
  }

  const clearSession =()=>{
    localStorage.clear();
    setSessionToken('');
  }
  
  return (
    <div className="App">
      {console.log(sessionToken)}
      <Router>

      <Sitebar clearSession={clearSession} updateToken={updateToken} token={sessionToken} />
      </Router>
      {/* <Home  updateToken={updateToken} token={sessionToken} /> */}
      
      {/* <Auth updateToken={updateToken}/> */}
      
      {/* <GardenIndex token={sessionToken}/> */}
      {/* <PlantsIndex token={sessionToken}/> */}
      <Footer />
    </div>
  );
}

export default App;
