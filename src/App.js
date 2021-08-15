import logo from './logo.svg';
import './App.css';

import React from 'react';
import { useState } from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

    return ( 
        <Router>
            <React.Fragment>  
                <Switch>
                    <Route path="/" exact component={Home} />         
                </Switch> 
            </React.Fragment>
        </Router>
    );
}

export default App;