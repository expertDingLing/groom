import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Provider from './containers/provider'
import Home from './containers/Home'

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/provider' component={ Provider } />
          <Route path='/' component={ Home } />

      </Switch>
    </Router>
  );
}

export default App;
