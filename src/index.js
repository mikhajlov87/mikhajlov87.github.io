import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Index from './containers/Index';
import Profile from './containers/Profile';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Index}/>
      <Route path="/profile" component={Profile}/>
      {/* <Route path="/article" component={Article}/> */}
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
