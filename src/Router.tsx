import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom'
import { HomePage } from './modules/home/views';
import { _404Page } from './modules/errors/views/_404Page';

// TODO: Create the sidebar routes (create menu extensions)
// TODO: Create the public routes
// TODO: Create the private routes
// TODO: Nested routes

export const RouterApp = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="*">
                <_404Page />
            </Route>
        </Switch>
    </Router>
)