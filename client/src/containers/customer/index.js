import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes/customerRoutes';
import Header from './Header';
import Footer from '../generic/Footer';

function index() {
  return (
    <React.Fragment>
      <Header />
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
