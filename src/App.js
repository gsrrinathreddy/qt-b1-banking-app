import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Route} from 'react-router-dom';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Products from './pages/Products';
import Services from './pages/services/Services';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">   
     <Router>
      <Header/>
       <Route path="/login" component={Login}/>
       <Route path="/register" component={Register}/>
       <Route path="/products" component={Products}/>
       <Route path="/services" component={Services}/>
     </Router>
     
    </div>
  );
}

export default App;
