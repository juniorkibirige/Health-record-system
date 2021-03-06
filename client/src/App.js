import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navigation/navbar';
import login from './components/authComponents/login';
import register from './components/authComponents/register';
import home from './components/homePage'
import receptionPage from './components/pages/receptionPage'
import laboratoryPage from './components/pages/laboratoryPage'
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
     <Navbar />
      <br />
      <Route path='/login' exact component={login} />
      <Route path='/register' exact component={register} />
      <Route path='/homePage' exact component={home} />
      <Route path='/receptionPage' exact component={receptionPage} />
      <Route path='/laboratoryPage' exact component={laboratoryPage} />
      </div>
    </Router>
    
  );
}

export default App;
