import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from "./App";
import Login from "./Login";
import Notas from "./Notas";

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Router>
          <Switch>
              <Route
                  path={"/"} exact component={App} />
              <Route
                  path="/login"
                  exact component={Login} />
              <Route
                  path="/misNotas"
                  exact component={Notas} />
              <Route
                  path="/login"
                  exact component={Login} />
              <Route
                  path="/miPerfil"
                  exact component={App} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
