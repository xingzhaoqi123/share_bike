import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "../../views/Home";
import Admin from "../../views/admin";
import secondPage from '../../views/secondPage'
import NotMatch from "../../views/notMatch";
import page404 from '../../views/notMatch/page404'
import orderForm from '../../views/orderForm'
import pie from '../../views/echarts/pie'
import bar from '../../views/echarts/bar'
class index extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/admin" render={() => 
                            <Admin>
                        <Switch>
                          <Route path="/admin/Home" component={Home}></Route>
                          <Route path="/admin/secondPage" component={secondPage}></Route>
                          <Route path='/admin/echarts/bar' component={bar}></Route> 
                          <Route path='/admin/orderForm' component={orderForm}></Route> 
                          <Route path='/admin/echarts/pie' component={pie}></Route>
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
