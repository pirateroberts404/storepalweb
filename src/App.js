import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar';
import Overview from './Components/Overview';
import OrdersList from './Containers/OrdersContainer';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import orders from './Reducers/OrderReducers';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import { getAllOrders } from './Actions/ActionCreators';
import OrderDetail from './Containers/OrderDetailsContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const storePalApp = combineReducers({
  orders
})

const middleware = applyMiddleware(promise(), logger);
let store = createStore(storePalApp, middleware);

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
          <div className="s">
            <SideBar />
            <Route exact path="/" component={Overview}/>
            <Route exact path="/orders" component={OrdersList}/>
            <Route path="/orders/:id" component={OrderDetail}/>
          </div>
          </MuiThemeProvider>
        </Router>
        </Provider>
    );
  }
}
export default App;
