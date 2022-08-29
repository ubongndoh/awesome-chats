import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from './pages/Chats';
import Home from './pages/Home';
function AppRoute() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/chats'>
                        <Chats />
                    </Route>
                </Switch>
            </Router>


        </>
    )
}

export default AppRoute