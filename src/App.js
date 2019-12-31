import React, {Component} from 'react';
import './App.css';
import {createBrowserHistory} from "history";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import indexRoutes from "./constants/index.jsx";
import "./assets/scss/material-kit-react.css?v=1.3.0";

const hist = createBrowserHistory();

class App extends Component {
    render() {
        console.log(this.props.location);
        return (
            <>
                <Router history={hist}>
                    <BrowserRouter basename="/">
                        <Switch>
                            {indexRoutes.map((prop, key) => {
                                return <Route path={prop.path} key={key} component={prop.component}/>;
                            })}
                        </Switch>
                    </BrowserRouter>
                </Router>
            </>
        );
    }
}

export default App;
