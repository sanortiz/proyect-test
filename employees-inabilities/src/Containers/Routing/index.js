import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom" 
import Employees from '../../Components/employees';
import APIFetching from '../APIFetching';
import Example3 from '../ExampleJSX';
import Valores from '../ExampleJSX/valor';
//import Menu from './menu';

function Routing() {
    return (
        <div>
            <HashRouter>
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
                    <Route path="/employees">
                        <Employees />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Routing


