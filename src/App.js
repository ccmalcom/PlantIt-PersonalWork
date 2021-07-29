import React, { useState, useEffect } from 'react';
import './App.css';
import Sitebar from './site/Sitebar';
import {
  BrowserRouter as Router
} from 'react-router-dom';


function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect (() =>{ 
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) =>{ 
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    
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

    </div>
  );
}

export default App;
