import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom" 
import APIFetching from '../APIFetching';
import Example3 from '../ExampleJSX';
import Valores from '../ExampleJSX/valor';
import Menu from './menu';

function Routing() {
    return (
        <div>
            <HashRouter>
                <Menu />

                <Switch>
                    <Route exact path="/">
                        <Valores />
                    </Route>
                    <Route path="/jsx">
                        <Example3 />
                    </Route>
                    <Route path="/api">
                        <APIFetching />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Routing


