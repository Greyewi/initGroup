import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './css/index.css';

import Layout from './components/Layout';
import First from './components/First';
import Second from './components/Second';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="/first" component={First} />
      <Route path="/second" component={Second} />
    </Route>
  </Router>,
  document.getElementById('root')
);


