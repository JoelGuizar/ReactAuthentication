import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <App />
    </Router>
  </Provider>
  , document.querySelector('.container'));

//cookies v. tokens

/*cookies: automatically included on all requests,
unique to each domain
cannot be sent to different domains, so cant hijack other people sessions
Headers - cookie: {}

Tokens: have to manually wire, can be sent to any domain/multiple domain
headers - authorization: asd2312d..
-> way to go since API server could be from a different domain,
and tokens can be cross-domain */
