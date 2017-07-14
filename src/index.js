import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

import Index from './containers/Index';
import Profile from './containers/Profile';
import Article from './containers/Article';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Index}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/news/:article" component={Article}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
