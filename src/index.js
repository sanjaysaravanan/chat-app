import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
    </Switch>
  </Router>
);

ReactDOM.render(<StrictMode><Root /></StrictMode>, document.getElementById('root'));
registerServiceWorker();
