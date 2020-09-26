import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import routes from '../../routes/genericRoutes';

function index() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Switch>
        {routes.map((route, index) => {
          return route.component ? (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(props) => <route.component {...props} />}
            />
          ) : null;
        })}
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default index;
