import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { accountReducer } from './reducers/accountReducer.js';
import { bonusReducer } from './reducers/bonusReducer.js';


const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
)
