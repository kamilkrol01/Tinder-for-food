import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';


function App() {
    return (
        <div className="App">
            <Router forceRefresh={"/"}>
                <Switch>
                    <Route path="/recipes">
                        <Header backButton={"/"}/>
                        <h1>I am the chat page</h1>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <TinderCards/>
                        <SwipeButtons/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
