import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "../../views/Home";
import Admin from "../../views/admin";
import secondPage from '../../views/secondPage'
import NotMatch from "../../views/notMatch";
import page404 from '../../views/notMatch/page404'
class index extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/admin" render={() => 
                            <Admin>
                        <Switch>
                          <Route path="/admin/home" component={Home}></Route>
                          <Route path="/admin/secondPage" component={secondPage}></Route>
                          <Route component={page404}></Route>
                        </Switch>
                            </Admin> 
                    } />
                        <Route component={NotMatch} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}


export default index;
