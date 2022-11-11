import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import Recipes from "./components/Recipes";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './css/App.css';
import SwipeButtons from "./components/SwipeButtons";


function App() {
    return (
        <div className="App">
            <Router forceRefresh={true}>
                <Switch>
                    <Route path="/recipes">
                        <Header backButton={"/"}/>
                        <Recipes/>
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
