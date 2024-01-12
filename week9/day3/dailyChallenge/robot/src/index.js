import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware } from "redux"; 
import thunkMiddleware from "redux-thunk";
import { robotReducer } from "./reducers";
import App from "./App";

const store = configureStore(robotReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);