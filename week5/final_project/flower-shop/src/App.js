import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Wedding from './components/Wedding/Wedding';
import Fall from './components/Fall/Fall.js';
import Spring from './components/Spring';
import Roses from './components/Roses/Roses';


const App = () => {

  return (
    <div >
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/wedding' component={Wedding} />
        <Route path='/fall' component={Fall} />
        <Route path='/spring' component={Spring} />
        <Route path='/roses' component={Roses} />
      </Switch>
    </div>
  );
}

export default App;