import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { thunk } from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers/rootReducer';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Aboutme from './components/Aboutme';

const history = createBrowserHistory();
const middleware = applyMiddleware(
  thunk,
  routerMiddleware(history)
);

//enable redux-dev-tools Chrome plugin
const emptyMiddleware = () => f => f;
const { devToolsExtension = emptyMiddleware } = window;

const finalCreateStore = compose(
  middleware,
  devToolsExtension()
)(createStore)
const store = finalCreateStore(rootReducer);

class App extends React.PureComponent {
  constructor() {
    super();
  }

  siteRoutes = [
    {
      path: '/',
      title: 'My Website',
      isExact: true,
      component: Introduction
    },
    {
      path: '/intro',
      title: 'About Me',
      isExact: true,
      component: Aboutme
    }
  ]
  
  render() {
    return (
      <Provider store={store}>
          <div classNam='main'>
            {
              window.location.pathname !== '/from' &&
              <Header navLinks={this.siteRoutes} />
            }
            <Routes>
              {/* <Route> */}
                {
                  this.siteRoutes.map(r => 
                    <Route key={r.path} exact={r.isExact} path={r.path} element={<r.component/>}/>
                    )
                }
                {/* <Navigate to='/' /> */}
              {/* </Route> */}
            </Routes>
          </div>
      </Provider>
    );
  }
}

export default App;
