import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom" 
import Employees from "../../Components/employees";
import Inabilities from "../../Components/table-inabilities/inabilities";

function Routing() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <Employees />
                    </Route>
                    <Route path="/inabilities">
                        <Inabilities />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Routing


