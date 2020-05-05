import React from 'react';
import {Route, Switch} from "react-router-dom";
import CovidPage from "./pages/CovidPage";

function App() {
    return (
        <Switch>
            <Route path="/" exact render={() => <CovidPage/>}/>
        </Switch>
    );
}

export default App;
