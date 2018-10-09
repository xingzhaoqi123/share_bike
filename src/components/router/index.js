import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "../../views/Home";
import Admin from "../../views/admin";
import secondPage from '../../views/secondPage'
import NotMatch from "../../views/notMatch";
class index extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/admin" render={() => <Admin>
                        <Route path="/admin/home" component={Home}></Route>
                        <Route path="/admin/secondPage" component={secondPage}></Route>
                        </Admin> } />
                        <Route component={NotMatch} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}


export default index;
