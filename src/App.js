import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route path="/recipes">
                    <h1>I am recipes page</h1>
                </Route>
                <Route path="/">
                    <h1>I am homepage</h1>
                </Route>
            </Switch>
            <TinderCards/>
        </Router>
    </div>
  );
}

export default App;
