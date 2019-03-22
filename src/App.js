import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
// import logo from './logo.svg';
import './App.css';
import ProtectedRoute from './hoc/ProtectedRoute/ProtectedRoute'
import Layout from './hoc/layout/layout';  
import Counter from './containers/Counter/Counter';
export default class App extends Component {
  
  
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/" exact component={Counter}/>
            <ProtectedRoute path='/about' component={About}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

// export default App;
