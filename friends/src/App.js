import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <Link className="nav" to="/login">Login</Link>
          <br />
          
        </ul>
      </div>
    </div>
  );
}

export default App;
