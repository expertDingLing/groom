import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import configureStore, { history } from './store/configureStore';
import theme from './theme';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './containers/Home'

const store = configureStore();

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/dashboard" component={Home} /> */}
            </Switch>
            <Footer />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );

  }

}

export default App;
