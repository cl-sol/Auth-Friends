import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from "./components/Friends";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link className="nav" to="/login">Login</Link>
            </li>
            <li>
              <Link className="friendslist" to="/friends">Friends</Link>
              </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/friends" component={Friends} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
