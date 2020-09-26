import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import configureStore, { history } from './store/configureStore';
import theme from './theme';
import provider from './containers/provider';
import home from './containers/generic';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/provider" component={provider} />
            <Route path="/" component={home} />
          </Switch>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
